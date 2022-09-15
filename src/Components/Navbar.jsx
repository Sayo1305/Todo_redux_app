import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Fragment>
      <div className="w-full flex justify-evenly">
        <Link className="text-xl p-3 focus:border-b-4 border-blue-300 rounded-md" to={"/"}>
          All
        </Link>
        <Link className="text-xl p-3 focus:border-b-4 border-blue-300 rounded-md" to={"/active"}>
          Active
        </Link>
        <Link className="text-xl p-3 focus:border-b-4 border-blue-300 rounded-md" to={"/complete"}>
          Complete
        </Link>
      </div>
      <div className="w-5/6 mx-auto my-0 h-0.5 bg-slate-600"></div>
    </Fragment>
  );
};

export default Navbar;
