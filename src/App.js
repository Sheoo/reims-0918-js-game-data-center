import React, { Component } from "react";
import { Container } from "reactstrap";

import "./App.css";

import GamesList from "./GamesList";
import MainJumbotron from "./MainJumbotron";
import ResearchBar from "./ResearchBar";
import Table from "./Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: [
        {
          name: "Mario Kart",
          cover:
            "https://i2.wp.com/geekirc.me/wp-content/uploads/2018/02/Switch-Mario-Kart-1-768x480.jpg?fit=768%2C480&resize=350%2C200"
        },
        {
          name: "FIFA 2019",
          cover:
            "data:image/jpeg;base64,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"
        },
        {
          name: "Crazy Stuff",
          cover:
            "https://www.crazy-stuff.net/crazy-img/content/flash/350x200/48-348ecf74-dinostrikescreen9.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainJumbotron />
          <ResearchBar />
        </header>
        <Container>
          
        <GamesList list={this.state.gamesList}/>
       
          <Table />
        </Container>
      </div>
    );
  }
}

export default App;
