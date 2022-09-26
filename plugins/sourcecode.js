let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonDoc(m.chat, `Hi Kak @${m.sender.split('@')[0]} 

◪ 📮 *SCRIPT BOT*
│ *Script :* 
│ ╰ https://youtu.be/Y4lDHozWsnI
│ *Base :* 
│ ╰ https://github.com/Fokusdotid/Family-MD
╰──────────═┅═──────────
` ,'📍 *N o t e :* 
• Jangan lupa minta izin owner sebelum menggunakan scriptnya kak!
• Jangan Lupa kasih star & kasih credit', 'Pemilik Bot', '#owner', 'Menu', '#menu', m, { contextInfo: { externalAdReply :{
  showAdAttribution: true,
  sourceUrl: 'https://youtu.be/Y4lDHozWsnI',
  mediaUrl: 'https://youtu.be/Y4lDHozWsnI',
  mediaType: 'https://youtu.be/Y4lDHozWsnI',
  thumbnail: await(await fetch(img)).buffer(),
  body: wm,
  title: 'Tuh Kak Scnya',
  }}})
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
