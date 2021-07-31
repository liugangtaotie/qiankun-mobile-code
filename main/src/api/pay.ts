// 微信支付
export function wxPay(data, okCallback, failCallback) {
  function onBridgeReady() {
    window.WeixinJSBridge.invoke(
      "getBrandWCPayRequest",
      {
        appId: data.appId,
        timeStamp: data.timeStamp,
        nonceStr: data.nonceStr,
        package: data.package,
        signType: data.signType || "MD5",
        paySign: data.sign,
      },
      function (res) {
        if (res.err_msg === "get_brand_wcpay_request:ok") {
          okCallback();
        } else {
          failCallback();
        }
      }
    );
  }
  if (typeof window.WeixinJSBridge === "undefined") {
    console.log("请使用微信浏览器");
    if (document.addEventListener) {
      document.addEventListener("WeixinJSBridgeReady", onBridgeReady, false);
    } else if (document["attachEvent"]) {
      document["attachEvent"]("WeixinJSBridgeReady", onBridgeReady);
      document["attachEvent"]("onWeixinJSBridgeReady", onBridgeReady);
    }
  } else {
    onBridgeReady();
  }
}
// 支付宝支付
// export function aliPay(data, okCallback, failCallback) {
//   function ready(cb) {
//     if (window.AlipayJSBridge) {
//       cb && cb();
//     } else {
//       console.log("please open in alipay");
//       document.addEventListener("AlipayJSBridgeReady", cb, false);
//     }
//   }
//   ready(function() {
//     window.AlipayJSBridge.call(
//       "tradePay",
//       {
//         tradeNO: data.trade_no,
//       },
//       function(result) {
//         // okCallback(result)
//         switch (result.resultCode) {
//           case "9000": // 支付成功
//             okCallback(result);
//             break;
//           case "8000": // 后台获取支付结果超时，暂时未拿到支付结果
//           case "6004": // 支付过程中网络出错， 暂时未拿到支付结果
//             result.message = "支付处理中，请稍后在您的订单中查看";
//             failCallback(result);
//             break;
//           case "6001": // 用户中途取消
//           case "99": // 用户点击忘记密码快捷界面退出(only iOS since 9.5)
//             break;
//           default:
//             result.message = "支付异常,请关闭页面后重试";
//             failCallback(result);
//             break;
//         }
//       }
//     );
//   });
// }
