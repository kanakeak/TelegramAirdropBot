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
Bot.sendMessage("šµ *Withdrawal Paid*\n*The owner Automatically Paid your withdrawal of "+amount+" TRX on your wallet* `"+wallet+"`\n\n* š Transaction ID*:- \n["+ txn_id + "]" +"(https://tx.botdev.me/TRX/" + txn_id + "\n)",{ disable_web_page_preview: true })


Api.sendMessage({
  chat_id: "@helixpayment",
  text: "āļø *New Withdrawal* āļø\n"+info+" *Just withdraw "+amount+" TRX!!!!\n\nš Transaction ID* :- ["+txn_id+"](https://tx.botdev.me/TRX/"+txn_id+")\n\n*š¤ Bot link @"+bot.name+"\nš Get 0.01 TRX and 15% for each refer*",
  parse_mode: "Markdown",
  disable_web_page_preview: true
})

