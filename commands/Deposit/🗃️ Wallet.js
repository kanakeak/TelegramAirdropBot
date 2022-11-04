/*CMD
  command: 🗃️ Wallet
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
var button = [[{title : "💼 Set / Change APT Wallet" , command : "/wallet"}]]
Bot.sendInlineKeyboard(button,"*💡 Your currently set APT wallet is:* \n `"+wallet+"`\n\n💹It will be used for *all future withdrawals.*"
);

