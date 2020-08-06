import React from "react";

const index = () => {
  return (
      <nav className="navbar navbar-dark bg-dark">
        <a
          className="navbar-brand"
          href="/"
        //   style={{background-color: "rgb(90, 90, 90);"}}
        >
          Sam Dratch
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <nav className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/portfolio">
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </nav>

  );
};

export default index;
