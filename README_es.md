# 🎮 Script Complete Discord Quest

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Funciona desde enero de 2026](https://img.shields.io/badge/Funciona%20desde-enero%202026-blue.svg)

> ¡Completa quests de Discord automáticamente con facilidad! 🚀 Hecho por CiszukoAntony.

## 📋 Tabla de Contenidos
- [Características](#características)
- [Prerrequisitos](#prerrequisitos)
- [Instalación y Uso](#instalación-y-uso)
- [Script](#script)
- [Comandos](#comandos)
- [Seguimiento de Progreso](#seguimiento-de-progreso)
- [Preguntas Frecuentes](#preguntas-frecuentes)
- [Licencia](#licencia)

## ✨ Características
- 🔄 **Completación Automática de Quests**: Falsifica visualización de videos, juego, streaming y tareas de actividad.
- 🛑 **Funcionalidad de Detener/Reanudar**: Controla el script en cualquier momento con comandos simples en la consola.
- 🌐 **Soporte Multiidioma**: Disponible en inglés y español.
- 🖥️ **Requiere App de Escritorio**: Optimizado para la aplicación de escritorio de Discord.
- ⚡ **Progreso en Tiempo Real**: Monitorea el progreso de las quests directamente en la consola.
- 🔒 **Seguro y Código Abierto**: Licenciado bajo MIT, sin código malicioso.

## 📋 Prerrequisitos
- **App de Escritorio de Discord**: Este script solo funciona en la aplicación de escritorio, no en navegadores.
- **Modo Desarrollador Activado**: Requerido para acceder a las herramientas de desarrollo.
- **Quests Activas**: Necesitas quests inscritas y no completadas en Discord.

## 🚀 Instalación y Uso

### Guía Paso a Paso

1. **Abre la App de Escritorio de Discord** 🖥️
   - Asegúrate de usar el cliente oficial de escritorio de Discord (no web o móvil).

2. **Activa el Modo Desarrollador** ⚙️
   - Ve a `Configuración de Usuario > Avanzado > Modo Desarrollador` y actívalo.
   - Si eso no funciona, edita tu archivo de configuración:
     - **Windows**: `%AppData%\discord\settings.json`
     - **Linux**: `~/.config/discord/settings.json`
     - **macOS**: `~/Library/Application Support/discord/settings.json`
   - Agrega esta línea: `"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true`
   - Guarda y reinicia Discord.

3. **Abre las Herramientas de Desarrollo** 🛠️
   - Únete a cualquier servidor y presiona `Ctrl + Shift + I` (o `Cmd + Option + I` en Mac) para abrir DevTools.
   - Si el atajo no funciona, haz clic derecho en cualquier lugar y selecciona "Inspeccionar Elemento".

4. **Habilita Pegar en la Consola** ⚠️
   - Ve a la pestaña "Consola".
   - Escribe `"allow pasting"` y presiona Enter. Esto permite pegar scripts largos.

5. **Copia y Pega el Script** 📋
   - Copia el script completo de la sección [Script](#script) a continuación.
   - Pégalo en la consola y presiona Enter.

6. **Monitorea el Progreso** 👀
   - Observa la consola para actualizaciones de progreso.
   - El script completará automáticamente tus quests.

7. **Disfruta tus Recompensas** 🎉
   - Una vez completado, reclama tus recompensas de quest manualmente.

### Notas Importantes
- **Requisitos de Canal de Voz**: Algunas quests requieren que estés en un canal de voz con al menos una persona más.
- **Tipos de Quest Soportados**:
  - 🎥 Visualización de videos
  - 🕹️ Juego
  - 📺 Streaming
  - 🎮 Participación en actividad

## 📜 Script

Copia y pega este script completo en la consola de Discord:

```javascript
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
			const channelId = ChannelStore.getSortedPrivateChannels()[0]?.id ?? Object.values(GuildChannelStore.getAllGuilds()).find(x => x != null && x.VOCAL.length > 0).VOCAL[0].channel.id
			const streamKey = `call:${channelId}:1`
			
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
```

## 🎮 Comandos

- **Detener Script**: `window.stopQuestScript = true`
- **Reanudar Script**: `window.stopQuestScript = false`

## 📊 Seguimiento de Progreso

Monitorea el progreso de tus quests revisando los logs de la consola:
- `Progreso de la quest: X/Y` - Muestra el progreso actual para quests de juego/streaming.
- `Falsificando video para [Nombre de Quest]` - Indica que la quest de video está ejecutándose.
- `¡Quest completada!` - Quest terminada exitosamente.

Para quests de video, también puedes revisar la barra de progreso en la pestaña de Quests de Discord.

## ❓ Preguntas Frecuentes

**P: ¿Puedo ser baneado por usar esto?**

R: Siempre hay un riesgo, aunque hasta ahora nadie ha sido baneado por esto u otras cosas similares como mods de cliente.

**P: Ctrl + Shift + I no funciona**

R: Descarga el [cliente PTB](https://discord.com/api/downloads/distributions/app/installers/latest?channel=ptb&platform=win&arch=x64), o usa [esto](https://www.reddit.com/r/discordapp/comments/sc61n3/comment/hu4fw5x/) para habilitar DevTools en stable.

**P: Ctrl + Shift + I toma una captura de pantalla**

R: Desactiva el atajo de teclado en tu app AMD Radeon.

**P: Obtengo un error de sintaxis/error de token inesperado**

R: Asegúrate de que tu navegador no esté traduciendo automáticamente este sitio web antes de copiar el script. Desactiva cualquier extensión de traductor e intenta de nuevo.

**P: Estoy en Vesktop pero me dice que estoy usando un navegador**

R: Vesktop no es un cliente de escritorio real, es un envoltorio de navegador elegante. Descarga la app de escritorio real en su lugar.

**P: Obtengo un error diferente**

R: Asegúrate de copiar/pegar el script correctamente y de que hayas hecho todos los pasos.

**P: ¿Puedo completar quests expiradas con esto?**

R: No, no hay forma de hacer eso.

**P: ¿Puedes hacer que el script acepte automáticamente la quest/recompensa?**

R: No. Ambas acciones pueden mostrar un captcha, por lo que automatizarlas no es una buena idea. Solo haz los dos clics tú mismo.

**P: ¿Puedes hacer esto un plugin de Vencord?**

R: No. El script a veces requiere actualizaciones inmediatas para los cambios de Discord, y el ciclo de actualización y revisión de código de Vencord sería demasiado lento para eso. Hay algunos forks de Vencord que han implementado este script o sus propios completadores de quests si realmente quieres uno.

**P: ¿Puedes subir el script independiente a un repo y hacer que este gist's code sea una línea fetch()?**

R: No. Hacer eso te pondría en riesgo porque yo (o alguien en mi cuenta) podría cambiar el código subyacente para ser malicioso en cualquier momento, luego forcepush it away later, y nunca lo sabrías.

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

---

**Descargo de responsabilidad**: Úsalo bajo tu propio riesgo. Este script es solo para fines educativos.