import { useState } from "react";
function form(){
    const [userName, setUserName] = useState(" ");
    const [userPassword, setUserPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName);
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">UserName: </label>
                    <input type="text"  id="userName" onChange={(e) =>{
                        console.log(e.target.value);
                        setUserName(e.target.value);
                    }} value={userName} />
                </div>

                <div>
                    data: {userName}
                </div>
                <div>
                    <label htmlFor="userPassword">Password: </label>
                    <input type="password"  id="userPassword" onChange={(e) =>{
                        setUserPassword(e.target.value);
                    }} value={userPassword} />
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default form;