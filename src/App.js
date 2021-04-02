import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

/*
App.js -> body tag 에 해당  

내용 출력을 담당
*/
const customers =[
{
  'id':1,
  'image': 'http://placeimg.com/64/64/1', //랜덤이미지
  'name':'차경준',
  'birthday':'961222',
  'gender':'남자',
  'job': '대학생'
},
{
  'id':2,
  'image': 'http://placeimg.com/64/64/2', //랜덤이미지
  'name':'이순신',
  'birthday':'961222',
  'gender':'남자',
  'job': '대학생'
},
{
  'id':3,
  'image': 'http://placeimg.com/64/64/3', //랜덤이미지
  'name':'홍길동',
  'birthday':'961222',
  'gender':'남자',
  'job': '대학생'
}

]
class App extends Component{

  render(){

    return(
      <div>
        {
          customers.map(c =>{
            return(
              <Customer
                key ={c.id} // props 
                id = {c.id}
                image = {c.image}
                name = {c.name}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}
              />
            );
          })
        }
      </div>

    );
  }
}

export default App;
