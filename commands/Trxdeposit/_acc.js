/*CMD
  command: /acc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Trxdeposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

//acc
var deposit = options.amount
Bot.sendMessage(
 "*➕ Investment Accrual : *"+1.2*deposit+ " TRX"
)

var balance = Libs.ResourcesLib.userRes("balance")
balance.add(1.2 * deposit)
var depo = Libs.ResourcesLib.userRes("deposit")
depo.add(-deposit)
var profit = Libs.ResourcesLib.userRes("profit")
profit.add(0.2*deposit)
