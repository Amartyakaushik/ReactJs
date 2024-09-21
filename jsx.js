import React from "react";
export const Withjsx = () => {
    return(
        <div className="DummyClass">
            <h2>
                This is component with the help of jsx...
            </h2>
        </div>
    )
}

const Withoutjsx = () => {
    return React.createElement("div",{id:"class02"}, React.createElement("h2", null, "Component without jsx...") )
}

export default Withoutjsx;