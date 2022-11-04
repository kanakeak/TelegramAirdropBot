/*CMD
  command: 🧿 Continue 🧿
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: back 🔙, 🔙 back
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban From Using The Bot ❌*");
}else{

let channel1 = "@AptosAir_group";
let id = user.telegramid;
Api.getChatMember({ 
chat_id : channel1,
user_id : id,
on_result :"/joined1"})
}
