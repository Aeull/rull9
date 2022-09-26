let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi 」
│ • IM3 [085822347348]
│ • AXIS  [083843192208]
│ • Dana  [085822347348]
│ • Saweria  [https://saweria.co/arullofc]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6285822347348
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', { contextInfo: { externalAdReply :{
    showAdAttribution: true,
    title: 'ArullBotz Testing Project By Sahrull', 
    body: `${pickRandom(['udah makan belum kak?', 'udh mandi belum kak?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'jangan spam ya kak!', 'Jangan lupa donasi yak kak! >.<', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< 💗✨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, 
    description: `${pickRandom(['udah makan belum kak?', 'udh mandi belum kak?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'jangan spam ya kak!', 'Jangan lupa donasi yak kak! >.<', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< 💗✨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`, 
    mediaType: 2, 
    thumbnail: await(await fetch(img)).buffer(),
    mediaUrl: `${pickRandom([`https://youtu.be/KzU_d0ctB3o`,`https://youtu.be/Y4lDHozWsnI`])}` 
    }}})
        
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
