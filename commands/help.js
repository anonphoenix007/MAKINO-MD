const os = require("os");
const moment = require("moment-timezone");
const fs = require("fs");
const path = require("path");
const Config = require("../config");
const makino = fs.readFileSync(path.resolve(__dirname, './media/Makino-Md2.mp3'));
const makinol = fs.readFileSync(path.resolve(__dirname, './media/makino.jpg'));
//const {default: makeWASocket,BufferJSON, useMultiFileAuthState } = require('@sampandey001/baileys');
//const medias = makeWASocket({})
let {
  fancytext,
  tlang,
  tiny,
  runtime,
  formatp,
  botpic,
  prefix,
  sck1
} = require("../lib");
const long = String.fromCharCode(8206);
const readmore = long.repeat(4001);
const Secktor = require("../lib/commands");
Secktor.cmd({
  pattern: "help",
  alias: ["menu"],
  desc: "Help list",
  category: "general",
  react: "🐦",
  filename: __filename
}, async (_0x41fa70, _0x22e548, _0x44e062) => {
  const {
    commands: _0x547bb5
  } = require("../lib");
  if (_0x44e062.split(" ")[0]) {
    let _0x29797f = [];
    const _0x1297b6 = _0x547bb5.find(_0x4f444d => _0x4f444d.pattern === _0x44e062.split(" ")[0].toLowerCase());
    if (!_0x1297b6) {
      return await _0x22e548.reply("*❌No Such commands.*");
    } else {
      _0x29797f.push("*🍁Command:* " + _0x1297b6.pattern);
    }
    if (_0x1297b6.category) {
      _0x29797f.push("*🧩Category:* " + _0x1297b6.category);
    }
    if (_0x1297b6.alias) {
      _0x29797f.push("*🧩Alias:* " + _0x1297b6.alias);
    }
    if (_0x1297b6.desc) {
      _0x29797f.push("*🧩Description:* " + _0x1297b6.desc);
    }
    if (_0x1297b6.use) {
      _0x29797f.push("*〽️Usage:*\n ```" + prefix + _0x1297b6.pattern + " " + _0x1297b6.use + "```");
    }
    return await _0x22e548.reply(_0x29797f.join("\n"));
  } else {
    const _0x185d93 = {};
    _0x547bb5.map(async (_0x1563c7, _0x1cde65) => {
      if (_0x1563c7.dontAddCommandList === false && _0x1563c7.pattern !== undefined) {
        if (!_0x185d93[_0x1563c7.category]) {
          _0x185d93[_0x1563c7.category] = [];
        }
        _0x185d93[_0x1563c7.category].push(_0x1563c7.pattern);
      }
    });
    const _0x462728 = moment(moment()).format("HH:mm:ss");
    moment.tz.setDefault("Asia/KOLKATA").locale("id");
    const _0x5dd623 = moment.tz("Asia/Kolkata").format("DD/MM/YYYY");
    let _0x16b1ac = await sck1.countDocuments();
    let _0x2ce686 = "┎━═══{*『* " + fancytext(Config.ownername.split(" ")[0], 58) + " *』*}═══━❖\n";
    _0x2ce686 += "┃✯╭────────────···❖\n"; 
    _0x2ce686 += "┻✯│\n";
    
    _0x2ce686 += "```" + "│✯│◦➛ 💂‍♀️ ʜᴇʏ ᴜsᴇʀ  ➫ " + _0x22e548.pushName + "\n│✯│◦➛ 🙂‍↕ ᴄʀᴇᴀᴛᴏʀ ➫ Tᴀɪʀᴀ Mᴀᴋɪɴᴏ\n│✯│◦➛ ⚙️ Mʏᴘʀᴇꜰɪx ➫ 〖" + prefix + "〗\n│✯│◦➛ 👤 Owner ➫ " + Config.ownername + "\n│✯│◦➛ ⏰ ᴜᴘᴛɪᴍᴇ ➫ " + runtime(process.uptime()) + "\n│✯│◦➛ 🧠 ᴍᴇᴍᴏʀʏ ➫ " + formatp(os.totalmem() - os.freemem()) + "/" + formatp(os.totalmem()) + "```\n"
    _0x2ce686 += "┳✯│\n";
    _0x2ce686 += "┃✯╰────────────···❖\n";
    _0x2ce686 += "╰━════════════━❖\n";
    for (const _0x32ef0c in _0x185d93) {
      _0x2ce686 += "┎━═══{ *『* " + tiny(_0x32ef0c) + " *』*}═══━❖ \n";
      _0x2ce686 += "┃✯╭────────────❖\n";
      _0x2ce686 += "┻✯│\n";
      if (_0x44e062.toLowerCase() == _0x32ef0c.toLowerCase()) {
        _0x2ce686 = "┎━═══{ *『* " + tiny(_0x32ef0c) + " *』*}═══━❖\n"
        _0x2ce686 = "┃✯╭────────────❖\n";
        _0x2ce686 = "┻✯│\n";
        for (const _0x3ce7be of _0x185d93[_0x32ef0c]) {
          _0x2ce686 += "│✯│◦➛ " + fancytext(_0x3ce7be, 1) + "\n";
        }
        _0x2ce686 += "┳✯│\n";
        _0x2ce686 += "╰────────────❖\n";
        break;
      } else {
        for (const _0x14efca of _0x185d93[_0x32ef0c]) {
          _0x2ce686 += "│✯│◦➛" + fancytext(_0x14efca, 1) + "\n";
        }
        _0x2ce686 += "┳✯│\n";
        _0x2ce686 += "┃✯╰────────────···❖\n";
        _0x2ce686 += "╰━═════════════━❖\n\n";
      }
    }
    _0x2ce686 += "*`🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ`*\n\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ Tᴀɪʀᴀ Mᴀᴋɪɴᴏ 🐤*";
    let _0x41763e = {
      image: {
        url: await botpic()
      },
      caption: _0x2ce686
    };
    /* let buttonM = {
      audio: makino,
                    //mimetype: 'audio/mp4',
                    //fileName: titleYt + ".mp3",
                    ptt: true,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: "MAKINO-MD",
                            body: '🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ',
                            renderLargerThumbnail: false,
                            //thumbnailUrl: "https://telegra.ph/file/f1ffb3c5f386f9f8bccb5.jpg",
                            mediaType: 1,
                            thumbnail: makinol
                        },
                    },
                }
                await _0x41fa70.sendMessage(_0x22e548.chat, buttonM, { quoted: _0x22e548 });*/
    return await _0x41fa70.sendMessage(_0x22e548.chat, _0x41763e );
    //return fs.unlinkSync(makino); 
  }
});
Secktor.cmd({
  pattern: "test",
  desc: "Check if bot Is active",
  category: "general",
  react: "✅"
}, async(Void, citel) => {
  let buttonM = {
    //audio: fs.readFileSync("Makino-Md2.mp3"),
      audio: makino,
                    //mimetype: 'audio/mp4',
                    //fileName: titleYt + ".mp3",
                    ptt: true,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: "MAKINO-MD",
                            body: '🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ',
                            renderLargerThumbnail: true,
                            //thumbnailUrl: "https://telegra.ph/file/f1ffb3c5f386f9f8bccb5.jpg",
                            mediaType: 1,
                            thumbnail: makinol
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonM, { quoted: citel });
                      });
Secktor.cmd({
  pattern: "list",
  desc: "list menu",
  category: "general"
}, async (_0x17db5e, _0x2cb42d) => {
  const {
    commands: _0xb570e
  } = require("../lib");
  let _0x51fde2 = "\n╭━━〘 " + fancytext(Config.ownername.split(" ")[0], 58) + " 〙━━──⊷";
  _0x51fde2 += "\n┃ ⛥╭──────────────      \n┃ ⛥│ User: " + _0x2cb42d.pushName + "\n┃ ⛥│ Theme: " + tlang().title + "\n┃ ⛥│ Prefix: " + prefix + "\n┃ ⛥│ Owner: " + Config.ownername + "\n┃ ⛥│ Commands: " + _0xb570e.length + "\n┃ ⏰│ ᴜᴘᴛɪᴍᴇ: " + runtime(process.uptime()) + "\n┃ ⛥│ Mem: " + formatp(os.totalmem() - os.freemem()) + "/" + formatp(os.totalmem()) + "\n┃ ⛥│  \n┃ ⛥╰───────────\n╰━━━━━━━━━━━──⊷\n";
  for (let _0x32fc98 = 0; _0x32fc98 < _0xb570e.length; _0x32fc98++) {
    if (_0xb570e[_0x32fc98].pattern == undefined) {
      continue;
    }
    _0x51fde2 += "╭ " + (_0x32fc98 + 1) + " *" + fancytext(_0xb570e[_0x32fc98].pattern, 1) + "*\n";
    if (_0xb570e[_0x32fc98].desc = undefined) {
      _0xb570e[_0x32fc98].desc = "";
    }
    _0x51fde2 += "╰➛ " + fancytext(_0xb570e[_0x32fc98].desc, 1) + "\n";
  }
  return await _0x17db5e.sendMessage(_0x2cb42d.chat, {
    image: {
      url: THUMB_IMAGE
    },
    caption: _0x51fde2
  });
});
Secktor.cmd({
  pattern: "owner",
  desc: "To find owner number",
  category: "general",
  react: "🐦",
  filename: __filename
}, async (_0x2d6a3a, _0x5ad307) => {
  const _0x5dd43a = require("../config");
  const _0x42bbad = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x5dd43a.ownername + "\nORG:;\nTEL;type=CELL;type=VOICE;waid=" + owner[0] + ":+" + owner[0] + "\nEND:VCARD";
  let _0x51aa36 = {
    contacts: {
      displayName: _0x5dd43a.ownername,
      contacts: [{
        vcard: _0x42bbad
      }]
    },
    contextInfo: {
      externalAdReply: {
        title: _0x5dd43a.ownername,
        body: "Touch here.",
        renderLargerThumbnail: true,
        thumbnailUrl: "",
        thumbnail: log0,
        mediaType: 2,
        mediaUrl: "",
        sourceUrl: "https://wa.me/+" + owner[0] + "?text=Hii bro,I am " + _0x5ad307.pushName
      }
    }
  };
  return await _0x2d6a3a.sendMessage(_0x5ad307.chat, _0x51aa36, {
    quoted: _0x5ad307
  });
});
Secktor.cmd({
  pattern: "file",
  desc: "to get extact name where that command is in repo.\nSo user can edit that.",
  category: "general",
  react: "🐦",
  filename: __filename
}, async (_0x20f3fd, _0x4d0179, _0x332fad) => {
  const {
    commands: _0x1fd1a0
  } = require("../lib");
  let _0x5f3515 = [];
  const _0x57258d = _0x1fd1a0.find(_0x446063 => _0x446063.pattern === _0x332fad.split(" ")[0].toLowerCase());
  if (!_0x57258d) {
    return await _0x4d0179.reply("*❌No Such commands.*");
  } else {
    _0x5f3515.push("*🍁Command:* " + _0x57258d.pattern);
  }
  if (_0x57258d.category) {
    _0x5f3515.push("*🧩Type:* " + _0x57258d.category);
  }
  if (_0x57258d.filename) {
    _0x5f3515.push("🐦FileName: " + _0x57258d.filename);
  }
  return _0x4d0179.reply(_0x5f3515.join("\n"));
});
//---------------------------------------------------------------------------
Secktor.cmd({
  pattern: "owner",
  desc: "To find owner number",
  category: "general",
  react: "🙂",
  filename: __filename
}, async (Void, citel) => {
  const Config = require("../config");
  const vcard = "BEGIN:VCARD\nVERSION:3.0\nFN:" + Config.ownername + "\nORG:;\nTEL;type=CELL;type=VOICE;waid=" + owner[0] + ":+" + owner[0] + "\nEND:VCARD";
  let buttonMessaged = {
    contacts: {
      displayName: Config.ownername,
      contacts: [{
        vcard
      }]
    },
    contextInfo: {
      externalAdReply: {
        title: Config.ownername,
        body: "Touch here.",
        renderLargerThumbnail: true,
        thumbnailUrl: ``,
        thumbnail: log0,
        mediaType: 2,
        mediaUrl: "",
        sourceUrl: `https://wa.me/+${owner[0]}?text=Hii bro,I am ${citel.pushName}`
      }
    }
  };
  return await Void.sendMessage(citel.chat, buttonMessaged, {
    quoted: citel
  });
});
Secktor.cmd({
  pattern: "file",
  desc: "to get extact name where that command is in repo.\nSo user can edit that.",
  category: "general",
  react: "🥷",
  filename: __filename
}, async (Void, citel, text) => {
  const {
    commands
  } = require("../lib");
  let arr = [];
  const cmd = commands.find(cmd => cmd.pattern === text.split(" ")[0].toLowerCase());
  if (!cmd) {
    return await citel.reply("*😔No Such commands.*");
  } else {
    arr.push(`*📡Command:* ${cmd.pattern}`);
  }
  if (cmd.category) {
    arr.push(`*🧩Type:* ${cmd.category}`);
  }
  if (cmd.filename) {
    arr.push(`✨FileName: ${cmd.filename}`);
  }
  return citel.reply(arr.join("\n"));
});
Secktor.cmd({
  pattern: "presence",
  desc: "set WhatsApp presence (recording,available,composing,unavailable)",
  react: "📍",
  category: "general"
}, async (Void, citel, text) => {
  try{
    let pres = text
    if (!pres) {
      throw new error(`Unable to update presence/invalid Presence ➫ ${text} specified,
      Specify a valid Presence type 🙂👌,
¦ unavailable ¦ available ¦ composing ¦ recording`);
      let statu = '`Presence updated to ${text}`';
      await Void.sendPresenceUpdate(text, id);
      await citel.reply(statu);
  } catch (error) {
    console.error(error);
    await citel.reply(error.message);
  }
});
  //------------------------//  
Secktor.cmd({
  pattern: "time",
  desc: "Get the current time in a specified location.",
  react: "⏱",
  catergory: "watsusi"
}, async (Void, citel, text) => {
  try {
    let location = text.slice(5).trim();
    if (!location) {
      throw new Error("Please specify a location after the command.");
    }
    moment.tz.setDefault("Africa/Lagos");
    let formattedTime = moment().format("MMMM Do YYYY, h:mm:ss a z");
    let targetTime;
    try {
      targetTime = moment.tz(location).format("MMMM Do YYYY, h:mm:ss a z");
    } catch (timezoneError) {
      throw new Error(`Invalid timezone: ${location}`);
    }
    let message = `
╭─────── Time Check! ⏱️ ───────╮
│                               │
│ ⏱️ Your Local Time: ${formattedTime} │
│ ${location} Time: ${targetTime} │
│                               │
│ **Stay in sync with the world's clocks! **│𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑-𝐌𝐃
╰─────── Time Travel Now? ⏳ ───────╯
    `;
    await citel.reply(message);
  } catch (error) {
    console.error(error);
    await citel.reply(`
⚠️ **Oops! Time travel error!** ⏳
│                                       │
│ ${error.message}                       │
│ Please check your input and try again. │
╰───────────────────────────────────────╯
    `);
  }
});
