import React, {useState} from 'react';

function WithoutUseeffect(){
    const [num, setNum] = useState(0);

    

    const handleClick = () => {
        setNum(num + 1);
        alert("clicked");
    };
    return(
        <center>
            <br/>
        <button onClick={handleClick}>
            Click me! {num}
        </button>
            <br/>
        </center>
    );
}

export default WithoutUseeffect;