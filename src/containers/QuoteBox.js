import React, { Component } from "react";
import Text from "./../components/Text";
import Author from "./../components/Author";
import Button from "./../components/Button";
import NewQuote from "./../components/NewQuote";
import "./QuoteBox.css";
import axios from "axios";

import { quotes } from "../quotes";
import { random, bgChange } from "./functions";

const randomQuote = () => random(0, quotes.length);

const bgColor = bgChange();

const body = document.querySelector("body");

class QuoteBox extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      random: 0,
      randomColor: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://type.fit/api/quotes")
      .then((res) =>
        this.setState({
          quotes: res.data,
          random: randomQuote(),
          randomColor: bgChange(),
        })
      )
      .catch((error) => console.log(error));
    // this.setState({

    //   random: randomQuote(),
    //   randomColor: bgChange(),
    // });

    const text = document.querySelector("#text p");
    const author = document.querySelector("#author p");
    const btnQuote = document.querySelector(".btn button");
    const btnTweet = document.querySelectorAll(".btn a");

    btnTweet.forEach((el) => (el.style.background = bgColor));
    btnQuote.style.background = bgColor;
    body.style.background = bgColor;
    text.style.color = bgColor;
    author.style.color = bgColor;
  }

  handleNewQuote = () => {
    const { randomColor } = this.state;

    this.setState({
      random: randomQuote(),
      randomColor: bgChange(),
    });

    body.style.background = randomColor;
    document.querySelector("#text p").style.color = randomColor;
    document.querySelector("#author p").style.color = randomColor;
    document
      .querySelectorAll(".btn a")
      .forEach((el) => (el.style.background = randomColor));
    document.querySelector(".btn button").style.background = randomColor;
  };

  render() {
    const { quotes, random } = this.state;
    return (
      <div>
        <div id="quote-box">
          <Text
            quotes={quotes}
            random={random}
            randomColor={this.state.randomColor}
          />
          <Author quotes={quotes} random={random} />

          <div className="button-group">
            <Button quotes={quotes} random={random} logo={"fab fa-twitter"} />
            <Button quotes={quotes} random={random} logo={"fab fa-tumblr"} />
            <NewQuote newQuote={this.handleNewQuote} />
          </div>
        </div>
        <div className="creator-name">
          <span>by</span> <a href="#">Abdi</a>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
