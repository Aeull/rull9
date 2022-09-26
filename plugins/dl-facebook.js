let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=7facd6f11077ee4daecd55d5&url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { video, description, username } = json.result
await conn.sendFile(m.chat, video, 'video.mp4', `💌 *Deskripsi*: ${description}
\n📛 *Username*: ${username}
`, m, false, { contextInfo: { externalAdReply :{
 showAdAttribution: true, }}})
}

handler.help = ['facebook <url>']
handler.tags = ['downloader']

handler.command = /^(facebook|fb)$/i
handler.limit = true
module.exports = handler
