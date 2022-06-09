import React from "react";
import "./App.css";
import CohortDirectory, { dateFormatter } from "./Components/CohortDirectory";
import StudentDirectory from "./Components/StudentDirectory";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentCohort: "All Students",
		};
	}
	changeCohort = (cohort) => {
		this.setState({ currentCohort: cohort });
	};
	render() {
		return (
			<section>
				<header className="header">
					<h1 className="title">The Student Dashboard!</h1>
				</header>
				<main>
					<CohortDirectory info={this.props.object} clicker={this.changeCohort} />
					<StudentDirectory
						info={
							this.state.currentCohort !== "All Students"
								? this.props.object.filter(
										(each) =>
											dateFormatter(each.cohort.cohortCode) ===
											this.state.currentCohort
								  )
								: this.props.object
						}
						cohort={this.state.currentCohort}
					/>
				</main>
			</section>
		);
	}
}

export default App;
