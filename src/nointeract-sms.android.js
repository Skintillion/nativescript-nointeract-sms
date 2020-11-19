"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var smsManager = android.telephony.SmsManager.getDefault();
function sms(number, msg) {
    console.log(number, msg);
    smsManager.sendTextMessage(number, null, msg, null, null);
}
exports.sms = sms;
//# sourceMappingURL=temp-sms.android.js.map