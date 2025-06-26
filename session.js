//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkF0VEcxbWhMSi9adkV0Z2I0WTJ2ZUpFQ0hJdU1TMHFyeDdia1ZHbTNHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXFVOExFOTVlaGJCaUl2bGsxeHZWRHlOYlA3cFhralZCTTk2bUR2Z0FIOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBT0RvSWdaVUE0aVVOUmlEcWFBUnVlQmVjTUVZQ0NsUGJqYzhFRDRVV0VjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYWRpRmJOTlJoQ3dOZjA3UkRqYlFvd05VZWpDSW1lSDN4eFRSaCtNaVFRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNCVEVjRTVURlc2Q0M0SEkvZk5mNG85cWVmYWgxZmxkMkNSMkpya3RiM2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJpakQ0c0JiZ3JuNk4xejBJN0J5VjczS1hpa2l6Ui9YR0lMZ1g5RTBLeG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU05OSCt1Tnc3eWkzS1NBbzN5NzYzbWNNTlN0Zlp1TE54NVFqY2J4NXQwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDMxWkJ5ZE5jd1NtRG9zb2xlQTQ2ejRSaDEvTlQvUE4rTFY4WGE1dDhTYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNwWklSOWdSVEJJVWdRVzdneE9hWDlmRysycVlUMTRMYzBmTXhjRlFVT3FyeUc0aE9odElLZVp5QzE2c3JsRW8xZHQ5YTR0a2hTSzJqUEw4bHErYkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6Imc3M0RIbmRxWXlwdXFsWXNUU0FnSWlud1NwR2pVWWkvREQwdTIvekVTMVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjE1NzIwNDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUFDQUYxMzI0MUE1QkQzMEZERDYyMzRBNUM4RkRDMjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDkwNzE2N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidEx5b2lBTENRdnlESzN0NVdlbHdVdyIsInBob25lSWQiOiIwMzY2NDkzZi1lNzNmLTQ0ZGEtYTQxNS02NWU5MDUyNTFlZjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVV5cU5EVEVJSWtldlp1MUttN2xKL0ZjS3JRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkcrbW11b1VuWVcvdUcrMVlaQkZHT0VpM05zTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJIQlBOOERBMiIsIm1lIjp7ImlkIjoiOTQ3NjE1NzIwNDY6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJkaW51a2FsYWttbCIsImxpZCI6IjIwODcyMzExMjg5MDM5MDoxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTzZzd3VRRUVJM3k4c0lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiS1ZGYWttamx6VkkvUWl0cTNXRStpY3pIbzV1RkJQZmwzVmNGQ3V6b1Zqcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiT1c3SFdmWXJNdUErZEZ1ZkVwVFMwOFdiVWlGcS9hMFdJV2RVWFpCSGFuc3hnS21OenVJendLM0Myb293WW1SVjJjRzA2RDJYRisrTHJqVFZ5dEVMQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjI5U3d3VTQ2MHJMN3pTSDJDYzJyRjRzSjFrczludzJkV0NqZ1dQODJsOGlzM2sySE82MHhXS1pZa1JrVUNDRSt6NlZQSmcrK2EvcE5QN0xrNUREN0FBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjE1NzIwNDY6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTbFJXcEpvNWMxU1AwSXJhdDFoUG9uTXg2T2JoUVQzNWQxWEJRcnM2Rlk3In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA5MDcxNjIsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ3BUIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94761572046",
  PASSWORD: 
    process.env.PASSWORD || "dinuka12**",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
