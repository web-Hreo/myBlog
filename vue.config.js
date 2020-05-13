module.exports = {
  devServer: {
    // 设置代理
    proxy: {
      '/jdapi': {
        target: "https://way.jd.com/",
        ws: true,
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          '^/jdapi': '' // 这里理解成用'/jdapi'代替target里面的地址，后面组件中我们掉接口时直接用api代替 
        }
      }
    }
  }
};