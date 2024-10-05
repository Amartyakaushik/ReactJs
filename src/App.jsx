import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import UseStateExm from './State/useStateExamples'

function App() {
  // const [count, setCount] = useState(0)
  
const [users, setUsers] = useState([
  {id:1, fName: 'Amartya', lName: 'Kaushik', age:20},
  {id:2, fName: 'Charchil', lName: 'Raj', age:21},
  {id:3, fName: 'Himanshu', lName: 'choudhary', age:22}
]);

const increaseAge = (id) =>{
  setUsers((prevState) => {
    return (prevState).map((user) => {
      if(user.id === id){
        return {...user, age:user.age +1}
      }else{
        return user;
      }
    });
  });

};
  return (<UseStateExm users = {users} increaseAge = {increaseAge}/>
  )
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    

}

export default App
