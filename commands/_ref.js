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
  aliases: ๐ฅ refferal
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

var key = [[{ title: "๐ Detailed Report", command: "/list"}]]

Bot.sendMessage("*๐จโ๐ฉโ๐งโ๐ฆ Referral System\n\nโ๏ธ Earn 2 APT Every Time You Refer someone.*")
Bot.sendMessage("๐ฅ *Your referral link : "+reflink+"*")
Bot.sendInlineKeyboard(
  key,"๐* Total Referrals :- "+msg+"*\n\nโพ *Earnings:* \n" + msg * 2 + " *APT*"
  )

