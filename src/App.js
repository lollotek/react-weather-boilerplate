import React, { Component } from 'react';
import Today from './components/today'
import Prev from './components/today'

import './App.css';

class App extends Component {

  componentDidMount(){
    
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Milan,it&appid=24329cf1f1e78c3570bd422f1c6de095')  
      .then(  
        function(response) {  
          if (response.status !== 200) {  
            console.log('Looks like there was a problem. Status Code: ' +  
              response.status);  
            return;  
          }
            console.log(response);  

          // Examine the text in the response  
          response.json().then(function(data) {  
            console.log(data);  
          });  
        }  
      )  
      .catch(function(err) {  
        console.log('Fetch Error :-S', err);  
      });
  }


  render() {
    return (
      <div className="App">
        <Today location='Milano' temperatura='20' tempo='cloud'/>
        <Prev temperatura='22' tempo='sun'/>
        <Prev temperatura='10' tempo='rain'/>
        <Prev temperatura='30' tempo='cloud'/>        
      </div>
    );
  }
}

export default App;
