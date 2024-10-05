import React from "react";
// const UserData =(props) => {
const UserData =(props) => {
    return(
        <div>   
            <p>FirstName: {props.fName}</p>     
            <p>LastName: {props.lName}</p>     
            <p>Age: {props.age}</p>
            <button onClick={() => {
                props.increaseAge(props.id);
            }}>
                Increase Age</button>     
        </div>
    );
}
export default UserData;