import React from 'react'
import Task from './Task'
import DisplayTask from "./DisplayTask";
import { useSelector } from "react-redux";
const Active = () => {
  const tasklist = useSelector((state) => state.Task.tasklist);
  return (
    <div className='absolute w-full'>
      <Task/>
      <DisplayTask tasklist={tasklist} SelectCond = {true}/>
      <div className='w-full text-center font-semibold text-slate-500'>created by Sayo1305 - Devchallenge.io</div>
    </div>
  )
}

export default Active