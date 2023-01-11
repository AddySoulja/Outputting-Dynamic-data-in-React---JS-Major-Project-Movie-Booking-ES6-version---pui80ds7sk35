import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
//code here
const [inputValue, setInputValue] = useState("");
const [value, setValue] = useState("");
const getInputValue = () => {
  setValue(inputValue)
}
  return (
    <div id="main">
      <input id='input' onChange={(e) => setInputValue(e.target.value)}></input>
      <button id='button' onClick={getInputValue}>Click</button>
      <p id='text'> Hello my name is {value === "" ? "____" : value} and I study at Newton School</p>
    </div>
  )
}


export default App;
