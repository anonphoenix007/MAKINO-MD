/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : BLADE-MD
 * @author : salmanytofficial <https://github.com/Bladeh4x>
 * @description : BLADE, A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { tlang, botpic, cmd, prefix, runtime, Config , sleep } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
const fetch = require('node-fetch');
let reactionEnabled = false;
let reactionType = 'all';
const emojis = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋', '😂', '😁', '✅', '📍', '⚠️', '🥺', '😪', '🦶', '😤', '🥰', '🎉', '🌚', '🌝']

const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
cmd({
        pattern: "pastebin",
        desc: "To check ping",
        react: "📤",
        category: "extra",
        filename: __filename,
    },
    async(Void, citel) => {
        if(!citel.quoted) return citel.reply('Please quote any text to get link.')
        let data = await pastebin.createPaste(citel.quoted.text, "Secktor-Pastebin")
        citel.reply('_Here is your link._\n'+data)
    }
);


//---------------------------------------------------------------------------
cmd({
    pattern: "chat",
    alias :['gpt'],
    desc: "chat with an AI(GPT)",
    react: "🤖",
    category: "AI",
    use: '<◡̈⋆🅷🅸(●’◡’●)ﾉ,𝚂𝚝𝚊𝚛>',
    filename: __filename,
},
async(Void, citel,text) => {
    let zx = text.length;
    if (zx < 8) {
        let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
        return citel.reply(data.cnt);  
    }
    if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`);
    // const { Configuration, OpenAIApi } = require("openai");
    // const configuration = new Configuration({
    //     apiKey: Config.OPENAI_API_KEY || "EnCY1wxuP0opMmrxiPgOT3BlbkFJ7epy1FuhppRue4YNeeOm",
    // });
    // const openai = new OpenAIApi(configuration);
    // const completion = await openai.createCompletion({
    //     model: "text-davinci-002",
    //     prompt: text,
    //     temperature: 0.5,
    //     max_tokens: 80,
    //     top_p: 1.0,
    //     frequency_penalty: 0.5,
    //     presence_penalty: 0.0,
    //     stop: ['"""'],
    // });
    // citel.reply(completion.data.choices[0].text);
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Config.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo", 
      messages: [{ role: "system", content: "You" }, { role: "user", content: text }],
    }),
  });

  const data = await response.json();
  console.log("GPT REPONCE : ",data); 
  if (!data.choices || data.choices.length === 0) {citel.reply("*Invalid ChatGPT API Key, Please Put New Key*"); }
  return await  citel.reply(data.choices[0].message.content)
	
}
)

cmd({
    pattern: "dalle",
    alias : ['dall','dall-e'],
    desc: "Create Image by AI",
    react: "🤖",
    category: "AI",
    use: '<an astronaut in mud.>',
    filename: __filename,
},
async(Void, citel,text,{isCreator}) => 
{
//if (!isCreator) return citel.reply(tlang().owner)
if (Config.OPENAI_API_KEY=='') return citel.reply('You Dont Have OPENAI_API_KEY \nPlease Create OPEN API KEY from Given Link \nhttps://platform.openai.com/account/api-keys');
if (!text) return citel.reply(`*Give Me A Query To Get Dall-E Reponce ?*`); 
const imageSize = '256x256'
const apiUrl = 'https://api.openai.com/v1/images/generations';
const response = await fetch(apiUrl, {
method: 'POST',
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${Config.OPENAI_API_KEY}`
},
body: JSON.stringify({
  model: 'image-alpha-001',
  prompt: text,
  size: imageSize ,
  response_format: 'url'
})
});

const data = await response.json();
let buttonMessage = {
    image:{url:data.data[0].url},
    caption : '*---Your DALL-E Result---*'

}

Void.sendMessage(citel.chat,{image:{url:data.data[0].url}})
}
)

//---------------------------------------------------------------------------
cmd({
        pattern: "alive2",
        alias: ["about","starz"],
        desc: "To check bot alive state",
        react: "📍",
        category: "𝐒𝐓𝐀𝐑",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
ㅤ ❁    🔰MAKINO-MD-ALIVE-2🔰     
╰─➤｡･:*˚:✧｡ *${tlang().title}* ｡･:*˚:✧｡
╰─➤*🌟Description:* A WhatsApp bot with rich features, built in NodeJs to make your WhatsApp enjoyable.
╰─➤*⚡️Speed:* ${latensie.toFixed(4)} ms
╰─➤*⏱Uptime:* ${runtime(process.uptime())}
╰─➤*🌟Version:* 10.0.0
╰─➤*👤Owner:*  ${Config.ownername}
╰─➤*Powered by ${tlang().title}*
°୭̥ ❁ ───────────────────────── .°୭̥ ❁ `;
        let buttonMessaged = {
            image: {
                url: await botpic(),
            },
            caption: ter,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: tlang().title,
                    body: `Bot-Status`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

//---------------------------------------------------------------------------

cmd({
        pattern: "repo",
        alias: ["star", "sc","script"],
        desc: "Sends info about repo.",
	react: "🔗",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/Anonphoenix007/MAKINO-MD')
	let cap = `Hey ${citel.pushName}\n
*Makino-Md* is a Simple WhatsApp Bot Created By _*Tᴀɪʀᴀ Mᴀᴋɪɴᴏ_*. 

  *❲❒❳ Stars:* ${data.stargazers_count} stars
  *❲❒❳ Forks:* ${data.forks_count} forks 
  *❲❒❳ Creator:* *Tᴀɪʀᴀ Mᴀᴋɪɴᴏ* ~ wa.me/+27640498397
  *❲❒❳ _Group_:* _https://chat.whatsapp.com/BRDE2Yqsj9iAkTxhnuI1AL_
  *❲❒❳ _Channel_:* _https://whatsapp.com/channel/0029VaaSaXD23n3ZEognud1V_
  *❲❒❳ Repo:* _https://github.com/anonphoenix007/MAKINO-MD_
  *❲❒❳ Scan:* _https://makino-mdqr-488f783e6262.herokuapp.com/_
  *❲❒❳ Scan2:* _https://web-qr-kjfq.onrender.com/_
  *❲❒❳ Scan3:* _https://replit.com/@phoenixgibson00/MAKINO-MD-Qr-scanner_
  *❲❒❳ _Deploy_:* _https://dashboard.heroku.com/new?template=https://github.com/Anonphoenix007/MAKINO-MD_


©*🐦Tᴀɪʀᴀ Mᴀᴋɪɴᴏ*`
 
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "MAKINO-MD bot REPO",
                    body: "Easy to Use",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "status",
        alias: ["about"],
        desc: "To check bot status",
        react: "❤️",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
🔰 *${tlang().title}* 🔰
𝐎𝐖𝐍𝐄𝐑:- +27640498397
*🌟Description:* *Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ*, A simple WhatsApp by *Tᴀɪʀᴀ Mᴀᴋɪɴᴏ*.
*⚡Speed:* ${latensie.toFixed(4)} ms
*🚦Uptime:* ${runtime(process.uptime())}
*🕸Version:* 0.0.7
*👤Owner:*  ${Config.ownername}
*Powered by ${tlang().title}*
`;
        let buttonMessaged = {
            image: {
                url: await botpic(),
            },
            caption: ter,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: tlang().title,
                    body: `Bot-Status`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

//---------------------------------------------------------------------------
cmd({
    pattern: "theme",
    desc: "To find all themes",
    react: "🥹",
    category: "general",
    filename: __filename,
},
async(Void, citel,text,{isCreator}) => {

if(!isCreator) return citel.reply(tlang().owner);
let str="*All available themes*"
str+=`  \n1. GOJO\n2. SONIC-MD\n3. AYANOKOJI\n4. DEKU\n5. RENGOKU\n6. GENOS\n7. GABIMARU\n8. STAR\n9. ERENJAEGER\n10. LUFFY\n11. NARUTO\n12. NEZUKO\n13. PARKER\n14. GOKU\n15. MAKIMA\n16. THOMAS\n17. PATRICK\n\n these are the themes of Star Userbot.\_Reply ${prefix}setvar THEME:ZEROTWO`
return citel.reply(str)

}
);
//-------------------------------------------------//
cmd({
  pattern: "presence",
  desc: "Update presence status",
  react: "💻",
  category: "misc",
  filename: __filename
}, async (Void, citel) => {
  if (!citel.args) return citel.reply(`Specify a presence status\n recording, composing, available, unavailable`);
  const status = citel.args.trim().toLowerCase();
  switch (status) {
    case "recording":
      await Void.updatePresence(citel.chatId, "recording");
      break;
    case "composing":
      await Void.updatePresence(citel.chatId, "composing");
      break;
    case "available":
      await Void.updatePresence(citel.chatId, "available");
      break;
    case "unavailable":
      await Void.updatePresence(citel.chatId, "unavailable");	  
      break;
    default:
      return citel.reply(`Invalid presence status. Supported statuses: recording, composing, available, unavailable`);
  }
  citel.reply(`Presence status updated to ${status}`);
}); 
//---------------------------------------------//
cmd({
  pattern: "reaction",
  desc: "Toggle auto-reaction to messages or commands",
  react: "💕",
  category: "utils",
  filename: __filename,
}, async (Void, citel) => {
  if (!citel.args) return citel.reply("Specify a reaction type between *all, cmd*");
  const type = citel.args.trim().toLowerCase();
  switch (type) {
    case "all":
      reactionEnabled = true;
      reactionType = 'all';
      break;
    case "cmd":
      reactionEnabled = true;
      reactionType = 'cmd';
      break;
    case "off":
      reactionEnabled = false;
      break;
    default:
      return citel.reply(`Invalid reaction typeselected,\n Supported types: *all, cmd, off*`);
  }
  citel.reply(`Auto-reaction ${reactionEnabled ? 'enabled' : 'disabled'} and set to: ${reactionType}`);
});

Void.on('message', async (message) => {
  if (!reactionEnabled) return;
  if (reactionType === 'all' || (reactionType === 'cmd' && message.type === 'command')) {
    // React to the message
    await Void.react(message.chatId, message.id, emojis);
  }
}); 
