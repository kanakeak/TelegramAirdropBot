/*CMD
  command: TRX
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Trxreinvest

  <<ANSWER
🖥* Profit Calculator *🖥

Calculate here your incoming profits!

*Send the amount of TRX you want to invest*
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var amount = parseFloat(message);
var profi = amount*1.2;
var prof = amount*2.5;
var pro = amount*3;

if (amount>= 1 && amount <=499){
Bot.sendMessage(
  "*💻 Profit Calculator 💻*\n\n_Plan: 120.00% daily for 1 day_\n\n_⏱ Your first payment will arrive after 24 hours!_\n\n*💰 After 24 hous: *" +
    profi.toFixed(1) +
    " TRX\n_❓ You will get back more than what you invested after just 24 Hours_\n\n*🔥 Total Profit: *" +
    profi.toFixed(1) +
    " TRX")
Bot.runCommand("TRX")
}else{
if (amount>= 500 && amount <=1999){
Bot.sendMessage(
  "*💻 Profit Calculator 💻*\n\n_Plan: 250.00% daily for 1 day_\n\n_⏱ Your first payment will arrive after 24 hours!_\n\n*💰 After 24 hous: *" +
    prof.toFixed(1) +
    " TRX\n_❓ You will get back more than what you invested after just 24 Hours_\n\n*🔥 Total Profit: *" +
    prof.toFixed(1) +
    " TRX")
Bot.runCommand("TRX")
}else{
if (amount>= 2000 && amount <=10000){
Bot.sendMessage(
  "*💻 Profit Calculator 💻*\n\n_Plan: 300.00% daily for 1 day_\n\n_⏱ Your first payment will arrive after 24 hours!_\n\n*💰 After 24 hous: *" +
    pro.toFixed(1) +
    " TRX\n_❓ You will get back more than what you invested after just 24 Hours_\n\n*🔥 Total Profit: *" +
    pro.toFixed(1) +
    " TRX")
Bot.runCommand("TRX")
} else {
Bot.runCommand("/main99")
}
}
