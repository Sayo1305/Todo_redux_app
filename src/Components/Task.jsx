import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AddTaskId,
  AddtaskList,
  AddTaskName,
} from "../store/Task";

const Task = () => {
  const dispatch = useDispatch();
  const taskid = useSelector((state) => state.Task.id);
  const task_Name = useSelector((state) => state.Task.task_Name);
  const activeness = useSelector((state) => state.Task.active);
  const handle_task = (e) => {
    dispatch(AddTaskName(e.target.value));
  };
  const handle_task_list = () => {
    dispatch(AddTaskId());
    const templist = [];
    templist.push({
      task_Name,
      taskid,
      activeness,
    });
      dispatch(AddtaskList(templist));
  };
  return (
    <Fragment>
      <div className="md:w-1/2 w-full mx-auto my-0 md:flex-row flex-col h-auto flex p-5 justify-center  gap-2 items-center">
        <input
          className=" w-5/6 rounded-lg outline-none border-2 border-black p-2 text-blue-700"
          type={"text"}
          placeholder="add details"
          value={task_Name}
          onChange={handle_task}
        ></input>
        <button
          className=" w-1/4 rounded-lg outline-none text-white p-2 bg-blue-500"
          onClick={handle_task_list}
        >
          Add
        </button>
      </div>
      
    </Fragment>
  );
};

export default Task;
