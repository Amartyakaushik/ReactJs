import React from "react";
const Greet = (props) => {  // Can use any other identifier instead of "props"
    return (<>
    <center>
        <h3>Welcome {props.name} a.k.a {props.heroName}  🙏</h3>
        {props.children}
        </center>
    </>
    )
}

export default Greet;