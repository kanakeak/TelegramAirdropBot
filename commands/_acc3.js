/*CMD
  command: /acc3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//acc
var deposit = options.amount
Bot.sendMessage(
 "*➕ Investment Accrual : *"+3*deposit+ " TRX"
)

var balance = Libs.ResourcesLib.userRes("balance")
balance.add(3 * deposit)
var depo = Libs.ResourcesLib.userRes("deposit")
depo.add(-deposit)
var profit = Libs.ResourcesLib.userRes("profit")
profit.add(1.5*deposit)
