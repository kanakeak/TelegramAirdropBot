/*CMD
  command: ðï¸ Wallet
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let wallet = User.getProperty("wallet")
var button = [[{title : "ð¼ Set / Change APT Wallet" , command : "/wallet"}]]
Bot.sendInlineKeyboard(button,"*ð¡ Your currently set APT wallet is:* \n `"+wallet+"`\n\nð¹It will be used for *all future withdrawals.*"
);

