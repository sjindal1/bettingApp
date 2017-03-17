import React from 'react';
import Header from '../components/header'

class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){        
            return(
                <div>
                    <Header/> 
                    {this.props.children}                
                </div>
            )
        }
}

export default Layout;