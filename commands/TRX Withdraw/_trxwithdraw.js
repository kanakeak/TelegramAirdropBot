/*CMD
  command: /trxwithdraw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TRX Withdraw

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var res = Libs.ResourcesLib.userRes("balance");
if(res.value() < 14 ){
Bot.sendMessage("❌ Minimum amount to withdraw 14 APT")
}else{
Bot.sendKeyboard("🔙 Back","📤 _How many APT you want to withdraw?_\n\n*Minimum:* `14 APT`"+"\n"+"*Maximum:* `"+res.value()+"`*\n"+"*\n_Maximum amount corresponds to your balance_"+"\n\n"+"*➡️ Send now the amount you want to withdraw*")
Bot.runCommand("/withtrx")
}
