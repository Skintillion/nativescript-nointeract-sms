# nativescript-nointeract-sms

Sending sms without user interaction.

var smsManager = android.telephony.SmsManager.getDefault();

smsManager.sendTextMessage("0123232332",null,"Hello",null,null);

## (Optional) Prerequisites / Requirements

To send sms without user interaction on Android your app must request permission to do so. The following must be in your app's AndroidManifest.xml

```xml
<uses-permission android:name="android.permission.SEND_SMS" />
```

iOS sms feature will soon be implemented.

## Installation

Install the plugin using the NativeScript CLI tooling

```javascript
tns plugin add nativescript-nointeract-sms
```

## Usage 

To use the module you must first require() it from your project's node_modules directory:



After you have a reference to the module you can then call the available methods.
	
	```js
		var temp = require( "nativescript-nointeract-sms" );
  		temp.sms(number,messageText);
    ```

Parameters: 

number: SMS number to use.

messageText: String to send.


## License

MIT, 2017
