// Script Complete Discord Quest en Español.
// Funciona desde enero de 2026.
// Hecho por CiszukoAntony.

// Instrucciones:
// 1. Abre Discord en aplicacion de escritorio.
// 2. Ve a Configuración de Usuario > Avanzado > Modo Desarrollador y actívalo.
// 3. Abre cualquier servidor y presiona Ctrl + Shift + I para abrir las herramientas de desarrollo.
// 4. ADVERTENCIA: Ve a la pestaña "Consola" escribe en el cuadro de texto "allow pasting", y presiona Enter. Esto es para permitir pegar scripts largos.
// 5. Copia y pega este script de abajo completo en la consola y presiona Enter.
// 6. Espera a que el script complete tus quests automáticamente.
// 7. Si deseas detener el script en cualquier momento, escribe "window.stopQuestScript = true" en la consola y presiona Enter.
// 8. Si deseas "windown.stopQuestScript = false" y presiona Enter para reanudar el script si lo detuviste antes de que terminara todas las quests.
// 9. ¡Disfruta de tus recompensas de Quest!

// Nota: Algunas quests requieren que estés en un canal de voz con al menos otra persona para contar el tiempo. Asegúrate de cumplir con esos requisitos para completar esas quests.

delete window.$;
window.stopQuestScript = false; // Variable global para detener el script
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
	return;
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
	console.log("¡No tienes quests incompletas!")
} else {
	let doJob = function() {
		if(window.stopQuestScript) {
			console.log("Script detenido por el usuario.");
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
						console.log("Script detenido durante la quest de video.");
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
				console.log("¡Quest completada!")
				doJob()
			}
			fn()
			console.log(`Falsificando video para ${questName}.`)
		} else if(taskName === "PLAY_ON_DESKTOP") {
			if(!isApp) {
				console.log("Esto ya no funciona en el navegador para quests no de video. Usa la aplicación de escritorio de Discord para completar la quest", questName, "quest!")
			} else {
				api.get({url: `/applications/public?application_ids=${applicationId}`}).then(res => {
					const appData = res.body[0]
					if (!appData.executables || !Array.isArray(appData.executables)) {
						console.error('appData.executables no está disponible. Estructura actual:', appData);
						return;
					}
					const exeWin = appData.executables.find(x => x.os === "win32");
					if (!exeWin) {
						console.error('No se encontró ejecutable para win32:', appData.executables);
						return;
					}
					const exeName = exeWin.name.replace(">","");
					
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
						console.log(`Progreso de la quest: ${progress}/${secondsNeeded}`)
						
						if(progress >= secondsNeeded) {
							console.log("¡Quest completada!")
							
							RunningGameStore.getRunningGames = realGetRunningGames
							RunningGameStore.getGameForPID = realGetGameForPID
							FluxDispatcher.dispatch({type: "RUNNING_GAMES_CHANGE", removed: [fakeGame], added: [], games: []})
							FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn)
							
							doJob()
						}
					}
					FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn)
					
					console.log(`Falsificado tu juego a ${applicationName}. Espera ${Math.ceil((secondsNeeded - secondsDone) / 60)} minutos más.`)
				})
			}
		} else if(taskName === "STREAM_ON_DESKTOP") {
			if(!isApp) {
				console.log("Esto ya no funciona en el navegador para quests no de video. Usa la aplicación de escritorio de Discord para completar la quest", questName, "quest!")
			} else {
				let realFunc = ApplicationStreamingStore.getStreamerActiveStreamMetadata
				ApplicationStreamingStore.getStreamerActiveStreamMetadata = () => ({
					id: applicationId,
					pid,
					sourceName: null
				})
				
				let fn = data => {
					let progress = quest.config.configVersion === 1 ? data.userStatus.streamProgressSeconds : Math.floor(data.userStatus.progress.STREAM_ON_DESKTOP.value)
					console.log(`Progreso de la quest: ${progress}/${secondsNeeded}`)
					
					if(progress >= secondsNeeded) {
						console.log("¡Quest completada!")
						
						ApplicationStreamingStore.getStreamerActiveStreamMetadata = realFunc
						FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn)
						
						doJob()
					}
				}
				FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn)
				
				console.log(`Falsificado tu stream a ${applicationName}. Stream cualquier ventana en vc por ${Math.ceil((secondsNeeded - secondsDone) / 60)} minutos más.`)
				console.log("¡Recuerda que necesitas al menos 1 persona más en el vc!")
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
				console.log("Completando quest", questName, "-", quest.config.messages.questName)
				
				while(true) {
					if(window.stopQuestScript) {
						console.log("Script detenido durante la quest de actividad.");
						return;
					}
					const res = await api.post({url: `/quests/${quest.id}/heartbeat`, body: {stream_key: streamKey, terminal: false}})
					const progress = res.body.progress.PLAY_ACTIVITY.value
					console.log(`Progreso de la quest: ${progress}/${secondsNeeded}`)
					
					await new Promise(resolve => setTimeout(resolve, 20 * 1000))
					
					if(progress >= secondsNeeded) {
						await api.post({url: `/quests/${quest.id}/heartbeat`, body: {stream_key: streamKey, terminal: true}})
						break
					}
				}
				
				console.log("¡Quest completada! - Gracias por usar mi script - CiszukoAntony")
				doJob()
			}
			fn()
		}
	}
	doJob()
}