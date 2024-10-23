import React, {useState} from 'react';

function useEffect(){
    const [num, setNum] = useState(0);

    useEffect( () => {
    if(num > 0){
        alert("clicked");
    }
    });

    const handleClick = () => {
        setNum(num + 1);
    };
    return(
        <center>
            <h3>With useEffect</h3>
            <br/>
        <button onClick={handleClick}>
            Click me! {num}
        </button>
            <br/>
        </center>
    );
}

export default useEffect;

