import React from 'react';

export default function EmojiButton({ emoji, handleLike }) {
  return (
    <div className="emojiContainer">
      <button className="emojiButton" onClick={() => handleLike(emoji.id)}>
        <img className="emojiImage" src={emoji.emoji} alt={`Emoji №${emoji.id}`} />
      </button>
      <p className="emojiLikes">{emoji.likes}</p>
    </div>
  );
}
