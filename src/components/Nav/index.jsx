import React from "react";

const index = () => {
  return (
      <nav class="navbar navbar-dark bg-dark">
        <a
          class="navbar-brand"
          href="/"
        //   style={{background-color: "rgb(90, 90, 90);"}}
        >
          Sam Dratch
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <nav class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                About
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/portfolio">
                Portfolio
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </nav>

  );
};

export default index;
