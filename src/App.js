import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/home";
import LoginStudent from "./pages/logins/LoginStudent";
import HomeStudent from "./pages/home/homeStudent";
import HomeTeacher from "./pages/home/homeTeacher";
import LoginTeacher from "./pages/logins/LoginTeacher";
import LoginAdmin from "./pages/logins/LoginAdmin";
import HomeAdmin from "./pages/home/homeAdmin";
import Evaluation from "./pages/evaluation";
import TeacherBoardScore from "./pages/boardScore";
import StudentsInCourse from "./pages/Teacher/ListStudent";
import BoardDetail from "./pages/details/boarddetails";
import CourseDetails from "./pages/details/coursedetails";
import ProjectDetails from "./pages/details/ProjectDetails";
import SubjectDetails from "./pages/details/subjectDetails";
import User from "./pages/users/user";
import TemplateDetail from "./pages/details/templateDetails";

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={2000} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginstudent" element={<LoginStudent />} />
          <Route path="/loginteacher" element={<LoginTeacher />} />
          <Route path="/loginadmin" element={<LoginAdmin />} />
          <Route path="/student" element={<HomeStudent />} />
          <Route path="/teacher" element={<HomeTeacher />} />
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/evaluation/:nameboard" element={<Evaluation />} />
          <Route
            path="/teacherboardscore/:marked"
            element={<TeacherBoardScore />}
          />
          <Route path="/boarddetails/:board" element={<BoardDetail />} />
          <Route path="/coursedetails/:course" element={<CourseDetails />} />
          <Route
            path="/projectdetails/:course/:project"
            element={<ProjectDetails />}
          />
          <Route path="/subjectdetails/:subject" element={<SubjectDetails />} />
          <Route path="/studentsInCourse" element={<StudentsInCourse />} />
          <Route path="/user" element={<User />} />
          <Route path="/templatedetails/:id" element={<TemplateDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
