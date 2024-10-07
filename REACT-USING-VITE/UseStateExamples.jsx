import React from "react";
import UserData from "../components/UserData";
// const useStateExm = (props) => {
const UseStateExm = (props) => {
    return(
        <>
            <div>
            {props.users.map((user) => (
                <UserData {...user} key={user.id} increaseTheAge= {props.increaseThisAge}  decreaseTheAge = {props.decreaseThisAge} deleteTheUser = {props.deleteThisUser} />
            )
            )}
            </div>
        </>
    )
}
export default UseStateExm;