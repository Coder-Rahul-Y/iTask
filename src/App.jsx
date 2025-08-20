import { useState, useEffect } from 'react'
import Nav from "./components/Nav"
import Todo from "./components/Todo"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState(()=>{
    let saved = localStorage.getItem("todos")
    return saved? JSON.parse(saved) : [{ id: uuidv4(), task: "This is a sample Task", isComplete: false }]}
  )

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  const [task, setTask] = useState("")
  const [show, setShow] = useState(true)


  function handleAdd() {
    if(task=="") return;

    let newTodo = {
      id: uuidv4(),
      task:task,
      isComplete:false
    }
    setTask("")
    setTodos(prev=>{return [newTodo, ...prev]})
  }

  function onToggle(id) {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id == id) return { ...item, isComplete: !item.isComplete };
        return item;
      })
    });
  }

  function handleDelete(id) {
    setTodos((prev) => {
      return prev.filter((item) => {
        return item.id != id;
      })
    })
  }

  function handleEdit(id) {
    setTodos((prev) => {
      return prev.filter((item) => {
        if (item.id == id) {
          setTask(item.task)
        }
        return item.id != id;
      })
    })
  }

  function handleKeydown(e) {
    if(e.key==="Enter") handleAdd();
  }

  return (
    <>
      <Nav />
      <div className='todos bg-gray-900 h-[85vh] flex flex-col gap-2 text-amber-900 max-w-[98%] lg:w-[60vw] m-auto items-center  py-3 md:py-5 md:my-5 rounded-lg'>
        <div className='w-11/12 bg-amber-500 flex flex-col gap-2 items-center rounded-xl'>
          <div className='w-11/12 text-center md:text-4xl ontbol font-bold'>iTask: Manage All Tasks in One Place</div>
          <input className='w-11/12 h-10 rounded-md bg-amber-100 px-5' type="text" placeholder='Type new task' value={task} onChange={e=>setTask(e.target.value)} onKeyDown={handleKeydown}/>
          <button onClick={handleAdd} className='w-1/4 md:w-11/12 md:h-10 rounded-md bg-amber-100 font-bold md:text-xl cursor-pointer hover:opacity-60'>Add</button>
          <label htmlFor="show completed"><input type="checkbox" id="show completed" checked={show} onChange={e=>setShow(!show)}/>Show Completed Tasks</label>
        </div>
        <div className='todos flex flex-col gap-2 w-full scroll-thin overflow-y-scroll h-full'>
        {todos.map((item) => {
          return (show || !item.isComplete) && <Todo key={item.id} todo={item} onToggle={onToggle} handleDelete={handleDelete} handleEdit={handleEdit} />
        }
      )}
      </div>

      </div>


    </>
  )
}

export default App
