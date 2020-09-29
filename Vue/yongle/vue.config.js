const path = require('path')

module.exports = {
    chainWebpack(config){
        config.resolve.alias
            .set('@',path.resolve(__dirname,'./src'))
            .set('@c',path.resolve(__dirname,'./src/components'))
            .set('@u',path.resolve(__dirname,'./src/utils'))
            .set('@v',path.resolve(__dirname,'./src/views'))
            .set('@a',path.resolve(__dirname,'./src/assets'))
    },
    devServer:{
        proxy:{
            // 暗号 当在浏览器地址栏里输入/api字符串时会将请求拦下来
            '/api':{
                target:'https://m.228.cn',
                changeOrigin:true, 
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}