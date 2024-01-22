import React from "react";
import "./HistoricalDatesCounter.scss";

type Props = {
  activeIndex: number;
  setActiveIndex: (arg: number) => void;
  eventsLength: number;
};

const HistoricalDatesCounter = ({
  activeIndex,
  eventsLength,
  setActiveIndex,
}: Props) => {
  return (
    <div className="historical-dates-counter">
      <div className="historical-dates-counter__item">
        0{activeIndex}/0{eventsLength}
      </div>
      <div className="historical-dates-counter__buttons">
        <button
          className="historical-dates-counter__button"
          onClick={() => setActiveIndex(activeIndex - 1)}
          disabled={activeIndex === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="#42567A"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        </button>
        <button
          className="historical-dates-counter__button"
          onClick={() => setActiveIndex(activeIndex + 1)}
          disabled={activeIndex === eventsLength}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="#42567A"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </button>
      </div>
      <div className="historical-dates-counter__pagination">
        {new Array(eventsLength).fill(0).map((item, index) => (
          <div
            className={`historical-dates-counter__pagination-dot ${
              index + 1 === activeIndex ? "active" : ""
            }`}
            key={index}
            onClick={() => setActiveIndex(index + 1)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HistoricalDatesCounter;
