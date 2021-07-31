import wx from "weixin-js-sdk";
const jsApiList = [
  "checkJsApi",
  "getLocation",
  "scanQRCode",
  "previewImage",
  "startRecord",
  "stopRecord",
  "uploadVoice",
  "translateVoice",
  "downloadVoice",
  "playVoice",
];

// 微信扫一扫
export function scanCode(configData, callback) {
  wx.config({
    debug: false,
    appId: configData.appId,
    timestamp: configData.timestamp,
    nonceStr: configData.noncestr,
    signature: configData.signature,
    jsApiList: jsApiList,
  });
  wx.ready(function () {
    wx.scanQRCode({
      needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res) {
        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        callback(result);
      },
    });
  });
}
