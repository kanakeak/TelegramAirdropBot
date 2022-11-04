/*CMD
  command: /onChevcking
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

var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("/main99")
User.addToGroup("user")
}

if (user=="left"){
Bot.sendKeyboard("🧿 Continue 🧿","📡 *To use this bot you must join these channels: \n [@AptosAir_group] \n  [@AptosAir_channel] \n [@LatestAirdrop_finder] \n [@LatestAirdrop_news]*")
}
