/*CMD
  command: /joined3
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

let channel1 = "@AptosAir_group";
let channel2 = "@AptosAir_channel";
let channel3 = "@LatestAirdrop_finder";
let channel4 = "@LatestAirdrop_news";

var user1 = options.result.status;
User.setProperty("status" , user1, "string");
if(user1=="member" | user1 =="administrator" | user1=="creator"){
 let id = user.telegramid;
Api.getChatMember({ 
chat_id : channel4,
user_id : id,
on_result :"/joined4"})
}else{
Bot.sendKeyboard("🧿 Continue 🧿","📡 *To use this bot you must join these channels: \n [@AptosAir_group] \n  [@AptosAir_channel] \n [@LatestAirdrop_finder] \n [@LatestAirdrop_news]*")
}
