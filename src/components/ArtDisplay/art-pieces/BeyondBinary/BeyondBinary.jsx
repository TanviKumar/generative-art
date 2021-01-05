import React from "react";
import sketch from "./sketch";
import P5Wrapper from "react-p5-wrapper";
export default function BeyondBinary() {
  return (
    <div>
      <P5Wrapper sketch={sketch}></P5Wrapper>
    </div>
  );
}
