import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./components/Landing";

import "./App.css";
import Appbar from "./components/Appbar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Allcourses from "./components/Allcourses";
import Purchased from "./components/Purchased";
import Course from "./components/Course";

function App() {
  return (
    <Router>
      <Appbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={"/signin"} element={<Signin />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path="/purchased" element={<Purchased />} />
        <Route path="/courses" element={<Allcourses />} />
        <Route path={"/course/:courseId"} element={<Course />} />
      </Routes>
    </Router>
  );
}

export default App;
