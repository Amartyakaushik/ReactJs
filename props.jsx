import React from "react";
function MyProp({fName, lName, userInfo}){
    return <>
    <center>
        <h1> {fName} {lName} loves {userInfo.hobby} </h1>
        </center>
    </>
}
export default MyProp;