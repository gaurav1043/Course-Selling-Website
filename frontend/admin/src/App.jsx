import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Appbar from "./components/Appbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Landing from "./components/Landing";
import AddCourse from "./components/AddCourse";
import Courses from "./components/Courses";
import Course from "./components/Course";

function App() {
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}
    >
      <Router>
        <Appbar />
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"/addcourse"} element={<AddCourse />} />
          <Route path={"/courses"} element={<Courses />} />
          <Route path={"/signin"} element={<Signin />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/course/:courseId"} element={<Course />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
