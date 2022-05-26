// Create By Hyzer 🗿👆

let handler = async (m, { conn }) => {
let hyzerlagisad = 'https://api-hyzerr.herokuapp.com/randomimg/akaneko?param=ass'
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
    message: 'Random Ass', 
    orderTitle: `▮Menu ▸`,
    thumbnail: 'https://telegra.ph/file/5ecbec3e82e247671a18e.jpg', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
	conn.sendButtonImg(m.chat, hyzerlagisad, 'Wangy Wangy', wm3, 'NEXT', '.ass', ftroli)

}

handler.help = ['ass']
handler.tags = ['nsfw']
handler.command = /^(ass)$/i

handler.limit = false

module.exports = handler