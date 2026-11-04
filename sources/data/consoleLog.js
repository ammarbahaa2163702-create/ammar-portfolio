import * as THREE from 'three/webgpu'

const text = `
 █████╗ ███╗   ███╗███╗   ███╗ █████╗ ██████╗     ██████╗  █████╗ ██╗  ██╗ █████╗  █████╗ 
██╔══██╗████╗ ████║████╗ ████║██╔══██╗██╔══██╗    ██╔══██╗██╔══██╗██║  ██║██╔══██╗██╔══██╗
███████║██╔████╔██║██╔████╔██║███████║██████╔╝    ██████╔╝███████║███████║███████║███████║
██╔══██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██╔══██╗    ██╔══██╗██╔══██║██╔══██║██╔══██║██╔══██║
██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║██║  ██║    ██████╔╝██║  ██║██║  ██║██║  ██║██║  ██║
╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝

╔═ Intro ═══════════════╗
║ مرحبًا بك في بورتفوليو عمار بهاء (Ammar Bahaa)
║ مهندس ذكاء اصطناعي وأنظمة مدمجة ومؤسس ABM Tech Hub.
║ AI & Embedded Systems Engineer | Founder of ABM Tech Hub.
╚═══════════════════════╝

╔═ Contact & Socials ═══╗
║ Phone    ⇒ +20 101 843 3984
║ WhatsApp ⇒ https://wa.me/201018433984
║ Mail     ⇒ ammarbahaa2163702@gmail.com
║ LinkedIn ⇒ https://www.linkedin.com/in/ammar-bahaa
║ TikTok   ⇒ الصنايعي الرقمي
╚═══════════════════════╝

╔═ Credits & Acknowledgements ═╗
║ Based on the open-source folio-2025 by Bruno Simon (MIT License)
║ Original project: https://github.com/brunosimon/folio-2025
║ Original music by Kounine (CC0 License): https://linktr.ee/Kounine
╚══════════════════════════════╝

╔═ Debug ═══════════════╗
║ You can access the debug mode by adding #debug at the end of the URL and reloading.
║ Press [V] to toggle the free camera.
╚═══════════════════════╝
`
let finalText = ''
let finalStyles = []
const stylesSet = {
    letter: 'color: #ffffff; font: 400 1em monospace;',
    pipe: 'color: #00d2ff; font: 400 1em monospace;',
}
let currentStyle = null
for(let i = 0; i < text.length; i++)
{
    const char = text[i]

    const style = char.match(/[╔║═╗╚╝╔╝]/) ? 'pipe' : 'letter'
    if(style !== currentStyle)
    {
        currentStyle = style
        finalText += '%c'

        finalStyles.push(stylesSet[currentStyle])
    }
    finalText += char
}

export default [finalText, ...finalStyles]
