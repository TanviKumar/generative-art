import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
export default function Card(props) {
  const { name, desc, image, linkUrl, codeUrl, author } = props;
  return (
    <div className="card">
      <div className="front">
        <img className="thumbnail" src={image} alt=""/>
        <h3 className="name">{name}</h3>
        <p className="author">By {author}</p>
      </div>
      <div className="back">
        <div className="art-info">
          <p className="description">{desc}</p>
        </div>
        <div className="btn-grp">
          <Link to={linkUrl} className="btn">
            Live
          </Link>
          <a className="btn" href={codeUrl} target="_blank" >
            Code
          </a>
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
}
