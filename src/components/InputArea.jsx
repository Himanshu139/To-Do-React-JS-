import React from "react";
export default function InputArea(props){
    const [input,setInput] = React.useState("");
    function handleChange(event){
        setInput(event.target.value);
      }
    return(
        <div className="form">
        <input onChange={handleChange} type="text" value={input}/>
        <button onClick= {function (){
            {props.onAdd(input)}
            setInput("");
        }} type="submit">
          <span>Add</span>
        </button>
      </div>
    );
}