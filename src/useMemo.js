import { useMemo, useState } from "react";
// import React{useMemo,useState} from "react";
const ExpensiveComponent= ({number}) => {
    const calculateFactorial = (n) =>{
        if(n <= 0) return 1;
        return n * calculateFactorial(n-1);
    };

    const factorial = useMemo(() => calculateFactorial(number),[number]);

    return(
        <div>
            <h1>
                Factorial of {number} is {factorial}
            </h1>
        </div>
    );
};


export default ExpensiveComponent;