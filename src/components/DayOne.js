import React from 'react';
import { useHistory } from "react-router-dom";
import DaysCard from './Dayscard';

export default function DayOne() {

  const history = useHistory();

  const details = {
      day: "Day 1",
      learn:["Eat the Frog", "One Big Thing", "Focus"],
      do:"Eat the Frog"
  };

  const startDayOneQuiz = () => {
		history.push("/dayone/quiz");
	}

    const goToDayTwo = () => {
		history.push("/daytwo");
	}

  return (
    <div>
      <DaysCard start={startDayOneQuiz} prev={""} next={goToDayTwo} details={details} />
    </div>
  )
}
