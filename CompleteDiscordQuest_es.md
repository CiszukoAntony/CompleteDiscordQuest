# Script Complete Discord Quest en Español

## Funciona desde enero del 2026

> Hecho por CiszukoAntony.

___

### Instrucciones

1. Abre Discord en aplicación de escritorio.
2. Ve a Configuración de Usuario > Avanzado > Modo Desarrollador y actívalo.
    - Si por alguna razon no funciona, prueba activar esta opcion ` "DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true ` se encuentra en:
        - En Windows: ` %AppData%\discord\settings.json ` (Como Administrador)
        - En Linux: ` ~/.config/discord/settings.json ` (Como Administrador)
        - En MacOS: ` ~/Library/Application Support/discord/settings.json ` (Como Administrador)
    Guarda el archivo y reinicia Discord.
3. Abre cualquier servidor y presiona Ctrl + Shift + I para abrir las herramientas de desarrollo. Parecido al inspeccionar en el navegador.
4. `ADVERTENCIA:` Ve a la pestaña "Consola", escribe en el cuadro de texto `"allow pasting"` y presiona Enter. Esto es para permitir pegar scripts largos.
5. Copia y pega este script de abajo completo en la consola y presiona Enter.
6. Espera a que el script complete tus quests automáticamente.
7. Si deseas detener el script en cualquier momento, escribe `window.stopQuestScript = true` en la consola y presiona Enter.
8. Si deseas reanudar el script, escribe `window.stopQuestScript = false` y presiona Enter.
9. ¡Disfruta de tus recompensas de Quest!

#### Comandos

1. `window.stopQuestScript = true` (Sirve para detener el script)
2. `window.stopQuestScript = false` (Sirve para reanudar el script)

> Nota:
> Algunas quests requieren que estés en un canal de voz con al menos otra persona para contar el tiempo. Asegúrate de cumplir con esos requisitos para completar esas quests

#### Script de Complete Discord Quest

___

<details>
<summary>Click to expand</summary>

```txt
MIT License

Copyright (c) 2026 Ciszuko

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE

___

<details>
<summary>Click para ver el script</summary>

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

// Nueva lógica robusta para obtener los stores
function getStore(findFn, fallback = null) {
    try {


**P: Estoy en Vesktop pero me dice que estoy usando un navegador**

R: Vesktop no es un cliente de escritorio real, es un envoltorio de navegador elegante. Descarga la app de escritorio real en su lugar.
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
                    const exeName = exeWin.name.replace(/>/g, "");
					
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
```

</details>



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

## License (MIT)

<details>
<summary>Click to expand</summary>

```txt
MIT License

Copyright (c) 2026 Ciszuko

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

___

# ⚠️ Actualización

 > Se corrigieron conflictos de merge y errores de redeclaración. Ambos scripts están sincronizados y robustos ante cambios internos de Discord.

> **Actualización:** Ahora el script soporta quests que no tienen ejecutable (ejemplo: Toxic Commando). El script simulará el juego usando solo el nombre y el ID de la app si es necesario.

# ⚠️ Advertencia

> Discord actualiza frecuentemente su estructura interna. El script ahora intenta adaptarse automáticamente, pero puede fallar si Discord cambia demasiado. Si ocurre, revisa los logs de consola y espera una actualización.