// PostCSS 配置文件

module.exports = {
  // 配置要使用的 PostCSS 插件
  plugins: {
    // 配置使用 autoprefixer 插件
    // 作用生成浏览器CSS样式规则前缀
    // 注意： vue cli内部已经配置了 autoprefixer 插件
    // 这里又配置了一次，所以产生冲突了
    // 'autoprefixer': {
    //   // autoprefixer 插件的配置
    //   // 配置要兼容到的环境信息
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    // 配置使用 postcss-pxtorem 插件
    // 作用：把px 转换位 rem
    'postcss-pxtorem': {
      // lib-flexible 的 rem 适配方案：把一行分为 10 份，每份就是10分之一
      // 所以，rootValue 的值应该设置为你设计稿宽度的十分之一
      // 我们的设计稿是 750， 所以应该设置为 750/10 = 75
      // 但是Vant建议设置为 37.5，因为Vant是基于375写的，唯一的缺点就是使用我们设计稿的尺寸都必须除2

      // 有没有更好的办法？
      //   如果是 Vant 的样式，就按照 37.5 来转换
      //   如果是 我们自己 的样式，就按照 75 来转换
      // 通过查阅文档，我们发现 rootValue 支持两种类型：
      //    数字：固定的数值
      //    函数：可以动态处理返回
      //          postcss-pxtorem 处理每个 CSS 文件的时候都会来调用这个函数
      //          它会把被处理的 CSS 文件相关的信息通过参数传递给该函数
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },

      // rootValue: 37.5,
      // 配置要转换的css属性
      // * 表示转换所有
      propList: ['*']
    }
  }
}
