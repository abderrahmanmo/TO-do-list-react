
import './App.css';
import Todolost from './Todolost';
import {React,useState}from "react"
import Todo from './Todo';

const App=()=> {
  let [todos,setTodos]=useState([])
  const addTodo= (todo) => {
      setTodos([todo,...todos]);
    };
    const handleDelete=(id)=>{
      setTodos(todos.filter((todo)=>todo.id !==id))
    }
    return(
      <div className="App">
        <Todolost  onSubmit={addTodo}/>
        {
          todos.map((todo)=>(
          <Todo todo={todo} onDelete={()=>handleDelete(todo.id)}/> 
          ))
        }

      </div>
    )
}
  
    
    


export default App;
