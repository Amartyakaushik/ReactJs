import React, { useState } from "react";
const UpdateStateUsingObject = () => {
  const [user, setUser] = useState({
    id: 1,
    fName: "Amartya",
    lName: "Kaushik",
    email: "kamartya58@gmail.com",
    age: 21,
  });

  const increaseAge = () => {
    // setUser((prevState) => {
    //     return {
    //         ...prevState, age : prevState.age + 1
    //     }
    // })
    setUser((prevState) => ({ ...prevState, age: prevState.age + 1 }));
  };

  // adding comment to push

  return (
    <>
      <center>
        <h2>User Data</h2>
        <p key={user.id}>Id: {user.id}</p>
        <p>fName: {user.fName}</p>
        <p>lName: {user.lName}</p>
        <p>email: {user.email}</p>
        <p>age: {user.age}</p>
        <button onClick={increaseAge}>Increase Age</button>
      </center>
    </>
  );
};

export default UpdateStateUsingObject;
