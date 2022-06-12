// 输出构建清单的自定义插件
class OutputListWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      "OutputListWebpackPlugin",
      (compilation, cb) => {
        const manifest = {};
        for (const name of Object.keys(compilation.assets)) {
          manifest[name] = compilation.assets[name].size();
        }
        compilation.assets["manifest.json"] = {
          source() {
            return JSON.stringify(manifest);
          },
          size() {
            return this.source().length;
          },
        };
        cb();
      }
    );
  }
}
module.exports = OutputListWebpackPlugin;
