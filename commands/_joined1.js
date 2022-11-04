/*CMD
  command: /joined1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var user1 = options.result.status;
User.setProperty("status" , user1, "string");
if(user1=="member" | user1 =="administrator" | user1=="creator"){
 let channel2 = "@AptosAir_channel";
 let id = user.telegramid;
Api.getChatMember({ 
chat_id : channel2,
user_id : id,
on_result :"/joined2"})
}else{
Bot.sendKeyboard("🧿 Continue 🧿","📡 *To use this bot you must join these channels: \n [@AptosAir_group] \n  [@AptosAir_channel] \n [@LatestAirdrop_finder] \n [@LatestAirdrop_news]*")
}
