import React from "react";
import Start from "./Start";

function App() {
  const inputRef=React.useRef() 
  const [name, setName]=React.useState("")


  const handleClick=()=>{
    setName(inputRef.current.value)
    console.log(inputRef.current.value)
  }

  return (
    <div>
      <Start name={name}></Start>
      <input ref={inputRef} placeholder="내 이름"></input>//매핑
      <button onClick={handleClick}>시작하기</button>
      
      
     
    </div>
  );
}

export default App;
