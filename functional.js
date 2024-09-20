import React from "react";
function Func(){
    return(
        <div>
            <h2> This is Functional component</h2>
        </div>
    )
}
export default Func;

// {/* <h3>This is second functional component</h3> */}
export const Func2 = () => {
    return(
        // <>
            <h3>This is second functional component</h3>
        // </>
    );
}
// export default func2;