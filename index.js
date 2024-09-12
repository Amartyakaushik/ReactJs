import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './na'
// import Paragraph from './Paragraph';
// import {SecondPara} from './Paragraph';
// import {ThirdPara} from './Paragraph';
import Paragraph, * as data from './Paragraph';
import Heading from './heading';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Study from './react';
import Navigation from './navigation';
// import Greet from './Greet';

// react-fragment is used to overcome the drawback of creation of div under div section
// const myELement =<div> <h1>Heading 1</h1>  <p>This is paragraph tag</p></div>;

// const myELement = <><h1>Heading 1</h1>  <p>This is paragraph tag</p></>;

// const myELement2 =<React.Fragment>
//   <table border={2}>
//           <tr>
//             <th>Roll N</th>
//             <th>name</th>
//             <th>Branch</th>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>Amartya</td>
//             <td>Cse</td>
//           </tr>
//           <tr>
//             <td>2</td>
//             <td>Divyanshu</td>
//             <td>Cse</td>
//           </tr>
//           <tr>
//             <td>3</td>
//             <td>Shagun</td>
//             <td>Cse</td>
//           </tr>
          
//         </table>
// </React.Fragment>;

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));

// class LPU extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return (
//       <div>
//         <h1> Welcome to LPU {this.props.message}</h1>
//         <Study/>
//       </div>
//     )
//   }
// }
// root.render(<LPU  message = "Book Techgggggggggtechtech"/>);

class Greet extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          name: 'Amartya',
          Age: 19
      };
  }
  render(){
      return (<p> {this.props.name} {this.props.Age} </p>);
  }
}
root.render(<Greet/>);
root2.render(<Navigation />);
// root2.render(myELement2);

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(
  // <>
  // <Paragraph/>
  // <data.SecondPara/>
  // <data.ThirdPara/>
  // <Heading/>
  //   </>
  
  <React.StrictMode>
     <Paragraph/>
     <data.ThirdPara/>
    <data.SecondPara/>
    <Heading/>
  </React.StrictMode>
);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// root.render(myELement);
// const name = 'Divyanshu';
// ReactDOM.createRoot(document.getElementById("root")).render(<React.Fragment> <h1>HELLO {name}</h1>  <p>This is paragraph tag</p></React.Fragment>);



// ReactDOM.render(<div><h1>Heading 1</h1>  <p>This is paragraph tag</p></div>,
//   <div> document.getElementById("root")</div>
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
