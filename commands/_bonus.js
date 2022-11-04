/*CMD
  command: /bonus
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🥏 bonus
CMD*/

function canRun(){
  var last_run_at5 = User.getProperty("last_run_at5");
  if(!last_run_at5){ return true }
  
  var minutes = (Date.now() - last_run_at5) /1000/60;
  
  var minutes_in_day = 24*60
  var next = (minutes_in_day - minutes)
var wait_hours=Math.floor( next /3600)
next-= wait_hours * 60
var wait_minutes=Math.floor(next)
var seconds= Math.floor((next - wait_minutes)*60)
  if(minutes < minutes_in_day){
   Bot.sendMessage("_❌ Sorry ,you have received your Bonus today\n\n_⚡️ You can receive your next bonus after_: \n"+wait_minutes+" minutes and seconds_ " +seconds);
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at5", Date.now(), "integer");

let am=1

//Bot.sendMessage(" *You Received:* "+am.toFixed(8)+" TRX ")


let res = Libs.ResourcesLib.userRes("balance");
res.add (am);
Bot.sendMessage  ( "*🎁 Today you received* " + "\n\n" +am+ " *APT* " + "\n\n" + "_⚜️ Come back tomorrow and try again.This Is free Bonus_")
