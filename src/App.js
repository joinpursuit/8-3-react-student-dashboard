import { useState } from "react";
import SideNav from "./components/SideNav";
import StudentList from "./components/StudentList";
import data from "./data/data.json";

const App = () => {
  const [list, setList] = useState(data);
  const [cohortName, setTitle] = useState("All Students");
};

export default App;
