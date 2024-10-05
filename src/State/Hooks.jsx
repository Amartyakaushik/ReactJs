import React, { useState } from "react";
function Hooks(){
    // const returnValue = useState("Jolly");
    // console.log(returnValue);
    // const firstName = returnValue[0];
    // const setName = returnValue[1];

    //                    or
    const [firstName, setName] = useState("Charchil");

    function clickhandler(){
        if(firstName == "Charchil"){
            setName("Amartya");
        }else{
            setName("Charchil");
        }
    }

    return(
        <>
            <h2>First Name is {firstName}</h2>
            <button onClick={clickhandler}>Change Name</button>
        </>
    )
}

export default Hooks;