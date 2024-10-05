import React from "react";
function RenderList({id,name, age}){
    return(
        <>
            <center>
            <h3> {`${name} of age ${age} with id: ${id} `} 
            </h3>
            </center>
        </>
    )
}
export default RenderList;