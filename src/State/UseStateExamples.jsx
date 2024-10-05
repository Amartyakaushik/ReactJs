import React from "react";
import UserData from "../components/UserData";
// const useStateExm = (props) => {
const UseStateExm = (props) => {
    return(
        <>
            <div>
            {props.users.map((user) => (
                <UserData {...user} key={user.id} increaseAge= {props.increaseAge}  />
            )
            )}
            </div>
        </>
    )
}
export default UseStateExm;