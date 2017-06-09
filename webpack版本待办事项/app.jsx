//app.jsx


//import属于es6模块导入方法
import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './components/TodoApp.jsx'
import './app.css'
ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
)