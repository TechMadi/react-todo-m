  import React,{useState} from 'react' ;



  const TodoList=()=>{
    
  const [inputTask,setInputTask]=useState("")
  const [list,setList]=useState([]);
  
  const handleInpuChange=(event)=>{
    setInputTask(event.target.value)
  }

  const handleAddTodo=(todo)=>{
     const newTask={
        id:Math.random(),
        todo:todo
     }
     
     setList([...list,newTask])
     setInputTask('') ;
  }

const handleDeleteTodo=(id)=>{
    const newList=list.filter((todo)=>todo.is!==id);
    setList(newList)
}



    return (
        <div  className='Todo'>
            <h1>My To-Do List</h1>
            <div  className='Top'>
             <input  className='input'  type='text' value={inputTask} onChange={handleInpuChange} placeholder='Enter a task'/>
           <button className='btn' onClick={()=>handleAddTodo(inputTask)} disabled={!inputTask}>ADD</button>
            </div>
            <ul>
                {list.map((todo)=>(
                    <li  className='task' key={todo.id}>
                        {todo.todo}
                        <button  onClick={()=>handleDeleteTodo(todo.id)}> Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
  }

  export default TodoList;
