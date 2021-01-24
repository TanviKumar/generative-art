import React from "react";
import "./AboutUs.css";
import Header from "../Header/Header";
import { Container, Typography } from "@material-ui/core";
export default function AboutUs() {
  return (
    <div className="about-us">
      <Header text="About Us"></Header>
      <img
        className="about-us-img"
        src="https://images.unsplash.com/photo-1589030343991-69ea1433b941?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="generative-art"
      />
      <Container className="description">
        <Typography>
          Generative Art is a process of algorithmically generating new ideas,
          forms, shapes, colors, or patterns. First, you create rules that
          provide boundaries for the creation process. Then a computer (or less
          commonly a human) follows those rules to produce new works
        </Typography>
        <br />
        <Typography>
          The ability to create beautiful art pieces with just a few lines of
          code is a fantastic feat by itself. Generative Art unlocks an entirely
          new avenue in the traditional art space, where earlier it used to take
          months or sometimes years to make a single art-piece. But, now, with
          the advancement of computer architecture, generative artists can make
          a brilliant art-piece in a concise amount of time with thousands of
          different unique patterns.
        </Typography>
      </Container>
    </div>
  );
}
