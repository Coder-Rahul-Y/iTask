import React from 'react'
import clsx from 'clsx'

const Todo = (props) => {

  const classes = clsx(
    'flex flex-col md:flex-row justify-between p-2 bg-amber-600 w-11/12 mx-auto rounded-md border-2 border-amber-900 text-blue-950 md:text-2xl md:my-2',
    {
      'line-through text-gray-400 opacity-60': props.todo.isComplete,
      //     'ring-2 ring-amber-500': isEditing,
    }
  )

  return (
    <div className={classes}>
      <div>
        <input className='md:size-5 mx-3' onChange={() => props.onToggle(props.todo.id)} checked={props.todo.isComplete} type="checkbox" />
        {props.todo.task}
      </div>
      <div>
        <button onClick={()=>{props.handleEdit(props.todo.id)}} className='m-0.5 md:m-2 bg-amber-800 px-3 rounded-full text-amber-200 cursor-pointer hover:text-amber-400'>Edit</button>
        <button onClick={() => { props.handleDelete(props.todo.id) }} className='m-0.5 md:m-2 bg-amber-800 px-3 rounded-full text-amber-200 cursor-pointer hover:text-amber-400'>Delete</button>
      </div>  
    </div>
  )
}

export default Todo
