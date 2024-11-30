import React, { Component } from 'react';

class EmojiButton extends Component {
  render() {
    const { emoji, handleLike } = this.props;

    return (
      <div className="emojiContainer">
        <button className="emojiButton" onClick={() => handleLike(emoji.id)}>
          <img className="emojiImage" src={emoji.emoji} alt={`Emoji №${emoji.id}`} />
        </button>
        <p className="emojiLikes">{emoji.likes}</p>
      </div>
    );
  }
}

export default EmojiButton;
