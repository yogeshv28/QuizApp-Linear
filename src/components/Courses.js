import React from 'react'
import "../App.css";
import { useHistory } from "react-router-dom";

function Courses() {
	const history = useHistory();
	const home = () => {
		history.push("/");
	}

    const dayOne = () => {
		history.push("/dayone");
	}

	return (
		<>
			<div className="card-course " >
				<h1 className="headlineClass">Courses List</h1>
				<ol >
					
					<li className="course-id"> Superbrain – Jim Kwik, Mindvalley</li>
					<li className="course-id"> Productivity: How to Do a Million Things</li>
					<li className="course-id"> Productivity Masterclass – Principles and Tools </li>
					<li className="course-id"> Techniques to Improve Your Productivity</li>
					<li className="course-id"> Wayne Gretzky Teaches the Athlete’s Mindset</li>
				

				</ol>
			</div>
			<button className="button-ch" onClick={home}>
				Back to Home
			</button>
            <br />
            <button className="button-ch" onClick={dayOne}>
				Go to Quizzes
			</button>
		</>
	)
}

export default Courses;
