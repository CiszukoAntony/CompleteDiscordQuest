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
SOFTWARE.
```

</details>

___

Atencion: (Si no puedes pegar en la consola, es posible que tengas que escribir `allow pasting` y presionar Enter)

Sigue las instrucciones impresas dependiendo del tipo de quest que tengas
    - Si tu quest dice "jugar" al juego o ver un video, puedes simplemente esperar y no hacer nada
    - Si tu quest dice "stream" el juego, únete a un vc con un amigo o alt y stream cualquier ventana

Puedes rastrear el progreso mirando las impresiones de `Progreso de la quest:` en la pestaña Consola, o mirando la barra de progreso en la pestaña de quests.

## FAQ o PYR

**P: ¿Puedo ser baneado por usar esto?**

R: Siempre hay un riesgo, aunque hasta ahora nadie ha sido baneado por esto u otras cosas similares como mods de cliente.

**P: Ctrl + Shift + I no funciona**

R: Descarga el [cliente ptb](https://discord.com/api/downloads/distributions/app/installers/latest?channel=ptb&platform=win&arch=x64), o usa [esto](https://www.reddit.com/r/discordapp/comments/sc61n3/comment/hu4fw5x/) para habilitar DevTools en stable.

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

# ⚠️ Advertencia

> Discord actualiza frecuentemente su estructura interna. El script ahora intenta adaptarse automáticamente, pero puede fallar si Discord cambia demasiado. Si ocurre, revisa los logs de consola y espera una actualización.