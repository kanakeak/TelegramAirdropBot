/*CMD
  command: 💵 Balance
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
Bot.sendMessage( "👤 _Account Summary_:  "+inf+
"\n\n➖ *Total Balance:"+ "\n"+ res.value() + " APT" + "\n\n🎁 Total Referral Bonus:"+"\n"+ reflist*2 + " APT" + "\n\n💵 Total Withdrawn:"+ "\n"+ withdraw.value() + " APT" + "*\n" )
