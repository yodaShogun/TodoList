import React from 'react'

class Task extends React.Component{

    taskStyle = {
        display:'flex',
        justifyContent:"space-between"
    }

    state = {
        done: this.props.done
    }

    handleOne = ()=>{
        const newState = {
            ...this.state, done:!this.state.done
        }
        this.setState(newState)
    }

    render(){
        return(
            <div style={this.taskStyle}>
                <div>
                    <input type="checkbox" onChange={this.handleOne} checked={this.state.done}/>
                    <span>{this.props.name}</span>
                </div>
                <div>
                    <button onClick={this.handleOne}>Done</button>
                    <button onClick={()=>{this.props.delete(this.props.id)}}>Remove</button>
                </div>
            </div>
        )
    }
} 

export default Task