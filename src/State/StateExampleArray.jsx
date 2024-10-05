import {useState} from "react";
const StateExampleArray = () => {
  const [fruits, setFruits] = useState(["Apple", "Mango"]);

  const addFruits = () =>{
    setFruits([...fruits,"Banana"]);
  }

  return (
    <>
        <ul>
            {fruits.map((fruit) => (
                <li >{fruit}</li>
            ))}
            <br/>
            <button onClick={addFruits}>Add Fruits</button>
        </ul>
    </>
  );
};
export default StateExampleArray;