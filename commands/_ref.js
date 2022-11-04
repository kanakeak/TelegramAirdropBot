/*CMD
  command: /ref
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 👥 refferal
CMD*/

let tgid = user.telegramid
let lib = Libs.ReferralLib
let reflist = lib.getRefCount()
//reflist = lib.currentUser.getRefCount.get()
//reflist = lib.currentUser.refList.get()
//let refcom = Libs.ResourcesLib.userRes("refcom")
let reflink = Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","ref")
let msg
if (reflist > 0) {
  msg = reflist
} else {
  msg = 0
}

var key = [[{ title: "📑 Detailed Report", command: "/list"}]]

Bot.sendMessage("*👨‍👩‍👧‍👦 Referral System\n\n✔️ Earn 2 APT Every Time You Refer someone.*")
Bot.sendMessage("👥 *Your referral link : "+reflink+"*")
Bot.sendInlineKeyboard(
  key,"🌑* Total Referrals :- "+msg+"*\n\n♾ *Earnings:* \n" + msg * 2 + " *APT*"
  )

