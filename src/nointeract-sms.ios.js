"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TempSms = (function () {
    function TempSms() {
    }
    TempSms.prototype.get = function () {
        var version = NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
        return version;
    };
    return TempSms;
}());
exports.TempSms = TempSms;
//# sourceMappingURL=temp-sms.ios.js.map