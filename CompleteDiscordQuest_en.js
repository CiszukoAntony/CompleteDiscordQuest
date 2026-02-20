// Complete Discord Quest Script.
// Works as of January 2026.
// Made by CiszukoAntony.
// Gist Updated

// Instructions:
// 1. Open Discord on desktop app.
// 2. Go to User Settings > Advanced > Developer Mode and enable it.
// 3. Open any server and press Ctrl + Shift + I to open the developer tools.
// 4. WARNING: Go to the "Console" tab, type "allow pasting" in the text box, and press Enter. This is to allow pasting long scripts.
// 5. Copy and paste the complete script below into the console and press Enter.
// 6. Wait for the script to automatically complete your quests.
// 7. If you want to stop the script at any time, type "window.stopQuestScript = true" in the console and press Enter.
// 8. If you want to resume the script, type "window.stopQuestScript = false" and press Enter.
// 9. Enjoy your Quest rewards!

// Note: Some quests require you to be in a voice channel with at least one other person to count the time. Make sure to meet those requirements to complete those quests.

delete window.$;
window.stopQuestScript = false; // Global variable to stop the script
let wpRequire = webpackChunkdiscord_app.push([[Symbol()], {}, r => r]);
webpackChunkdiscord_app.pop();

// Nueva lógica robusta para obtener los stores
function getStore(findFn, fallback = null) {
    try {
        return Object.values(wpRequire.c).find(findFn);
    } catch (e) {
        console.warn('Store no encontrado:', e);
        return fallback;
    }
}

let ApplicationStreamingStore = getStore(x => x?.exports?.Z?.__proto__?.getStreamerActiveStreamMetadata)?.exports?.Z ||
    getStore(x => x?.exports?.A?.__proto__?.getStreamerActiveStreamMetadata)?.exports?.A;
let RunningGameStore = getStore(x => x?.exports?.Ay?.getRunningGames)?.exports?.Ay ||
    getStore(x => x?.exports?.ZP?.getRunningGames)?.exports?.ZP;
let QuestsStore = getStore(x => x?.exports?.A?.__proto__?.getQuest)?.exports?.A ||
    getStore(x => x?.exports?.Z?.__proto__?.getQuest)?.exports?.Z;
let ChannelStore = getStore(x => x?.exports?.A?.__proto__?.getAllThreadsForParent)?.exports?.A ||
    getStore(x => x?.exports?.Z?.__proto__?.getAllThreadsForParent)?.exports?.Z;
let GuildChannelStore = getStore(x => x?.exports?.Ay?.getSFWDefaultChannel)?.exports?.Ay ||
    getStore(x => x?.exports?.ZP?.getSFWDefaultChannel)?.exports?.ZP;
let FluxDispatcher = getStore(x => x?.exports?.h?.__proto__?.flushWaitQueue)?.exports?.h ||
    getStore(x => x?.exports?.Z?.__proto__?.flushWaitQueue)?.exports?.Z;
let api = getStore(x => x?.exports?.Bo?.get)?.exports?.Bo ||
    getStore(x => x?.exports?.tn?.get)?.exports?.tn;

if (!QuestsStore || !ChannelStore || !GuildChannelStore || !FluxDispatcher || !api) {
    console.error('No se pudieron obtener los stores necesarios. El script no puede continuar.');
    window.stopQuestScript = true;
    // Detenemos la ejecución sin usar return fuera de función
    throw new Error('No se pudieron obtener los stores necesarios. El script no puede continuar.');
}

const supportedTasks = ["WATCH_VIDEO", "PLAY_ON_DESKTOP", "STREAM_ON_DESKTOP", "PLAY_ACTIVITY", "WATCH_VIDEO_ON_MOBILE"]
let quests = [];
try {
    quests = [...QuestsStore.quests.values()].filter(x => x.userStatus?.enrolledAt && !x.userStatus?.completedAt && new Date(x.config.expiresAt).getTime() > Date.now() && supportedTasks.find(y => Object.keys((x.config.taskConfig ?? x.config.taskConfigV2).tasks).includes(y)));
} catch (e) {
    console.error('Error obteniendo quests:', e);
}
let isApp = typeof DiscordNative !== "undefined"
if(quests.length === 0) {
    console.log("You don't have any uncompleted quests!")
} else {
    let doJob = function() {
        if(window.stopQuestScript) {
            console.log("Script stopped by user.");
            return;
        }
        const quest = quests.pop()
        if(!quest) return

        const pid = Math.floor(Math.random() * 30000) + 1000
        
        const applicationId = quest.config.application.id
        const applicationName = quest.config.application.name
        const questName = quest.config.messages.questName
        const taskConfig = quest.config.taskConfig ?? quest.config.taskConfigV2
        const taskName = supportedTasks.find(x => taskConfig.tasks && taskConfig.tasks[x] != null)
        const secondsNeeded = taskConfig.tasks[taskName].target
        let secondsDone = quest.userStatus?.progress?.[taskName]?.value ?? 0

        if(taskName === "WATCH_VIDEO" || taskName === "WATCH_VIDEO_ON_MOBILE") {
            const maxFuture = 10, speed = 7, interval = 1
            const enrolledAt = new Date(quest.userStatus.enrolledAt).getTime()
            let completed = false
            let fn = async () => {            
                while(true) {
                    if(window.stopQuestScript) {
                        console.log("Script stopped during video quest.");
                        return;
                    }
                    const maxAllowed = Math.floor((Date.now() - enrolledAt)/1000) + maxFuture
                    const diff = maxAllowed - secondsDone
                    const timestamp = secondsDone + speed
                    if(diff >= speed) {
                        const res = await api.post({url: `/quests/${quest.id}/video-progress`, body: {timestamp: Math.min(secondsNeeded, timestamp + Math.random())}})
                        completed = res.body.completed_at != null
                        secondsDone = Math.min(secondsNeeded, timestamp)
                    }
                    
                    if(timestamp >= secondsNeeded) {
                        break
                    }
                    await new Promise(resolve => setTimeout(resolve, interval * 1000))
                }
                if(!completed) {
                    await api.post({url: `/quests/${quest.id}/video-progress`, body: {timestamp: secondsNeeded}})
                }
                console.log("Quest completed!")
                doJob()
            }
            fn()
            console.log(`Spoofing video for ${questName}.`)
        } else if(taskName === "PLAY_ON_DESKTOP") {
            if(!isApp) {
                console.log("This no longer works in the browser for non-video quests. Use the Discord desktop app to complete the", questName, "quest!")
            } else {
                api.get({url: `/applications/public?application_ids=${applicationId}`}).then(res => {
                    const appData = res.body[0]
                    let exeName = appData.name;
                    let fakeGame;
                    if (appData.executables && Array.isArray(appData.executables)) {
                        const exeWin = appData.executables.find(x => x.os === "win32");
                        if (exeWin) {
                            exeName = exeWin.name.replace(/>/g, "");
                        }
                    }
                    // Spoof aunque no haya executables, usando solo el nombre y el ID
                    fakeGame = {
                        cmdLine: `C:\\Program Files\\${appData.name}\\${exeName}`,
                        exeName,
                        exePath: `c:/program files/${appData.name.toLowerCase()}/${exeName}`,
                        hidden: false,
                        isLauncher: false,
                        id: applicationId,
                        name: appData.name,
                        pid: pid,
                        pidPath: [pid],
                        processName: appData.name,
                        start: Date.now(),
                    }
                    const realGames = RunningGameStore.getRunningGames()
                    const fakeGames = [fakeGame]
                    const realGetRunningGames = RunningGameStore.getRunningGames
                    const realGetGameForPID = RunningGameStore.getGameForPID
                    RunningGameStore.getRunningGames = () => fakeGames
                    RunningGameStore.getGameForPID = (pid) => fakeGames.find(x => x.pid === pid)
                    FluxDispatcher.dispatch({type: "RUNNING_GAMES_CHANGE", removed: realGames, added: [fakeGame], games: fakeGames})
                    
                    let fn = data => {
                        let progress = quest.config.configVersion === 1 ? data.userStatus.streamProgressSeconds : Math.floor(data.userStatus.progress.PLAY_ON_DESKTOP.value)
                        console.log(`Quest progress: ${progress}/${secondsNeeded}`)
                        
                        if(progress >= secondsNeeded) {
                            console.log("Quest completed!")
                            
                            RunningGameStore.getRunningGames = realGetRunningGames
                            RunningGameStore.getGameForPID = realGetGameForPID
                            FluxDispatcher.dispatch({type: "RUNNING_GAMES_CHANGE", removed: [fakeGame], added: [], games: []})
                            FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn)
                            
                            doJob()
                        }
                    }
                    FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn)
                    
                    console.log(`Spoofed your game to ${applicationName}. Wait ${Math.ceil((secondsNeeded - secondsDone) / 60)} more minutes.`)
                })
            }
        } else if(taskName === "STREAM_ON_DESKTOP") {
            if(!isApp) {
                console.log("This no longer works in the browser for non-video quests. Use the Discord desktop app to complete the", questName, "quest!")
            } else {
                let realFunc = ApplicationStreamingStore.getStreamerActiveStreamMetadata
                ApplicationStreamingStore.getStreamerActiveStreamMetadata = () => ({
                    id: applicationId,
                    pid,
                    sourceName: null
                })
                
                let fn = data => {
                    let progress = quest.config.configVersion === 1 ? data.userStatus.streamProgressSeconds : Math.floor(data.userStatus.progress.STREAM_ON_DESKTOP.value)
                    console.log(`Quest progress: ${progress}/${secondsNeeded}`)
                    
                    if(progress >= secondsNeeded) {
                        console.log("Quest completed!")
                        
                        ApplicationStreamingStore.getStreamerActiveStreamMetadata = realFunc
                        FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn)
                        
                        doJob()
                    }
                }
                FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn)
                
                console.log(`Spoofed your stream to ${applicationName}. Stream any window in vc for ${Math.ceil((secondsNeeded - secondsDone) / 60)} more minutes.`)
                console.log("Remember that you need at least 1 more person to be in the vc!")
            }
        } else if(taskName === "PLAY_ACTIVITY") {
            let channelId = null;
            try {
                const privChannels = ChannelStore.getSortedPrivateChannels();
                if (privChannels && privChannels.length > 0) {
                    channelId = privChannels[0].id;
                } else {
                    const guilds = Object.values(GuildChannelStore.getAllGuilds());
                    const vocalGuild = guilds.find(x => x != null && x.VOCAL && x.VOCAL.length > 0);
                    if (vocalGuild) {
                        channelId = vocalGuild.VOCAL[0].channel.id;
                    }
                }
            } catch (e) {
                console.error('Error obteniendo channelId:', e);
            }
            if (!channelId) {
                console.error('No se pudo obtener channelId para PLAY_ACTIVITY.');
                return;
            }
            const streamKey = `call:${channelId}:1`;
            
            let fn = async () => {
                console.log("Completing quest", questName, "-", quest.config.messages.questName)
                
                while(true) {
                    if(window.stopQuestScript) {
                        console.log("Script stopped during activity quest.");
                        return;
                    }
                    const res = await api.post({url: `/quests/${quest.id}/heartbeat`, body: {stream_key: streamKey, terminal: false}})
                    const progress = res.body.progress.PLAY_ACTIVITY.value
                    console.log(`Quest progress: ${progress}/${secondsNeeded}`)
                    
                    await new Promise(resolve => setTimeout(resolve, 20 * 1000))
                    
                    if(progress >= secondsNeeded) {
                        await api.post({url: `/quests/${quest.id}/heartbeat`, body: {stream_key: streamKey, terminal: true}})
                        break
                    }
                }
                
                console.log("Quest completed! - Thanks for using my script - CiszukoAntony")
                doJob()
            }
            fn()
        }
    }
    doJob()
}