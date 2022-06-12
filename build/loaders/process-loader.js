// 打印当前正在解析的module name的Loader
const path = require("path");
module.exports = function (source) {
  const filename = path.basename(this.resourcePath);
  console.log(`====${filename}====`);
  // 别忘记将source返回
  return source;
};
