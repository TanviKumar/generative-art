import React from "react";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./sketch";
export default function Tuls5() {
  return (
    <div>
      <P5Wrapper sketch={sketch}></P5Wrapper>
    </div>
  );
}