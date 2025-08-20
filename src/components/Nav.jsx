import React from 'react'

const Nav = () => {
  return (
    <div className='bg-red-950 border-b-2 border-red-700 text-yellow-50 font-bold flex items-center justify-between px-3 text-3xl py-2'>
      <div>
        iTask
      </div>
      <div>
        <ul className='flex gap-3'>
            <li className='p-1 hover:text-red-400 text-base'><a href="https://github.com/Coder-Rahul-Y">Creator</a></li>
            {/* <li className='p-1 hover:text-red-400 text-base'>Your Tasks</li> */}
        </ul>
      </div>
    </div>
  )
}

export default Nav
