import React from "react";
class Study extends React.Component{
    // To handle properties we use -> "props"
    // Act as a function argument and used as attribute to component...

    constructor(props) {
    super(props); // Calls the parent class constructor
    this.state = {
        // this is class component -> properties should be kept in object -> "color"
        color : "web technology",
        message: "Welcome to the study session!" // Optional: initializing state
    };
    
    // return message;
}
    render()
    {
        return <p> <h2>Lets study class Component</h2> {this.props.color} {this.props.message}</p>;
    }
}
export default Study;