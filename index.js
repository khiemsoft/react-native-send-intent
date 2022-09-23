var { Platform, NativeModules } = require("react-native");
var RNSendIntentAndroid = NativeModules.SendIntentAndroid || {};

var SendIntentAndroid = {
    TEXT_PLAIN: Platform.OS === "android" ? RNSendIntentAndroid.TEXT_PLAIN : "text/plain",
    TEXT_HTML: Platform.OS === "android" ? RNSendIntentAndroid.TEXT_HTML : "text/html",
    openApp(packageName, extras) {
        return RNSendIntentAndroid.openApp(packageName, extras || {});
    }
}

module.exports = SendIntentAndroid;
