/*CMD
  command: /createWalletTrx99
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

User.setProperty("permtrxwallet" , "TKjsk7aiuoRxXZLiMm4VKkYhbp6XmYzxq4","string")
/*Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "myLabel",
  onSuccess: "/onWalletCreated",
  onIncome: "/onGettingTRX",
  onIPN: "/onifipn"
}); */
