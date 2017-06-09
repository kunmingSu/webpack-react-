

//TodoAPP.jsx
import React from 'react'
import TodoList from './TodoList.jsx'
export default class TodoApp extends React.Component{
    //调用构造方法
    constructor(){
        console.log('构造方法')
        super()
        //设置初始状态
        this.state={
            //用户提交的所有代码
            datas:[],
            text:''
        }
        //修改this指向
        this.textChange=this.textChange.bind(this)
        this.formSubmit=this.formSubmit.bind(this)
    }
    // 提交表单数据的方法
    formSubmit(ev){
        ev.preventDefault()
        //获取文本框内容
        //在用户点击“提交”的时候，把当前的数据存入state
        var text=this.state.text.trim()
        if(text.length > 0){
            var task={
                text,
                createTime:new Date()
            }
            this.setState((prev)=>{
                return {
                    datas:prev.datas.concat(task),
                    text:''
                }
            })
        }
    }
    textChange(ev){
        this.setState({text:ev.target.value})
    }
    render(){
        return (
            <div>
                <h3>React待办事项</h3>
                <TodoList data={this.state.datas} />
                <form onSubmit={this.formSubmit}>
                    <input type="text" onChange={this.textChange} value={this.state.text} placeholder="请输入待办事项"/>
                    <button>提交</button> 
                </form>
            </div>
        )
    }
}