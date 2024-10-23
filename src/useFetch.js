// import React,{useState, useEffect} from "react";

// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try{
//                 const response = await fetch(url);
//                 if(!response.ok){
//                     throw new Error(`Error: ${response.statusText}`);
//                 }
//             }
//         }
//     })
// }


import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };  

        fetchData();
    }, [url]); // Re-run the effect if the URL changes

    return { data, loading, error };
};

export default useFetch;