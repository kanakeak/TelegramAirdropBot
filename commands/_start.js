/*CMD
  command: /start
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

var welcomey = User.getProperty("welcomey")
if (welcomey == undefined) {
var tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
  tota.add(1)
var balance = Libs.ResourcesLib.userRes("balance")
balance.add(10)
var depo = Libs.ResourcesLib.anotherChatRes("depo"," global")
depo.add(10)
//Bot.sendMessage("🎁* Joining bonus 10 APT has been added to your account.*")
}
User.setProperty("welcomey", user.telegramid, "text")
Bot.sendKeyboard("🧿 Continue 🧿","Aptos (APT) is attracting crypto traders by its charm. The price of this token is getting to the moon. \nWe are giving away Aptos - APT as an airdrop event, so grab your chance to get the coins right away by doing some simple tasks. \n\n 🪂 Total Airdrop Amount: *100,000 APT* (Approx: $877,831 💰)\n\n🪖 Airdrop joining Bonus: *10 APT* (Approx: $87.96) For All.\n\n📮 Per Referral: *2 APT*\n\n🥇Top 20 Most Referral holders: *100 APT Each*\n\n🏆 *One Lucky Winner will get 1000 APT.* (Randomly picked from all participants)\n\n🏁 Airdrop Ends: *31st December 2022*\n\n⛽ Distribution: *Within 10 days After Airdrop ends.*\n\n🚧🚧 Kindly Update your *Trust Wallet* if you didn’t find `Aptos` in the crypto list to add and get your wallet address\n\n\n*Mandatory tasks:* \n\n🧩 Join Our Group [@AptosAir_group] \n\n🧩 Join Our channel [@AptosAir_channel] \n\n🧩 Join Our Promoters Group [@LatestAirdrop_finder] \n\n🧩 Join our promoters Channel [@LatestAirdrop_news] \n\n🧩 Follow [https://twitter.com/AptosFoundation] and retweet the pinned post.\n🧩 Follow our Promoter [https://twitter.com/LatestAirdrop_] and retweet the pinned or a random post.\n\n\n🔖 *Coinmarketcap Listing:* https://coinmarketcap.com/currencies/aptos/\n🧾 *Block Scan:* https://aptoscan.com/\n \n\nAfter completing all the tasks above, Hit *Continue* button to proceed..")
function onAttracted(refUser){
var res = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid);
  res.add(2);
Bot.sendMessageToChatWithId(refUser.chatId," *+2 APT for New refferal*")}
Libs.ReferralLib.currentUser.track({
   onAtractedByUser: onAttracted
});

