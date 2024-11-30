import React, { useEffect, useState } from 'react';
import { emojisData } from "../data/emojisData";
import ResultButton from "./ResultButton";
import EmojiButton from "./EmojiButton";

export default function EmojisWrapper() {
  const [data, setData] = useState(emojisData);
  const [bestEmojis, setBestEmojis] = useState([]);
  const [isShowResult, setShowResult] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("emojis"));
    if (storedData) {
      setData(storedData);
    }
  }, [])

  const handleLike = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, likes: item.likes + 1 } : item
    );
    localStorage.setItem("emojis", JSON.stringify(updatedData));
    setData(updatedData);
  };

  const handleShowResults = () => {
    const maxLikes = Math.max(...data.map((item) => item.likes));
    const bestEmojis = data.filter((item) => item.likes === maxLikes);
    setBestEmojis(bestEmojis);
    setShowResult(true);
  };

  const handleClearResults = () => {
    const resetData = data.map((item) => ({ ...item, likes: 0 }));
    setData(resetData);
    setShowResult(false)
    setBestEmojis([]);
    localStorage.setItem("emojis", JSON.stringify(resetData));
  };

  return (
    <div className="wrapper">
      <div className="emojisContainer">
        {data.map((emoji) => (
          <EmojiButton key={emoji.id} emoji={emoji} handleLike={handleLike} />
        ))}
      </div>
      <button className="resultsButton" onClick={handleShowResults}>Show results</button>
      {isShowResult && <ResultButton
        bestEmojis={bestEmojis}
        handleClearResults={handleClearResults}
      />}
    </div>
  );
}
