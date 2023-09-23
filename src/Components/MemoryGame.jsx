import React, { useState, useEffect } from "react";
import { FaClone, FaSadTear } from "react-icons/fa";
import { motion } from "framer-motion";
import "../Components/MemoryGame.css";

const cardValues = [
  "🐶", "🐱", "🐭", "🦊", "🐯", "🦁",
  "🐮", "🐷", "🐸", "🐵", "🐤", "🦆"
]; // Add more values as needed

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledValues = shuffleArray([...cardValues, ...cardValues]);
    const initialCards = shuffledValues.map((value, index) => ({
      id: index,
      value,
      flipped: false,
      matched: false,
    }));
    setCards(initialCards);
    setFlippedCards([]);
    setMatchedPairs([]);
  };

  const handleCardClick = (id) => {
    if (flippedCards.length < 2) {
      const updatedCards = cards.map((card) =>
        card.id === id ? { ...card, flipped: true } : card
      );
      setCards(updatedCards);
      setFlippedCards([...flippedCards, id]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setTimeout(() => {
        checkForMatch();
      }, 800);
    }
  }, [flippedCards]);

  const checkForMatch = () => {
    const [id1, id2] = flippedCards;
    const card1 = cards.find((card) => card.id === id1);
    const card2 = cards.find((card) => card.id === id2);

    if (card1.value === card2.value) {
      setMatchedPairs([...matchedPairs, card1.value]);
      setFlippedCards([]);
      updateMatchedCards(true);
    } else {
      updateMatchedCards(false);
      setFlippedCards([]);
    }
  };

  const updateMatchedCards = (isMatch) => {
    const updatedCards = cards.map((card) => {
      if (flippedCards.includes(card.id)) {
        return { ...card, flipped: isMatch, matched: isMatch };
      }
      return card;
    });
    setCards(updatedCards);
  };

  return (
    <div className="memory-matching-game">
      <h2 className="game-title">Memory Game</h2>
      <div className="card-grid">
        {cards.map((card) => (
         <motion.div
         key={card.id}
         className={`card ${card.flipped ? "flipped" : ""} ${
           card.matched ? "matched" : ""
         }`}
         onClick={() => !card.flipped && handleCardClick(card.id)}
         whileHover={{ scale: 1.1 }}  // Adjust the scale value as needed for hover
         whileTap={{ scale: 0.9 }}   // Adjust the scale value as needed for tap
       >
        <div className={`card-content ${card.flipped ? "card-content-large" : ""}`}>
    {card.flipped ? card.value : <FaClone color={'#ff5733'}/>}
  </div>
       </motion.div>
       
        ))}
      </div>
      {matchedPairs.length === cardValues.length && (
  <div className="game-over">
    <h3>Game Over! You've matched all pairs.</h3>
    <button className="reset-button" onClick={initializeGame}>
      Play Again
    </button>
  </div>
)}
      
    </div>
  );
};

export default MemoryGame;
