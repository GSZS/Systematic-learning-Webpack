// 将module内容的所有字符串为“World”的替换为Loader
module.exports = function (source) {
  return source.replace(/World/g, "Loader");
};
