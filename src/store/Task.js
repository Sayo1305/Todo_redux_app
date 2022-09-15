import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      tasklist : [],
      active : true,
      id: 0,
      task_Name : "New Task is very good",
}

const Task = createSlice({
  name: 'Task',
  initialState,
  reducers: {
      AddTaskName : (state , action)=>{
            state.task_Name = action.payload;
      },
      AddTaskId : (state)=>{
            state.id += 1;
      },
      AddtaskList : (state, action) =>{
            state.tasklist.push(action.payload);
      },
      ChangeActive: (state , action) =>{
            const id = action.payload;
            state.tasklist.map(mp=>{
                  mp.map(val=>{
                        if(val.taskid === id)
                        {
                              val.activeness = (!val.activeness);
                        }
                  })
            })
      },
      DeleteTask : (state , action) =>{
            const id = action.payload;
            state.tasklist.map((element)=> {
                  element.map((value)=>{
                    if(value.taskid === id)
                    {
                      element.pop();
                    }
                  })
            })
      },
      DeleteAllTask : (state) =>{
            state.tasklist.splice(0 , state.tasklist.length);
      }
  }
});

export const {AddTaskName , AddtaskList ,AddTaskId , ChangeActive , DeleteTask ,DeleteAllTask} = Task.actions

export default Task.reducer