import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { ChangeActive, DeleteTask } from "../store/Task";
const DisplayTask = ({ tasklist, SelectCond , Edit }) => {
  const dipatch = useDispatch();
  const handle_delete = (id)=>{
    dipatch(DeleteTask(id));
    // console.log(tasklist);
  }
  const handle_check = (id) => {
    dipatch(ChangeActive(id));
  };
  return (
    <div className="w-full md:w-1/2 mx-auto my-0 h-80  p-5 flex flex-col gap-5  ">
      {tasklist.length !== 0 ? (
          <div>
          {tasklist.map((val, idx) =>
            val.map((mp, jdx) =>
              (SelectCond === "ALL" || mp.activeness === SelectCond) ? (
                <Fragment key={idx}>
                  <div className={ Edit === true ? (`w-full justify-evenly flex gap-5 h-auto rounded-lg p-3`) : (`w-full flex gap-5 h-auto rounded-lg p-3`)}>
                    <div>
                      {
                        mp.activeness === false ? (
                          <input
                          checked
                          onChange={e => {}}
                        type={"checkbox"}
                        onClick={() => {
                          handle_check(mp.taskid);
                        }}
                      ></input>
                        ):
                        (
                          <input
                          onChange={e => {}}
                        type={"checkbox"}
                        onClick={() => {
                          handle_check(mp.taskid);
                        }}
                      ></input>
                        )
                      }
                    </div>
                    <div>
                      {mp.activeness === false ? (
                        <div className="text-red-500">
                          <del>{mp.task_Name}</del>{" "}
                        </div>
                      ) : (
                        <div className="text-blue-500">{mp.task_Name}</div>
                      )}
                    </div>
                    {
                      Edit === true ?(
                        <button onClick={()=>{handle_delete(mp.taskid)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                      </svg></button>
                      ):
                      (
                        null
                      )
                    }
                  </div>
                </Fragment>
              ) : null
            )
          )}
          </div>
        ):
        (
          null
        )
      }
    </div>
  );
};

export default DisplayTask;
