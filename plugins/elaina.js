let handler = async (m, { conn }) => {
const ftroli = {
    key : {
    remoteJid: '6283136505591-1614953337@g.us',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: 'Random Smug', 
    orderTitle: `Hyzer`,
    thumbnail: 'https://telegra.ph/file/5ecbec3e82e247671a18e.jpg', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/elaina', {}, 'apikey'), 'Nih', wm, 'NEXT', 'elaina', m)
}
handler.help = ['elaina']
handler.tags = ['anime']
handler.command = /^(elaina)$/i

module.exports = handler



https://hardianto.xyz/api/anime/random?nsfw=gasm&apikey=hardianto