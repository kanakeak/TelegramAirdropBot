/*CMD
  command: /onPayingTRX
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

var amount = options.amount 
var wallet = options.wallet
var id = options.id






Libs.CoinPayments.apiCall({
  fields: { cmd: "get_withdrawal_info",
            id: id
          },
  onSuccess: 'done'
          });
