/*CMD
  command: /setup
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Libs.CoinPayments.setPrivateKey(
  "7325950b6E71dd8f9B554c73144abF41631316E65A7d4c1bA08AE5B1E218C1dc"
)
//get from coinpayment website
Libs.CoinPayments.setPublicKey(
  "b37823c0f36cc69de61196bfc8cdab77a9865e0f61c899a1684d9c1612138278"
)
//get from coinpayment website
Libs.CoinPayments.setBBApiKey("JthXFmP1UlS5dQwio4qaj8kdYPdD4OIrFUzffqPf")
//get from bots business three dots profile option
Bot.sendMessage("🔥Done Your Account Has Been Setupped")

