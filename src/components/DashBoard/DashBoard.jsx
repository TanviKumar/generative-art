import React from "react";
import "./DashBoard.css";
import { Link } from "react-router-dom";
export default function DashBoard() {
  return (
    <div className="dashboard">
      <h1 className="title">Generative Art for All</h1>
      <div className="showcase">
        <Link className="card card-link" to="/art/beyond_binary">
          Beyond Binary
        </Link>
        <Link className="card card-link" to="/art/border_radius">
          Border Radius
        </Link>
        <Link className="card card-link" to="/art/card">
          Card
        </Link>
        <Link className="card card-link" to="/art/cross">
          Cross
        </Link>
        <Link className="card card-link" to="/art/cross_2">
          Cross 2
        </Link>
      </div>
    </div>
  );
}
