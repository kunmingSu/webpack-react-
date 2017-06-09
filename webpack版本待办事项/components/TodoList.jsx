//TodoList.jsx
import React from 'react'
//在创建组件的同时把它导出供外部使用
export default class TodoList extends React.Component{
    render(){
        console.log(this.props.data)
        return (
            <div>
                <ul>
                    {
                        this.props.data.map((item,index)=>
                            <li key={index}>
                                {item.text}
                            </li>
                        )
                    }
                </ul>
            </div> 
        )
    }
}