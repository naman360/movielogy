import React, { Component } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiMovie } from "react-icons/bi";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__brand">
          <BiMovie style={{ fontSize: "42px" }} />
          <h1>
            <a href="/"> Movielogy</a>
          </h1>
        </div>
        <div className="header__links">
          <a href="https://github.com/naman360">
            {" "}
            <AiFillGithub style={{ fontSize: "42px" }} />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
