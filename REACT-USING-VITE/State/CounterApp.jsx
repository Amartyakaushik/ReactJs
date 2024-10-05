import React, { useState } from "react";
const Counter = () => {
    let [count, setCount] = useState(0);

    const increaseCounter = () => {
        setCount(count += 1);
    }
    const decreaseCounter = () =>setCount(count--);

    const resetCounter = () => setCount(0);

    // call state using call Back function
    const increaseByTwo = () => {
        setCount((prevState) => prevState +2);
    }
    const decreaseByTwo = () => {
        setCount((prevState) => prevState - 2);
    }

    return(
        <>
            <h2> {count} </h2>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
            <button onClick={resetCounter}>Reset</button>
            <button onClick={increaseByTwo}>Increase By 2</button>
            <button onClick={decreaseByTwo}>Decrease By 2</button>
        </>
    )
}
export default Counter;