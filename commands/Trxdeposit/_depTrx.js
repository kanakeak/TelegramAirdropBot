/*CMD
  command: /depTrx
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Trxdeposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let wallet = User.getProperty("permtrxwallet");

if(wallet){
  if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
let depo = Bot.getProperty("depowall"+user.telegramid)
let depot = "➕ *Welcome! Here you can start a new investment!*\n\n💵 We offer up to Investment Plans, choose the best for you!\n\n1️⃣ From *1 TRX to 10000000 TRX*\n_300.00% daily for 2 day_"

if(depo){
Bot.sendMessage("⚠️ _If you send less than 1 TRX, your deposit will be ignored!_\n\n✅ *Send the amount you want to invest to the following address:*")
Bot.sendMessage(""+depo+"")}else{
Bot.sendMessage("⚠️ _If you send less than 1 TRX, your deposit will be ignored!_\n\n✅ *Send the amount you want to invest to the following address:*")
let permtrxwallet = User.getProperty("permtrxwallet");
Bot.sendMessage("`" + permtrxwallet + "`") ;}
}else{
  Bot.runCommand("/createWalletTrx99");
}
