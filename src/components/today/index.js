import React, { Component } from 'react';

import './style.css';

class Today extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return (
            <div>
                <i className="weather fa fa-cloud fa-6x" style={{color: "#254e8c"}}/> 
                <p>{this.props.location}</ p>
                <p>{`${this.props.temperatura} °`}</ p>                
            </ div>
        )
    }

}

export default Today;