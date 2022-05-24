import { Route, Routes } from "react-router-dom";

import Landing from "./Components/Pages/Landing/Landing";
import StudentDashboard from "./Components/Pages/StudentDashboard/StudentDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/studentDashboard" element={<StudentDashboard />} />
    </Routes>
  );
}

export default App;
