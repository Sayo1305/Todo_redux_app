import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import All from "./Components/All";
import Active from "./Components/Active";
import Complete from "./Components/Complete";
function App() {
  return (
    <Fragment>
    <div className="font-bold  w-full text-center p-5 text-5xl">#Todo</div>
    <Navbar/>
    <Routes>
      <Route  path="" element={<All/>}/>
      <Route  path="/" element={<All/>}/>
      <Route  path="/active" element={<Active/>}/>
      <Route  path="/complete" element={<Complete/>}/>
    </Routes>
    </Fragment>  
  );
}

export default App;
