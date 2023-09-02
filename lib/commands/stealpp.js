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

function cmdName() {
  return ['stealpp',
         'stealdp',
         'stealprofilepic'];
}

async function getCommand(isCreator, isSudo, botNumber, AnyaPika) {
require('../../config');
    if (!isCreator && !isSudo) return m.reply(mess.owner);
    if (!m.quoted) return m.reply("Tag a user to steal his/her profile picture.");
    if (m.quoted.sender.includes(botNumber)) return m.reply("Don't tag this bot's own message!");
  try {
  const pfp = await AnyaPika.profilePictureUrl(m.quoted.sender, 'image');
    AnyaPika.updateProfilePicture(botNumber, { url: pfp })
    .then( m.reply(mess.success));
      } catch (e) {
  return m.reply("Profile picture not found or the user's profile picture is private.");
    }
  }
module.exports = { cmdName, getCommand }
