import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const App = (props)=>{
  const[counter, setCounter] = useState(0)

  let incrementCounter = () =>{
    setCounter(counter+1)
    console.log("counter",counter)
  }

  let colorStyle = {
    color:props['color'],
    fontSize:props['size']
  }

  return(
    <div style={colorStyle}>
      Learn: React Components, useState
      <br/>
      <button onClick={incrementCounter}>Click Me!!!</button>
      <br/>
      {counter}
    </div>
  );
}



export default App;



