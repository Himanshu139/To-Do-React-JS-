import React from "react";

export default function List(props){
  const [isClicked,setIsClicked] = React.useState(false);
  function handleClick(){
    // setIsClicked(true);
    // above statement won't work as we wanted to as what's happening is that it's working perfectly only for the first item added in the list after that all the items are being added with line-through decoration, because the value gets stuck on true and is not reseting back to default,i.e. "false". 
    setIsClicked(function (prevValue){
      return (!prevValue);
    // above line worked like we wanted it to, when we used the "prop" method and made a separate componet for list items.
    })
}
    return(
        <li onClick={handleClick} style = {{textDecoration: isClicked ? "line-through" : "none" }}>{props.todo}</li>
    );

}