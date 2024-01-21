import React from "react";
import HistoricalDatesCircle from "./components/circle/HistoricalDatesCircle";
import "./HistoricalDatesModule.scss";
import events from './events.json'

const HistoricalDatesModule = () => {

  return (
    <div className="historical-dates">
      <div className="container">
        <div className="historical-dates__inner">
          <h2 className="historical-dates__title">
            Исторические
            <br /> даты
          </h2>
          <HistoricalDatesCircle events={events}/>
        </div>
      </div>
    </div>
  );
};

export default HistoricalDatesModule;
