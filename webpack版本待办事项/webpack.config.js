//webpack.config.js

var path=require('path')

module.exports={
    entry:'./app.jsx',
    output:{
        // 用于获取绝对路径path.resolve(.1,2),把多个路径解析为一个路径,__dirname是Nodejs的一个全局变量，它指向当前执行脚本所在目录
        path:path.resolve(__dirname,'./'),
        filename:'app.boundle.js'
    },
    module:{
        //加载指定类型未见所需的加载器
        //例如加载.css需要css-loader,style-loader
        //加载器用于加载除了js之外的其他资源,
        //加载不同类型的资源需要不同的加载器
        loaders:[{
            test:/\.jsx$/,exclude:/node_modules/,
            //加载器的名字，加载.jsx用到babel-loader
            loader:'babel-loader'
        },{
            test:/\.css$/,
            //style-loader可以将css内容通过style标签添加到head标签内
            loader:"style-loader!css-loader",
        }]
    }
}