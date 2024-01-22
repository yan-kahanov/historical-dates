import React from "react";
import {
  HistoricalDatesCircle,
  HistoricalDatesYears,
  HistoricalDatesCounter,
  HistoricalDatesSlider,
} from "./components";
import "./HistoricalDatesModule.scss";
import events from "./events.json";

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
          <HistoricalDatesCircle
            events={events}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          <HistoricalDatesYears years={events[activeIndex - 1].dates} />
          <HistoricalDatesCounter
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            eventsLength={events.length}
          />
          <HistoricalDatesSlider
            events={events[activeIndex - 1].events}
            title={events[activeIndex - 1].title}
          />
        </div>
      </div>
    </div>
  );
};

export default HistoricalDatesModule;
