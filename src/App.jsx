import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Homepage from "./Pages/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
