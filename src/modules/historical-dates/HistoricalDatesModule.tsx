import React from "react";
import {HistoricalDatesCircle, HistoricalDatesYears} from "./components";
import "./HistoricalDatesModule.scss";
import events from './events.json'

const HistoricalDatesModule = () => {
  const [activeIndex, setActiveIndex] = React.useState(1);

  return (
    <div className="historical-dates">
      <div className="container">
        <div className="historical-dates__inner">
          <h2 className="historical-dates__title">
            Исторические
            <br /> даты
          </h2>
          <HistoricalDatesCircle events={events} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
          <HistoricalDatesYears years={events[activeIndex-1].dates}/>
        </div>
      </div>
    </div>
  );
};

export default HistoricalDatesModule;
