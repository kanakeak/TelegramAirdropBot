/*CMD
  command: 📥 Deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = [[{title:"✅ Confirm",command:"/depTrx"}]]
let depot = "➕ *Welcome! Here you can start a new investment!\n\n*_Are You Sure To Start Investing_"
Bot.sendInlineKeyboard(key,depot)
