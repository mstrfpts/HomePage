import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <div>Footer in comp</div>
        </div>
        <nav>
          <ul>
            <a href="#">Copyright </a>|<a href="#"> Help </a>|
            <a href="#"> Contact </a>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;
