declare var $: any;
// eslint-disable-next-line prettier/prettier
// declare const BMap: any;
// eslint-disable-next-line prettier/prettier
declare module "common";
declare module "BMap";
declare module "easemob-websdk";

interface Window {
  __hideLoading__:any;
  WeixinJSBridge: any;
  $$instance: any;
  wx:any;
  BMap:any;
  WebIM:any;
  __POWERED_BY_QIANKUN__:any;
}


