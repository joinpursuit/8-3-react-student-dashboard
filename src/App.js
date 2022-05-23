import { useState } from "react";
import SideNav from "./components/SideNav";
import StudentList from "./components/StudentList";
import data from "./data/data.json";

const App = () => {
  const [list, setList] = useState(data);
  const [cohortName, setTitle] = useState("All Students");

  return (
    <div className="App">
      <h1 className="title">
        <a href="./">Student Dashboard</a>
      </h1>
      <StudentList data={list} title={cohortName} />
      <SideNav data={data} setList={setList} setTitle={setTitle} />
    </div>
  );
};

export default App;
