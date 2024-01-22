import type { Event } from "src/types/event";
import styled from "styled-components";

type Props = {
  events: Event[];
  activeIndex: number;
  setActiveIndex: (arg: number) => void;
};

const HistoricalDatesCircle = ({
  events,
  activeIndex,
  setActiveIndex,
}: Props) => {
  return (
    <Circle>
      <Inner>
        {events.map((event, index) => (
          <Dot
            $itemCount={events.length}
            $rot={activeIndex * -60}
            className={`${activeIndex === index + 1 ? "active" : ""}`}
            onClick={() => setActiveIndex(index + 1)}
            key={index}
          >
            {index + 1} <span>{event.title}</span>
          </Dot>
        ))}
      </Inner>
    </Circle>
  );
};

const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

const Inner = styled.div`
  border: 1px solid rgba(var(--black-blue), 0.1);
  position: relative;
  width: 530px;
  height: 530px;
  padding: 0;
  border-radius: 50%;
  list-style: none;
`;

const Dot = styled.div<{ $itemCount: number; $rot: number }>`
  background-color: rgb(var(--black-blue));
  border-radius: 50%;
  border: 1px solid rgb(var(--black-blue));
  transition: all 0.3s, transform 1s;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  margin: -2.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0;
  cursor: pointer;
  span {
    position: absolute;
    left: calc(100% + 20px);
    top: 25%;
  }
  &:hover,
  &.active {
    width: 56px;
    height: 56px;
    margin: -28px;
    background-color: rgb(var(--background));
    font-size: 20px;
  }
  &::before {
    position: absolute;
    content: "";
    background-color: transparent;
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  ${(props): any => {
    let angle = 360 / props.$itemCount;
    let rot = props.$rot;
    let styles = "";

    for (let i = 1; i <= props.$itemCount; i++) {
      styles += `&:nth-of-type(${i}){
        transform: rotate(calc(${rot} * 1deg))
        translate(calc(530px / 2))
        rotate(calc(${rot} * -1deg));
      }
      `;
      rot = rot + angle;
    }
    return styles;
  }}
`;

export default HistoricalDatesCircle;
