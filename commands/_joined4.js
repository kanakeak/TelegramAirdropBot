/*CMD
  command: /joined4
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
Bot.runCommand("/main99")
User.addToGroup("user")
}else{
Bot.sendKeyboard("🧿 Continue 🧿","📡 *To use this bot you must join these channels: \n [@AptosAir_group] \n  [@AptosAir_channel] \n [@LatestAirdrop_finder] \n [@LatestAirdrop_news]*")
}
if (user=="left"){
Bot.sendKeyboard("🧿 Continue 🧿","📡 *To use this bot you must join these channels: \n [@AptosAir_group] \n  [@AptosAir_channel] \n [@LatestAirdrop_finder] \n [@LatestAirdrop_news]*")
}
