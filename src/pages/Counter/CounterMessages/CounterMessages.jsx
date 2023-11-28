import React from "react";
import { CounterMessageWrapper } from "./CounterMessageStyled";

const CounterMessages = (props) => {
  const { count = 0 } = props;

  const countContents = {
    0: <p style={{ color: "black" }}>count is zero</p>,
    1: <p style={{ color: "yellow" }}>count is one</p>,
    2: <p style={{ color: "green" }}>count is two</p>,
    3: <p style={{ color: "blue" }}>count is three</p>,
    4: <p style={{ color: "pink" }}>count is four</p>,
    5: <p style={{ color: "red" }}>count is five</p>,
    6: <p style={{ color: "orange" }}>count is six</p>,
    7: <p style={{ color: "violet" }}>count is seven</p>,
    8: <p style={{ color: "purple" }}>count is Eight</p>,
    9: <p style={{ color: "gold" }}>count is Nine</p>,
  };
  return (
    <CounterMessageWrapper>
      <div>
        {countContents[count] ? (
          countContents[count]
        ) : (
          <p>Oops went out of context</p>
        )}
      </div>
    </CounterMessageWrapper>
  );
};

export default CounterMessages;
