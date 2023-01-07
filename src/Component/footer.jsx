import React from 'react'

class Footer extends React.Component{

    titleStyle = {
        textAlign:'center'
    }

    render(){
        return(
            <div style={this.titleStyle}>
                &copy;CopyRight-2023
            </div>
        )
    }
}

export default Footer