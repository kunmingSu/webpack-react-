#### webpack打包react项目步骤：
```
1 npm init
2 npm install --save react react-dom
3 npm install --save-dev css-loader style-loader babel-core babel-loader babel-preset-es2015 babel-preset-react
4 创建组件: 新建components目录，在目录创建TodoList.jsx、TodoApp.jsx
5 创建入口文件：app.jsx
6 创建webpack配置文件：webpack.config.js
7 创建app.css
8 创建index.html
9 .babelrc
10 npm install --save-dev webpack
11 运算webpack命令打包
12 把打包后的文件引入到index.html

改写为服务器形式运行
npm install --save-dev webpack-dev-server
```