import React from "react";
import InputArea from "./InputArea";
import List from "./List"

function App() {
  const [item,addItem] = React.useState([]);
 
  function whenClicked(input){
    addItem(function (prevValue){
      return [...prevValue,input];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={whenClicked} />
      <div>
        <ul>
        {item.map(function (todoItem){
          return (<List 
          todo = {todoItem}/>)
        })}
        </ul>
      </div>
    </div>
  );
}

export default App;
