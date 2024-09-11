import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import activity3 from './activity03';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const myELement = <>

<center >
<table border={5} style={{'margin' : 40}}>
            <tr>
                <td>Company</td>
                <td>Contact</td>
                <td>kuch vi</td>
                <td>Company</td>
                <td>Contact</td>
                <td>kuch vi</td>
            </tr>
            <tr>
                <td>Google</td>
                <td>+13 2345654345</td>
                <td>kuch vi</td>
                <td>Google</td>
                <td>+13 2345654345</td>
                <td>kuch vi</td>
            </tr>
        </table>,
        <p> <h2>This is activity03</h2> \n This Dial widget example shows the following:

A demonstration of a large value range combined with fine increment control.
Setting UI strings before rendering
Setting configuration attributes
Construction-time event subscription allowing Dial to control an interactive UI
Calling one of Dial's value change methods from the click of a link. <a>Hubble</a>
Notice the Dial can traverse the entire 6,000+ pixels of the scene height, but by pulling the handle farther away from the Dial's center while rotating, the user can get 1 pixel movements, without strain. After the dial has focus, the following keys also opperate the Dial, arrow up/down/left/right, page up/down, home, end. The action of these keys can be controlled via Dial's configuration attributes. </p>
        </center>
</>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myELement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
