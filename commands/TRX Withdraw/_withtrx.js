/*CMD
  command: /withtrx
  help: 
  need_reply: true
  auto_retry_time: 
  folder: TRX Withdraw

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var withdraw = Libs.ResourcesLib.userRes("withdraw")
var wallet = User.getProperty("wallet")
var balance = Libs.ResourcesLib.userRes("balance")
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  return
}

if (message < 14) {
  Bot.sendMessage("❌ Minimum amount to withdraw 14 APT")
} else {
  if (message > balance.value()) {
    Bot.sendMessage(
      "_🚫 You Can Withdraw Maximum: " + balance.value() + " APT"
    )
  } else {
function canRun(){
var last_run_a = User.getProperty("last_run_a");
  if(last_run_a){ return true }
  
  var minutes = (Date.now() - last_run_a) /1000/60;
  
  var minutes_in_day = 24*60
  var next = (minutes_in_day - minutes)
var wait_hours = Math.floor(next / 60)
next-= wait_hours * 60
var wait_minutes=Math.floor(next)
var seconds= Math.floor((next - wait_minutes)*60)
  if(minutes < minutes_in_day){
   Bot.sendMessage("🔐 *To withdraw, you need to complete the following missions:\n\n✅ You already withdraw 1 time in 24 hours come back after :- \n"+wait_hours+" hours*");
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_a", Date.now(), "integer");
    if (message >= 1 && message <= 200000) {
      var amo = message
      User.setProperty("amo", amo, "string")
var randomNumber = Math.floor((Math.random() * 999999999999999) + 1)
var txn_id = randomNumber;
var amount = message;
var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";

Api.sendMessage({
  chat_id: "@AptosAir_payout",
  text: "💸 *New Withdrawal* ↗️\n"+info+" *Just withdraw "+amount+" APT!!!!\n\n🆔 Transaction ID* :- ["+txn_id+"](https://aptoscan.com/"+txn_id+")\n*To wallet* :- `"+wallet+"`\n\n*🤖 Bot link @"+bot.name+"\n😊 Get 10 APT for joining and 2 APT for each referral*",
  parse_mode: "Markdown",
  disable_web_page_preview: true
})
Bot.sendMessage(
    "✅ *Withdrawal Requested*\n*You will receive your payment after 31st December within 10 days*\n\n💳 *Transaction Details :-*\n🏁 "+amo+" *APT* to the wallet\n💼 `"+wallet+"`\n\n📯 Payout Channel :- [@AptosAir_payout]"
  )
      balance.add(-message)
      withdraw.add(+message)
      userPayment.add(+message)
    } else {
    var amo = message
  Bot.sendMessage(
    "*✅ Withdrawal Requested\nYou will receive your payment after 31st December within 10 days*\n\n💳 *Transaction Details :-*\n🏁 " +
      amo +
      " *APT* to the wallet\n💼 `" +
      wallet + "`\n\n📯 Payout Channel :- [@AptosAir_payout]"
  )
      balance.add(-message)
      withdraw.add(+message)
      userPayment.add(+message)
    }
  }
}

