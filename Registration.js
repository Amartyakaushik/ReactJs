import React,{useState} from 'react';

function Registration(){
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}, Age: ${age} `);
    };

    return(
        <>
        <center>
        <form onSubmit={handleSubmit}>
            <label>Enter Name:
                <input type='text' onChange={ (e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <label>
                Enter Age:
                <input type='number' onChange={ (e) => setAge(e.target.value)}
                />
            </label>

            <br/>

            <button type='submit'>
                Submit
            </button>
        </form>
        </center>
        </>
    );
}

export default Registration;