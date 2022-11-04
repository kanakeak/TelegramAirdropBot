/*CMD
  command: /list
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

let lib = Libs.ReferralLib
let tgid = user.telegramid
let refList = lib.getRefList();
let refcount = lib.getRefCount();
let refusers = refList.getUsers();
let users_rows = ""
let msg;
if(refcount>=0){
  for(var ind in refusers){
    users_rows = users_rows + "\n👤 " + Libs.commonLib.getLinkFor( refusers[ind] )
    msg = "Total referrals: " + refcount + "\n--------------------------------------\n\n"+users_rows;
  }
}else{
  msg = "No affiliated users";
}
Bot.sendMessage(msg);


