import React from 'react';

export default function ResultButton ({ bestEmojis, handleClearResults }) {

  return (
    <div className="resultsContainer">
      <p>The best emoji(s):</p>
      {bestEmojis.length > 0 ? (
        bestEmojis.map((emoji) => (
          <div className="bestEmoji" key={emoji.id}>
            <img className="emojiImage" src={emoji.emoji} alt={`Emoji №${emoji.id}`} />
            <p className="emojiLikes">Likes count: {emoji.likes}</p>
          </div>
        ))
      ) : (
        <p>No emoji selected yet!</p>
      )}
      <button className="clearButton" onClick={handleClearResults}>Clear results</button>
    </div>
  );
}
