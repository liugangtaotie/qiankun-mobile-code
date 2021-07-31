/**
 * 线上打包部署配置
 * PRODUCTION_ENV = '' 部署到开发环境
 */
// const PRODUCTION_ENV = '-zk'

// 根据域名自动获取线上环境
// 无需手动配置
const PRODUCTION_ENV = location.pathname.split("/")[1].slice(4);

let base = `/xxxx${PRODUCTION_ENV}`; // 生成产品用      开发或者提交都用这个地址
// eslint-disable-next-line prettier/prettier
let config = {} as any;

// 图片地址前缀
config["xxxx"] = base + "/upload";


export default config;
