"use strict";
let fs = require('fs-extra')
let chalk = require('chalk')
let { tanggal } = require('./myfuncn')
let moment = require('moment-timezone')

async function antidelete(Secktor, m) {
    let chat = global.db.data.chats[m.key.remoteJid]
    let getName = await Secktor.getName(m.participant)
    if (!chat.antidel) return
    let teks = `
「 *ANTI DELETE MESSAGE* 」
⭔ *User Name:* ${pushname}
⭔ *User :* @${m.participant.split("@")[0]}
⭔ *Time :* ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
⭔ *Type :* ${Object.keys(m.message.message)[0]}
🐦Makino-md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ
`
    Secktor.sendTextWithMentions(m.key.remoteJid, teks, m.message)
    Secktor.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
    console.log
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(chalk.redBright(`Update ${file}`))
        delete require.cache[file]
        require(file)
})
module.exports = { antidel }
