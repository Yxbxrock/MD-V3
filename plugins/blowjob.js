// Create By Hyzer 🗿👆

let handler = async (m, { conn }) => {
let hyzerlagisad = 'https://api-hyzerr.herokuapp.com/randomimg/akaneko?param=blowjob'
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
    message: 'Random Blowjob', 
    orderTitle: `▮Menu ▸`,
    thumbnail: 'https://telegra.ph/file/5ecbec3e82e247671a18e.jpg', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
	conn.sendButtonImg(m.chat, hyzerlagisad, 'Wangy Wangy', wm3, 'NEXT', '.blowjob', ftroli)

}

handler.help = ['blowjob']
handler.tags = ['nsfw']
handler.command = /^(blowjob)$/i

handler.limit = false

module.exports = handler