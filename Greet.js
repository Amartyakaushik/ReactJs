import { render } from "@testing-library/react";
import React from "react";
class Greet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Amartya',
            Age: 19
        };
    }
    render(){
        return <p> {this.props.name} {this.props.Age} </p>
    }
}

export default Greet;