/*CMD
  command: šµ Balance
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

let res = Libs.ResourcesLib.userRes("balance");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
let lib = Libs.ReferralLib
let reflist = lib.getRefCount()
if(reflist>0){reflist = reflist}else{reflist = 0}
let inf =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
Bot.sendMessage( "š¤ _Account Summary_:  "+inf+
"\n\nā *Total Balance:"+ "\n"+ res.value() + " APT" + "\n\nš Total Referral Bonus:"+"\n"+ reflist*2 + " APT" + "\n\nšµ Total Withdrawn:"+ "\n"+ withdraw.value() + " APT" + "*\n" )
