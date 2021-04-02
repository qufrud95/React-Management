import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

/*
App.js -> body tag 에 해당  

내용 출력을 담당
*/
const customer ={

  'name':'차경준',
  'birthday':'961222',
  'gender':'남자',
  'job': '대학생'

}
class App extends Component{

  render(){

    return(
      <Customer 
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
      />

    );
  }
}

export default App;
