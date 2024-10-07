// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React, { useState }  from 'react'
import ReactDom from 'react-dom/client';
// import MyProp from './components/props';
// import DefaultProps from './components/defaultProps';
// import User from './components/User';
// import Event from './components/Events';
// // CA
// import TeamData from './components/TeamData';
// import CityDataComponent from './components/CityDataComponent';

// import Portfolio from './CA/Portfolio';
// import Destructure from './CA/destructure';

// state
import Hooks from './State/Hooks.jsx';
import Counter from './State/CounterApp.jsx';
import StateExampleArray from './State/StateExampleArray.jsx';
import UpdateStateUsingObject from './State/UpdateStateUsingObject.jsx';

// UseState examples   05 oct
import UseStateExm from './State/useStateExamples.jsx';

// function HelloWorld(){
//   const list = [
//     {name: 'John', age: 21, id: 1},
//     {name: 'Himmu', age: 25, id: 2},
//     {name: 'Maahi', age: 24, id: 3}
//   ]
  // const users = {hobby: "bike", age: "21"}
  // return (
  //   <>
  //   </>
  //   );
  // }
  // <MyProp fName="Amartya" lName="Kaushik" userInfo={users} />

  // <DefaultProps /> { /* here some default value has been assigned to the fullName property in defaultProps components...*/ }

  // <DefaultProps fullName='Charchil Raj' />

  // {/* this is children prop */}
  // <DefaultProps fullName='Suraj kumar'>
  //   <p> Hello Suraj</p>
  // </DefaultProps>

  // {/* this is Rendering the whole list */}

  // {/* {list.map( (list) => {
  //   return (
  //     <User name= {list.name} age = {list.age} key={list.id}/>
  //   )
  // } )} */}

  // {list.map( (list) => <User {...list} key={list.id}/>)}


  //   <CityDataComponent />
  //   <TeamData/>

// function exm(e){
//   console.log("This event handler is for components");
//   console.log(e.target);
//   // console.log(e.target.value);
// }

// // State example    05- oct
// const [users, setUsers] = useState([
//   {id:1, fName: 'Amartya', lName: 'Kaushik', age:20},
//   {id:2, fName: 'Charchil', lName: 'Raj', age:21},
//   {id:3, fName: 'Himanshu', lName: 'choudhary', age:22}
// ]);
// <UseStateExm users = {users}/>

ReactDom.createRoot(document.getElementById('root')).render(
  <>

  {/* <Portfolio/>
  <Destructure /> */}
  <Hooks />
  <Counter/>
  <StateExampleArray/>
  <UpdateStateUsingObject/>
  <App />
  </>

  // {/* <HelloWorld/>
  // <Event handleTheClick={exm}/> */}
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
