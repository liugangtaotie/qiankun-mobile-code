//这里是居民端
import axios from "axios";
import cfg from "./appConfig";
let base = cfg.baseUrl; // 开发的时候

// 目录地址
export const CHILD_URL = base;

export const baseImg = () => {
  return cfg.imgPreviewUrl;
};
