/*CMD
  command: done
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

var result = options.body.result;
var txn_id = result.send_txid;
var wallet = result.send_address;
var amount = result.amountf;
var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
Bot.sendMessage("💵 *Withdrawal Paid*\n*The owner Automatically Paid your withdrawal of "+amount+" TRX on your wallet* `"+wallet+"`\n\n* 🆔 Transaction ID*:- \n["+ txn_id + "]" +"(https://tx.botdev.me/TRX/" + txn_id + "\n)",{ disable_web_page_preview: true })


Api.sendMessage({
  chat_id: "@helixpayment",
  text: "♂️ *New Withdrawal* ↗️\n"+info+" *Just withdraw "+amount+" TRX!!!!\n\n🆔 Transaction ID* :- ["+txn_id+"](https://tx.botdev.me/TRX/"+txn_id+")\n\n*🤖 Bot link @"+bot.name+"\n😊 Get 0.01 TRX and 15% for each refer*",
  parse_mode: "Markdown",
  disable_web_page_preview: true
})

