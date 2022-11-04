/*CMD
  command: /lvl1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


var referrer = Libs.ReferralLib.currentUser.attractedByUser();
var lvl1 = Libs.ResourcesLib.userRes("lvl1")
lvl1.set(referrer.telegramid)
Bot.sendMessage(referrer.telegramid);
var lvl2 = Libs.ResourcesLib.anotherUserRes("lvl1", referrer.telegramid);
Bot.sendMessage(lvl2.value())
