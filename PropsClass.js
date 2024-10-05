import React, {component} from 'react';

class Greet extends component{
    render(){
        return(
            <>
               <h3> Welcome {this.props.name} a.k.a {this.props.heroName} </h3>
            </>
        );
    }
}
export default Greet;