import React from 'react';
import { useHistory } from "react-router-dom";
import DaysCard from './Dayscard';

export default function DayTwo() {

  const history = useHistory();

  const details = {
      day: "Day 2",
      learn:["Pomodoro Techniques", "Distractions", "Mindfullness"],
      do:"Pomodoro Techniques"
  };

  const startDayTwoQuiz = () => {
		history.push("/daytwo/quiz");
	}

    const goToDayOne = () => {
		history.push("/dayone");
	}

  return (
    <div>
      <DaysCard start={startDayTwoQuiz} prev={goToDayOne} next={""} details={details} />
    </div>
  )
}
