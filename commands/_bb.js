/*CMD
  command: /bb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter Amount
  keyboard: 
  aliases: 
CMD*/

var amount = parseFloat(message);
var tgid = User.getProperty("id");
var res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(parseFloat(amount));
Bot.sendMessage("*Succesfully Amount Added Balance* \n👤 User: "+tgid+"\n💰 Amount:"+amount);
