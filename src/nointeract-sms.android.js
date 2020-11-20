"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var smsManager = android.telephony.SmsManager.getDefault();
function sms(number, msg) {
    console.log(number, msg);
    var parts = smsManager.divideMessage(msg);
    smsManager.sendMultipartTextMessage(number, null, parts, null, null);
}
exports.sms = sms;
//# sourceMappingURL=temp-sms.android.js.map