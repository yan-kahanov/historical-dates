import { useEffect, useRef, useState } from "react";
import "./HistoricalDatesYears.scss";
import animateValue from "src/helpers/animateValue";

type Props = {
  years: number[];
};

const HistoricalDatesYears = ({ years }: Props) => {
    const [prevYears, setPrevYears] = useState([1950, 1950])
    const fromNum = useRef(null)
    const toNum = useRef(null)

    useEffect(() => {
        animateValue(fromNum.current, prevYears[0], years[0], 1000)
        animateValue(toNum.current, prevYears[1], years[1], 1000)
        return () => setPrevYears(years);
    }, [years, prevYears])

  return (
    <div className="historical-dates-years">
      <div className="historical-dates-years__item" ref={fromNum}></div>
      <div className="historical-dates-years__item" ref={toNum}></div>
    </div>
  );
};

export default HistoricalDatesYears;
