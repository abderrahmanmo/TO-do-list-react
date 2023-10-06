import {React,useState}from "react"
import shortid from "shortid"


const Todolost = (props)=>{
const [text,setText]= useState(" ")
const handleSubmit=(e)=>{
    e.preventDefault()
    props.onSubmit({
        id:shortid.generate(),
        text:text,
        complete:false

    })
    setText("")
}


const handleChange=(e)=>{
    setText(e.target.value);
    
    
}

    return(
    <>
        <h1>TO DO LIST</h1>
        <hr></hr>
        <form onSubmit={handleSubmit}>
        <input style={{width:"98%",height:"20px",placeHolder:"Add your item  item...",margin:"5px"}} type="text" onChange={handleChange} value={text}></input>
        <button style={{display:"block",color:"white",backgroundColor:"#140c0c", borderRadius:"3px",margin:"5px"}}onClick={handleSubmit}>ADD</button>
        
        </form>
        
        
    
            
    
            
        
            
    

        
    </>
    );
}
export default Todolost