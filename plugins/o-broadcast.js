let handler  = async (m, { conn, text }) => {
  let chats = Object.keys(await conn.chats)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  for (let id of chats) {
       
       await conn.send2ButtonDoc(id, text.trim(), wm, 'Menu', '.menu', 'Owner', '.owner', ftroli, { contextInfo: { externalAdReply :{
      showAdAttribution: true, 
      mediaUrl: 'https://bit.ly/3fmdfvr',
      mediaType: 2,
      body: wm,
      title: 'Broadcast',
      thumbnail: await(await fetch(img)).buffer(),
      }}})
     }
  m.reply('*Broadcast selesai*')
}
handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
