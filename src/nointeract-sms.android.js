"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var smsManager = android.telephony.SmsManager.getDefault();
function sms(number, msg) {
    var parts = smsManager.divideMessage(msg);
    smsManager.sendMultipartTextMessage(number, null, parts, null, null);

    values = new android.content.ContentValues();
    values.put("address", number);
    values.put("body", msg);
    getContentResolver().insert(Uri.parse("content://sms/sent"), values);
    
}
exports.sms = sms;
//# sourceMappingURL=temp-sms.android.js.map