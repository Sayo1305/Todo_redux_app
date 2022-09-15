import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, setval } from '../store/Counter';
const Counter = () => {
      const counter = useSelector(state => state.second.value);
      const add_space = useSelector(state => state.second.add);
      const dispatch = useDispatch();
      const handle_change = (e)=>{
            dispatch(setval(e.target.value));
            console.log(e.target.value);
      }
  return (
    <div className='flex gap-5 w-full  justify-center p-5'>
      <button onClick={()=>(dispatch(increment(10)))} className='py-1 px-3 text-center text-white bg-green-500 rounded-lg'>+</button>
      <div>{counter}</div>
      <div>{add_space === true ? "okk" : "No"}</div>
      <input type="text" className='border-2 rounded-lg outline-none p-2' value={counter} onChange={handle_change} placeholder = "enter the value"/>
      <button onClick={()=>(dispatch(decrement(10)))} className='py-1 px-3 text-center text-white bg-red-500 rounded-lg'>-</button>
    </div>
  )
}

export default Counter