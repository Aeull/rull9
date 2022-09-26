let handler = async (m, { conn, args, command }) => {
let sender = m.sender
let pp = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.sendFile(m.chat, 'http://fzcdn.cf/file/dMdcL-HTKpb~wdWBsUM9.webp', 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo: {
        externalAdReply: { showAdAttribution: true, title: `Total Fitur Bot Saat Ini: ${totalf}`, body: `${pickRandom(['Join Gc Bot'])}`, sourceUrl: 'https://chat.whatsapp.com/LHfAOQ4sa2g40Bu5sXDWva', thumbnail: await (await fetch(pp)).buffer(),}} 
     })
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler
