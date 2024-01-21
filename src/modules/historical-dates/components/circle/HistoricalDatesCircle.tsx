import React from "react";
import "./HistoricalDatesCircle.scss";
import type { Event } from "src/types/event";

type Props = {
  events: Event[];
};

const HistoricalDatesCircle = ({ events }: Props) => {
  const [activeIndex, setActiveIndex] = React.useState(1);
  return (
    <div
      className="historical-dates-circle"
      style={{ "--rot": activeIndex * -60 } as React.CSSProperties}
    >
      <div className="historical-dates-circle__inner">
        {events.map((event, index) => (
          <div
            className={`historical-dates-circle__dot ${
              activeIndex === index + 1 ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index + 1)}
            key={index}
          >
            {index + 1} <span>{event.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoricalDatesCircle;
