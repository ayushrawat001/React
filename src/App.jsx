import { useState,useRef, useEffect } from 'react'
import Navbar from './assets/components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const inputRef = useRef(null)
  // const [isDone, setIsDone] = useState(false)

  // function handleAdd() {
  //   const newTodoText = inputRef.current.value.trim();
  //   const newTodo = { id:uuidv4(), text : newTodoText }
  //   if(newTodo){
  //   setTodos([...todos,newTodo]);
  //   inputRef.current.value = "";
  //   }
  // }

  function handleAdd() {
    const newTodoText = inputRef.current.value.trim();
    if (!newTodoText) return;

    const newTodo = { id: uuidv4(), text: newTodoText ,isDone : false};
    setTodos(prevTodos => [...prevTodos, newTodo]);

    inputRef.current.value = "";
}
  

  const handleEdit = (id) =>{
   
  }

  const handleDelete = (id) =>{
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    
  }

  const handleChange = (id) => {
   
    setTodos(prevTodos =>
      prevTodos.map(todo =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
  );
    
  }


  return (
   <>
   <Navbar/>
  <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh]">
    
    <div className='addTodo my-5'>
      <h2 className='text-lg font-bold'>Add a Todo </h2>
      <input ref={inputRef} type="text" className='w-1/2 bg-white'/>
      <button onClick= {handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 font-bold text-white rounded-md mx-6 text-sm'>Add</button>
    </div>

    <h2 className='text-xl font-bold'>Your Todos</h2>
    {todos.map (item =>{
     
     return (
     <div key={item.id} className="todo flex my-2 justify-items-start ">
      <input name={item.id} type="checkbox"className='mx-2' onChange= {() => handleChange(item.id) }/>
      <div className={`text bg-amber-50 px-2 min-w-3/6 ${item.isDone ? "line-through" : ""}`}>{item.text}</div>
      <div className="buttons">
        <button onClick= { () => handleEdit(item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 font-bold text-white rounded-md mx-6 text-sm'>Edit</button>
        <button onClick= { () => handleDelete(item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 font-bold text-white text-sm rounded-md mx-1'>Delete</button>
      </div>
    </div>
    )
    })}
    
  </div>
   </>
  )
}

export default App
