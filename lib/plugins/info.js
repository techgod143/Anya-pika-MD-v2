/**
👑 Q U E E N - A N Y A - M D - #v2

🔗 Dev: https://wa.me/918811074852 (@PikaBotz)
🔗 Management: (@teamolduser)

📜 GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

📌 Permission & Copyright:
If you're using any of these codes, please ask for permission or mention https://github.com/PikaBotz/Anya_v2-MD in your repository.

⚠️ Warning:
- This bot is not an officially certified WhatsApp bot.
- Report any bugs or glitches to the developer.
- Seek permission from the developer to use any of these codes.
- This bot does not store user's personal data.
- Certain files in this project are private and not publicly available for edit/read (encrypted).
- The repository does not contain any misleading content.
- The developer has not copied code from repositories they don't own. If you find matching code, please contact the developer.

Contact: alammdarif07@gmail.com (for reporting bugs & permission)
          https://wa.me/918811074852 (to contact on WhatsApp)

🚀 Thank you for using Queen Anya MD v2! 🚀
**/

exports.cmdName = () => {
  return {
    name: ['system'],
    alias: ['information','info','stats'],
    category: "general",
    desc: "Get real time stats of the bot."
  };
}

exports.getCommand = async (userOwner, userSudo, userAdmin, anyaV2, pika) => {
require('../../config');
  const os = require('os');
  const speed = require('performance-now');
  const latensi = speed() - speed();
  const _system = require('../database/_system.json');
  const _groupData = pika.isGroup ? require('../database/groups/' + pika.chat + '.json') : null;
  const { formatp, runtime, sleep, loadMsg_1 } = require('../lib/myfunc.js');
  const botVersion = require('../../package.json').version;
  let txt = "*>>> 👤 _USER INFO_*\n";
  txt += `*🎀 Name :* ${pika.pushName}\n`;
  txt += `*🔮 Num :* @${pika.sender.split('@')[0]}\n`;
  txt += `*🎐 Owner? :* ${userOwner? "Yes":"Nope"}\n`;
  txt += `*📍 Sudo? :* ${userSudo? "Yes":"Nope"}\n`;
  txt += !pika.isGroup ? "*🎗️ Role :* Private Chat\n\n" : `*🎗️ Role :* ${userAdmin? "Admin 👑️":"Member 👤"}\n\n`;
  txt += "*>>> 🤖 _BOT INFO_*\n";
  txt += `❲❒❳ *Name :* ${botname}\n`;
  txt += `❲❒❳ *Version :* ${botVersion}\n`;
  const botMode = _system[0]._mode.self ? "Self" : _system[0]._mode.only_admin ? "Only Admin ✓" : "Public ✓✓";
  txt += `❲❒❳ *Mode :* ${botMode}\n`;
  txt += `❲❒❳ *RAM :* _${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}_\n`;
  txt += `❲❒❳ *Speed : _${latensi.toFixed(4)}sec_*\n`;
  txt += `❲❒❳ *Runtime :* _${runtime(process.uptime())}_\n`;
  txt += `❲❒❳ *Platform :* ${os.platform()}.com\n`;
  txt += `❲❒❳ *Platform ID :* ${os.hostname()}\n\n`;
  txt += "*>>> ⚜️ _GROUP DATA_*\n";
  if (!pika.isGroup) {
    txt += "⚠️ Group data not found in a private chat!\n";
  } else {
    const groupData = _groupData[0].data;
    const links = _groupData[0].links;
    txt += `*» NSFW : ${groupData.is_Nsfw ? '✅' : '❌'}*\n`;
    txt += `*» Anti Virus : ${groupData.anti_Virtex ? '✅' : '❌'}*\n`;
    txt += `*» Anti Toxic : ${groupData.anti_Toxic ? '✅' : '❌'}*\n`;
    txt += `*» Anti Video : ${groupData.anti_Video ? '✅' : '❌'}*\n`;
    txt += `*» Anti Pic : ${groupData.anti_Picture ? '✅' : '❌'}*\n`;
    txt += `*» Anti Link All : ${links.anti_LinkAll ? '✅' : '❌'}*\n`;
  }
  await pika.react("💻");
  await loadMsg_1(
                  anyaV2,
                  `🚫 \`\`\`Getting...\`\`\``, // Loading start msg
                  '```Investigating...```', // Running msg
                  '✅ Ready!', // Load done msg
                  txt,
                  sleep
                 );
               }
  
  /*
  await editMsg(
          '🔄 Investing...',
          true,
          2000,
          txt,
          [pika.sender],
          anyaV2,
          sleep
      );
  }*/



