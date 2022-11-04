/*CMD
  command: 📊 Statistics
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global");
let upay = userPayment.value();
if(upay > 1865){upay = upay}else{upay = 1865 + upay}
var tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
let total = tota.value();
if(total > 168){total = total}else{total = 168 + total}
Bot.sendMessage("*📊 Bot Live Statistics*" + "\n\n👤* Total Participants:* `" + total + "`\n\n*💳 Total Withdrawn:* `\n" + upay + "` *APT*")

