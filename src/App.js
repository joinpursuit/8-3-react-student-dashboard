import React from "react";
import "./App.css";
import CohortDirectory from "./Components/CohortDirectory";
import StudentDirectory from "./Components/StudentDirectory";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentCohort: "default",
		};
	}
	render() {
		return (
			<section>
				<div className="header">
					<h1 className="title">Student Dashboard</h1>
				</div>
				<main>
					<CohortDirectory info={this.props.object} />
					<StudentDirectory info={this.props.object} />
				</main>
			</section>
		);
	}
}

export default App;
