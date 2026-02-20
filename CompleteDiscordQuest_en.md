# Complete Discord Quest Script

## Works as of January 2026

> Made by CiszukoAntony.

___

### Instructions

1. Open Discord on desktop app.
2. Go to User Settings > Advanced > Developer Mode and enable it.
    - If for some reason it doesn't work, try enabling this option `"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true` which is located in:
        - On Windows: `%AppData%\discord\settings.json` (As Administrator)
        - On Linux: `~/.config/discord/settings.json` (As Administrator)
        - On MacOS: `~/Library/Application Support/discord/settings.json` (As Administrator)
    Save the file and restart Discord.
3. Open any server and press Ctrl + Shift + I to open the developer tools. Similar to inspecting in the browser.
4. `WARNING:` Go to the "Console" tab, type in the text box `"allow pasting"` and press Enter. This is to allow pasting long scripts.
5. Copy and paste this complete script below into the console and press Enter.
6. Wait for the script to automatically complete your quests.
7. If you want to stop the script at any time, type `window.stopQuestScript = true` in the console and press Enter.
8. If you want to resume the script, type `window.stopQuestScript = false` and press Enter.
9. Enjoy your Quest rewards!

#### Commands

1. `window.stopQuestScript = true` (Serves to stop the script)
2. `window.stopQuestScript = false` (Serves to resume the script)

> Note:
> Some quests require you to be in a voice channel with at least one other person to count the time. Make sure to meet those requirements to complete those quests

#### Complete Discord Quest Script

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

Attention: (If you can't paste in the console, it may be because you have to write `allow pasting` and press Enter)

Follow the printed instructions depending on the type of quest you have
    - If your quest says "play" the game or watch a video, you can simply wait and do nothing
    - If your quest says "stream" the game, join a vc with a friend or alt and stream any window

You can track the progress by looking at the prints of `Quest progress:` in the Console tab, or by looking at the progress bar in the quests tab.

## FAQ or Q&A

**Q: Can I get banned for using this?**

A: There is always a risk, although so far no one has been banned for this or other similar things like client mods.

**Q: Ctrl + Shift + I doesn't work**

A: Download the [ptb client](https://discord.com/api/downloads/distributions/app/installers/latest?channel=ptb&platform=win&arch=x64), or use [this](https://www.reddit.com/r/discordapp/comments/sc61n3/comment/hu4fw5x/) to enable DevTools in stable.

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

# ⚠️ Warning

> Discord frequently updates its internal structure. The script now tries to adapt automatically, but may fail if Discord changes too much. If this happens, check the console logs and wait for an update.