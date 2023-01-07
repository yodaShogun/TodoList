import React from 'react'
import Header from '../Component/header'
import Footer  from '../Component/footer'
import Body from '../Component/body'

class Core extends React.Component{
    render(){
        return(
            <>
                <Header/>
                <Body/>
                <Footer/>
            </>
        )
    }
}

export default Core