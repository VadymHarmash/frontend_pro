import React, { Component } from 'react';
import { emojisData } from "../data/emojisData";
import ResultButton from "./ResultButton";
import EmojiButton from "./EmojiButton";

class EmojisWrapper extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [...emojisData],
      bestEmojis: [],
      isShowResult: false
    };
  }

  componentDidMount() {
    const storedData = JSON.parse(localStorage.getItem("emojis"));
    if (storedData) {
      this.setState({ data: storedData });
    }
  }

  handleLike = (id) => {
    const updatedData = this.state.data.map((item) =>
      item.id === id ? { ...item, likes: item.likes + 1 } : item
    );
    localStorage.setItem("emojis", JSON.stringify(updatedData));
    this.setState({ data: updatedData });
  };

  handleShowResults = () => {
    const maxLikes = Math.max(...this.state.data.map((item) => item.likes));
    const bestEmojis = this.state.data.filter((item) => item.likes === maxLikes);
    this.setState({ isShowResult: true, bestEmojis });
  };

  handleClearResults = () => {
    const resetData = this.state.data.map((item) => ({ ...item, likes: 0 }));
    this.setState({ data: resetData, isShowResult: false, bestEmojis: [] });
    localStorage.setItem("emojis", JSON.stringify(resetData));
  };

  render() {
    return (
      <div className="wrapper">
        <div className="emojisContainer">
          {this.state.data.map((emoji) => (
            <EmojiButton key={emoji.id} emoji={emoji} handleLike={this.handleLike} />
          ))}
        </div>
        <button className="resultsButton" onClick={this.handleShowResults}>Show results</button>
        {this.state.isShowResult && <ResultButton
          bestEmojis={this.state.bestEmojis}
          handleClearResults={this.handleClearResults}
        />}
      </div>
    );
  }
}

export default EmojisWrapper;
