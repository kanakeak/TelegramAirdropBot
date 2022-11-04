/*CMD
  command: /TRXre99
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Trxreinvest

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var deposit = Libs.ResourcesLib.userRes("deposit");
var wallet = User.getProperty("wallet");
var amount = message
var re = Libs.ResourcesLib.anotherChatRes("re", "global")
var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
var balance = Libs.ResourcesLib.userRes("balance")
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var value = message
if(!isNumeric(value)){
Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*",{is_reply:true})
return
}

if(message < 1 ){
Bot.sendMessage("❌ You can not reinvest right now: You need at least 1 TRX to reinvest!")
}else{
if(message > balance.value()){
Bot.sendMessage("🚫Insufficient balance\n\nYour balance:"+balance.value().toFixed(6)+" TRX")
}else{
Bot.sendMessage("🗞 *ReInvestment Started At Now 🗞\n\n💳 Profit will credited into your withdrawable balance with on every 24 hours\n\n"+
"💵 Invested Amount : "+ message+" TRX*\n\n");
balance.add(-message)
deposit.add(+message)
re.add(+message)
Bot.run({
command : "/acc",
run_after : 1*60*60*24,
options: { amount: message }
});
Api.sendMessage({chat_id: "@helixpayment", text: "*➕ NEW RE-INVESTMENT🔃📥*\n  "+info+" *just re-invested "+amount+" TRX!!! * \n \n*♂️ Deposited Address:* `"+wallet+"`\n\n *🤖 Bot @"+bot.name+"*" ,parse_mode : "Markdown" , disable_web_page_preview: true
})
}
}

