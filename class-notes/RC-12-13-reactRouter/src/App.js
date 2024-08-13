import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Teacher from "./pages/Teacher";
import CourseCard from "./pages/CourseCard";
import ContactForm from "./pages/ContactForm";
import Paths from "./pages/Paths";
import TeacherDetails from "./pages/TeacherDetails";
import NotFound from "./pages/NotFound";




function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/teacher" element={<Teacher/>}/>
              <Route path="/teacher/:id" element={<TeacherDetails/>}/>

              //* Route'larda değişken tanımlayacaksak önüne süslü yerine  '  :  ' koyarız  */


          <Route path="/courses" element={<CourseCard/>}/>
          <Route path="/contact" element={<ContactForm/>}/>
          <Route path="/path" element={<Paths/>}/>
          <Route path="/*" element={<NotFound/>}/>

        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
