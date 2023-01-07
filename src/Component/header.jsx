import React from 'react'

class Header extends React.Component{
    titleStyle = {
        textAlign:'center'
    }

    render(){
        return(
            <>
                <h1 style={this.titleStyle}>2k23 Goals</h1>
            </>
        )
    }
}

export default Header