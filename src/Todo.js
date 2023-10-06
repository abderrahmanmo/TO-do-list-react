import React from "react";



const Todo=(props) =>{
    return(
        <div >
        
            <div style={{display:"flex",backgroundColor:"green",margin:"5px",justifyContent:"flexEnd"}}>
            {props.todo.text}
            
            <button style={{borderRadius:"7px",padding:"5px",marginLeft:"1050px",}}onClick={props.onDelete}>Delate </button>
            
            <button style={{borderRadius:"7px",padding:"5px"}}>Edit </button>
        
        </div>

        </div>
        

        

    )
}
export default Todo