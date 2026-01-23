# 🎮 Complete Discord Quest Script

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Works as of January 2026](https://img.shields.io/badge/Works%20as%20of-January%202026-blue.svg)

> Automatically complete Discord quests with ease! 🚀 Made by CiszukoAntony.

## 📋 Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation & Usage](#installation--usage)
- [Script](#script)
- [Commands](#commands)
- [Progress Tracking](#progress-tracking)
- [FAQ](#faq)
- [License](#license)

## ✨ Features
- 🔄 **Automatic Quest Completion**: Spoofs video watching, game playing, streaming, and activity tasks.
- 🛑 **Stop/Resume Functionality**: Control the script anytime with simple console commands.
- 🌐 **Multi-Language Support**: Available in English and Spanish.
- 🖥️ **Desktop App Required**: Optimized for Discord's desktop application.
- ⚡ **Real-time Progress**: Monitor quest progress directly in the console.
- 🔒 **Safe & Open Source**: MIT licensed, no malicious code.

## 📋 Prerequisites
- **Discord Desktop App**: This script only works on the desktop application, not in browsers.
- **Developer Mode Enabled**: Required to access developer tools.
- **Active Quests**: You need enrolled, uncompleted quests in Discord.

## 🚀 Installation & Usage

### Step-by-Step Guide

1. **Open Discord Desktop App** 🖥️
   - Ensure you're using the official Discord desktop client (not web or mobile).

2. **Enable Developer Mode** ⚙️
   - Go to `User Settings > Advanced > Developer Mode` and toggle it on.
   - If that doesn't work, edit your settings file:
     - **Windows**: `%AppData%\discord\settings.json`
     - **Linux**: `~/.config/discord/settings.json`
     - **macOS**: `~/Library/Application Support/discord/settings.json`
   - Add this line: `"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true`
   - Save and restart Discord.

3. **Open Developer Tools** 🛠️
   - Join any server and press `Ctrl + Shift + I` (or `Cmd + Option + I` on Mac) to open DevTools.
   - If the shortcut doesn't work, right-click anywhere and select "Inspect Element".

4. **Enable Pasting in Console** ⚠️
   - Go to the "Console" tab.
   - Type `"allow pasting"` and press Enter. This allows pasting long scripts.

5. **Copy & Paste the Script** 📋
   - Copy the entire script from the [Script](#script) section below.
   - Paste it into the console and press Enter.

6. **Monitor Progress** 👀
   - Watch the console for progress updates.
   - The script will automatically complete your quests.

7. **Enjoy Your Rewards** 🎉
   - Once completed, claim your quest rewards manually.

### Important Notes
- **Voice Channel Requirements**: Some quests require you to be in a voice channel with at least one other person.
- **Quest Types Supported**:
  - 🎥 Video watching
  - 🕹️ Game playing
  - 📺 Streaming
  - 🎮 Activity participation

## 📜 Script

Copy and paste this entire script into the Discord console:

```javascript
// Complete Discord Quest Script.
// Works as of January 2026.
// Made by CiszukoAntony.

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

let ApplicationStreamingStore = Object.values(wpRequire.c).find(x => x?.exports?.Z?.__proto__?.getStreamerActiveStreamMetadata)?.exports?.Z;
let RunningGameStore, QuestsStore, ChannelStore, GuildChannelStore, FluxDispatcher, api
if(!ApplicationStreamingStore) {
    ApplicationStreamingStore = Object.values(wpRequire.c).find(x => x?.exports?.A?.__proto__?.getStreamerActiveStreamMetadata).exports.A;
    RunningGameStore = Object.values(wpRequire.c).find(x => x?.exports?.Ay?.getRunningGames).exports.Ay;
    QuestsStore = Object.values(wpRequire.c).find(x => x?.exports?.A?.__proto__?.getQuest).exports.A;
    ChannelStore = Object.values(wpRequire.c).find(x => x?.exports?.A?.__proto__?.getAllThreadsForParent).exports.A;
    GuildChannelStore = Object.values(wpRequire.c).find(x => x?.exports?.Ay?.getSFWDefaultChannel).exports.Ay;
    FluxDispatcher = Object.values(wpRequire.c).find(x => x?.exports?.h?.__proto__?.flushWaitQueue).exports.h;
    api = Object.values(wpRequire.c).find(x => x?.exports?.Bo?.get).exports.Bo;
} else {
    RunningGameStore = Object.values(wpRequire.c).find(x => x?.exports?.ZP?.getRunningGames).exports.ZP;
    QuestsStore = Object.values(wpRequire.c).find(x => x?.exports?.Z?.__proto__?.getQuest).exports.Z;
    ChannelStore = Object.values(wpRequire.c).find(x => x?.exports?.Z?.__proto__?.getAllThreadsForParent).exports.Z;
    GuildChannelStore = Object.values(wpRequire.c).find(x => x?.exports?.ZP?.getSFWDefaultChannel).exports.ZP;
    FluxDispatcher = Object.values(wpRequire.c).find(x => x?.exports?.Z?.__proto__?.flushWaitQueue).exports.Z;
    api = Object.values(wpRequire.c).find(x => x?.exports?.tn?.get).exports.tn;    
}

const supportedTasks = ["WATCH_VIDEO", "PLAY_ON_DESKTOP", "STREAM_ON_DESKTOP", "PLAY_ACTIVITY", "WATCH_VIDEO_ON_MOBILE"]
let quests = [...QuestsStore.quests.values()].filter(x => x.userStatus?.enrolledAt && !x.userStatus?.completedAt && new Date(x.config.expiresAt).getTime() > Date.now() && supportedTasks.find(y => Object.keys((x.config.taskConfig ?? x.config.taskConfigV2).tasks).includes(y)))
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
        const taskName = supportedTasks.find(x => taskConfig.tasks[x] != null)
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
                    const exeName = appData.executables.find(x => x.os === "win32").name.replace(">","")
                    
                    const fakeGame = {
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
            const channelId = ChannelStore.getSortedPrivateChannels()[0]?.id ?? Object.values(GuildChannelStore.getAllGuilds()).find(x => x != null && x.VOCAL.length > 0).VOCAL[0].channel.id
            const streamKey = `call:${channelId}:1`
            
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
```

## 🎮 Commands

- **Stop Script**: `window.stopQuestScript = true`
- **Resume Script**: `window.stopQuestScript = false`

## 📊 Progress Tracking

Monitor your quest progress by checking the console logs:
- `Quest progress: X/Y` - Shows current progress for play/stream quests.
- `Spoofing video for [Quest Name]` - Indicates video quest is running.
- `Quest completed!` - Quest finished successfully.

For video quests, you can also check the progress bar in Discord's Quests tab.

## ❓ FAQ

**Q: Can I get banned for using this?**

A: There is always a risk, although so far no one has been banned for this or other similar things like client mods.

**Q: Ctrl + Shift + I doesn't work**

A: Download the [PTB client](https://discord.com/api/downloads/distributions/app/installers/latest?channel=ptb&platform=win&arch=x64), or use [this](https://www.reddit.com/r/discordapp/comments/sc61n3/comment/hu4fw5x/) to enable DevTools in stable.

**Q: Ctrl + Shift + I takes a screenshot**

A: Disable the keyboard shortcut in your AMD Radeon app.

**Q: I get a syntax error/unexpected token error**

A: Make sure your browser isn't automatically translating this website before copying the script. Disable any translator extensions and try again.

**Q: I'm on Vesktop but it tells me I'm using a browser**

A: Vesktop is not a real desktop client, it's an elegant browser wrapper. Download the real desktop app instead.

**Q: I get a different error**

A: Make sure to copy/paste the script correctly and that you've done all the steps.

**Q: Can I complete expired quests with this?**

A: No, there is no way to do that.

**Q: Can you make the script automatically accept the quest/reward?**

A: No. Both actions may show a captcha, so automating them is not a good idea. Just do the two clicks yourself.

**Q: Can you make this a Vencord plugin?**

A: No. The script sometimes requires immediate updates for Discord changes, and Vencord's update and code review cycle would be too slow for that. There are some Vencord forks that have implemented this script or their own quest completers if you really want one.

**Q: Can you upload the independent script to a repo and make this gist's code be a one-line fetch()?**

A: No. Doing that would put you at risk because I (or someone in my account) could change the underlying code to be malicious at any time, then forcepush it away later, and you'd never know.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Disclaimer**: Use at your own risk. This script is for educational purposes only.
