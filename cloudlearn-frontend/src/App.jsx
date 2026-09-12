import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />

        <Route
          path="/courses/:id"
          element={<CourseDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;