/*CMD
  command: /broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _Enter your Message_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == 5457446602 | user.telegramid == 5457446602){
let msg = "🔥 Important Announcement : \n\n" + data.message
Bot.sendMessageToAllPrivateChats(msg)
Bot.sendMessage("✅Message sent to all active members")
}else{
Bot.sendMessage("Not admin")
}
