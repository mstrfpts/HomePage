import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <div>Header in comp</div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Games</a>
            </li>
            <li>
              <a href="#">Current Affairs</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
