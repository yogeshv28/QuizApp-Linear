// import './App.css';
// import HomeLog from './components/HomeLog';

// function App() {
//   return (
//     <div className="App">
//       Chola Chola
//       <HomeLog />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import HomeLog from "./components/HomeLog"
import Courses from "./components/Courses"

import './App.css';
import Navbar from './components/NavBar';
import DayTwo from './components/DayTwo';
import DayOne from './components/DayOne';
import DayOneEatFrog from './components/DayOneEatFrog';
import DayTwoPomodoro from './components/DayTwoPomodoro';


function App() {
	return (
		<>
			<Navbar />
			<Router>
				<Switch>
					<Route exact path="/"
						component={HomeLog} />

					<Route exact path="/courses"
						component={Courses} />

          <Route exact path="/dayone"
						component={DayOne} />

          <Route exact path="/daytwo"
						component={DayTwo} />

          <Route exact path="/dayone/quiz"
						component={DayOneEatFrog} />

          <Route exact path="/daytwo/quiz"
						component={DayTwoPomodoro} />

				</Switch>
			</Router>
		</>
	);
}

export default App;
