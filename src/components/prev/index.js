import React, { Component } from 'react';

import './style.css';

class Prev extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return (
            <div>
                <i className="weather fa fa-sun fa-4x" style={{color: "#254e8c"}}/> 
                <p>{`${this.props.temperatura} °`}</ p>                
            </ div>
        )
    }
}

export default Prev;