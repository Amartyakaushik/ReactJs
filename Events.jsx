import React from "react";
function Event({handleTheClick}){
    function handleClick(e){
        console.log(e);
        e.target.textContent = "Already Clicked";
        console.log("First clickHandle event");
    }

    function handleClick2(fName, lName){
        console.log(fName,lName);
    }

    // wrapper class for using in the onClick even handler as it cannot use function with () parantheses 
    function wrapperFunction(e){
        console.log(e.target);
        handleClick2("Amartya", "Rajput");
    }
    return(
        <>
            <button onClick={handleClick}>Click Me!</button>
            <br/>
            <br/>
            <button onClick={wrapperFunction} >Click for Amartya </button>
            <br/>
            <br/>
            <button onClick={() => {
                handleClick2("Charchil", "Raj");
            }}>Click me na!!</button>

            <h1 className="greet-me" onClick={handleTheClick}>
                Hello Birathar!!
            </h1>

        </>
    )
}
export default Event;