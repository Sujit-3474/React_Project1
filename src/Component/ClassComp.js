import React from "react";
class Classbox extends React.Component{
render(){
    return(
        <div className="Box2">
        <h1>This is created using Class Component</h1>
        <div className="div"> This is done using external css</div>
        <div style={{color:"blue",fontSize:"18px",fontHeight:"bold"}}>This is done using Internal css</div>
        </div>
    )
}
}
export default Classbox;