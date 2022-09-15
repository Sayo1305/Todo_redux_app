import React from 'react'
import DisplayTask from "./DisplayTask";
import { useSelector  } from "react-redux";
const Complete = () => {
  const tasklist = useSelector((state) => state.Task.tasklist);
  return (
    <div className='absolute w-full'>
      <DisplayTask tasklist={tasklist} SelectCond = {false} Edit = {true}/>
      <div className='w-full text-center font-semibold text-slate-500'>created by Sayo1305 - Devchallenge.io</div>
    </div>
  )
}

export default Complete