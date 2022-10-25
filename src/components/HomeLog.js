import React from 'react'
import { useHistory } from "react-router-dom";
import "../App.css";

export default function HomeLog() {
	const history = useHistory();

	const coursesPage = () => {
		history.push("/courses")
	}
	return (
		<>

			<div className="jumbotron text-center">
				<h1 className="headlineClass">Linear (Imparo Technologies)</h1>
				<p className="headlineClass">
					It is a simple dummy web application to simulate quiz-based activities.
					It contains dummy mulitple choice questions.
				</p>

				<hr className="my-4" />
				<p>
					
				</p>

				<p className="lead">
					<button className="button-hc"
						onClick={coursesPage}>Explore Quizzes
					</button>
				</p>

			</div>
		</>
	)
}


