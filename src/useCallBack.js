import React,{useState,useCallback} from "react";

const CounterButton = React.memo(({
    onIncreament
}) => {
    console.log("CounterButton Rendered");

    return(
        <>
            <button onClick={onIncreament}>Increament </button> 
        </>
    );
});

const CounterApp = () => {
    const [count, setCount] = useState(0);

    // const incrementCount =useCallback(() => {
    //     setCount((prevCount)=>{
    //         prevCount + 1);
    // },[]);

    const incrementCount = useCallback(()  => {
        setCount((prevCount) => prevCount +1);
    },[]);

    return (
        <>
            <div>
                <h1>Count: {count}</h1>
                <CounterButton onIncreament = {incrementCount}/>
            </div>
        </>
    );
    };

    const app = () => {
        return (
            <div>
                <h1>
                    useCallback Exampleeeee
                </h1>
                <CounterApp/>

                <p>endddddddddddddddd</p>
            </div>
        )
    }
// }
export default app;