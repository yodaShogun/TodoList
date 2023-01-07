import React from 'react'
import Task from './task'

class Body extends React.Component{

    state = {
        taskList : [
            {
                id:1,
                name:"React WorkShop",
                done: false
            },
            {
                id:2,
                name:"Coding Daily",
                done:true
            }
        ]
    }

    deleteTask = (id) =>{
       const taskList =  this.state.taskList.filter((el)=>{
            return el.id !== id
        }) 

        this.setState({
            taskList
        })
    }

    render(){
        return(
            <>
                {   this.state.taskList.map((el)=>{
                        return <Task  key ={el.id} id={el.id} done={el.done} name={el.name} delete={this.deleteTask}/>
                    })
                }  
            </>
        )
    }
}

export default Body