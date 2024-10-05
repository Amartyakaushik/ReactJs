import React from "react";
function DefaultProps({fullName = "Amartya Rajput", children}){
    return (
        <>
            <center>
                <div>
                    <h2> Hii {fullName} </h2>
                </div>
                {children}
            </center>
        </>
    )
}
export default DefaultProps;