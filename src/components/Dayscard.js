import React from 'react';
import "../App.css";

export default function DaysCard({details, start, prev, next}) {

  return (
    <div className="days" >
        <div className="card " >
        <h1>{details.day} of Productivity</h1>
        <button className="prev-next" onClick={prev}>prev</button>
      <button className="prev-next" onClick={next}>next</button>
				
        <h2 className="day-head">Learn</h2>
				<ul >
                    {details.learn.map((elem,id) => {
                        // key=elem.id,
                        return(
                            <button className="button-day">{elem}</button>
                        )
                    })}
				</ul>

        <h2 className="day-head">Do</h2>
        <button className="button-day" onClick={start}>{details.do}</button>
			</div>
      
    </div>
  )
}