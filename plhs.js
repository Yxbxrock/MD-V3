let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
 try {
 	pp = await conn.profilePictureUrl(m.sender, 'image')
const moment = require("moment-timezone");
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
let prefix = '(./#)'
let wm = global.wm
let botname = global.namebot
let name = conn.getName(m.sender)
let anu =  `
Haii Kak ${name} Selamat ${salam} 👋

Saya ${botname}, Bot Ini Adalah Beta Multi-Device WhatsApp.
Jika Kamu Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Ya, Lapor Owner Agar Segera Di Perbaiki🙏

⭔ Library : Baileys-Md
⭔ Prefix : ${prefix}
⭔ Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
⭔ Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
⭔ Wib • ${wib}
⭔ Wita • ${wita}
⭔ Wit • ${wit}
`
     let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(pp)).buffer()}, { upload: conn.waUploadToServer }) 
      const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
          hydratedTemplate: {
            imageMessage: message.imageMessage, 
            hydratedContentText: anu,
            hydratedFooterText: wm, 
            hydratedButtons: [{
              urlButton: {
                displayText: 'Website',
                url: 'bit.ly/3xufB2g'
              }

            },
                {
              urlButton: {
                displayText: 'Instagram',
                id: 'https://instagram.com/hyzer_stfu'
              }

             },
                {
              quickReplyButton: {
                displayText: 'Pemilik Bot',
                id: '.owner', 
              }

             },
                {
              quickReplyButton: {
                displayText: 'Profile',
                id: '.profile', 
              }
             
            }, 
               {
              quickReplyButton: {
              	displayText: 'List Command', 
                  id: '.help', 
              }
              
           }]
         }
       }
     }), { quoted: m, userJid: m.sender });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
} catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

handler.exp = 0

module.exports = handler
