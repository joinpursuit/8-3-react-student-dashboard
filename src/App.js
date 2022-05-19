function App() {
  return (
    <div>
      <header className="header">
        <h1>Student Dashboard</h1>
      </header>
      <div>
        <CohortList />
        <StudentList />
      </div>
    </div>
  );
}

export default App;
