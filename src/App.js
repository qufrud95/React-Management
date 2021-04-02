import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

/*
App.js -> body tag 에 해당  

내용 출력을 담당
*/

class App extends Component{

  render(){

    return(
      <div className = "gray-background">
        <img src={logo} lat ='logo'/>
        <h2>Let's develop managment system</h2>

      </div>


    );
  }


}

export default App;
