import React, { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';
import quotesData from './quotesData'; 
import './quotes.css';

const Quotes = () => {
  const quoteArray = quotesData.data.quotes;
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Function to get a random quote
  function getRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quoteArray.length);
    const randomQuote = quoteArray[randomNumber];
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  }

  // Use useEffect to get a random quote when the component initially renders
  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <>
    <div className='quoteContainer'>
      <Text className='quoteText'>"{quote}" <br /> - {author}</Text>
    </div>
      
    <button className='quoteBtn' onClick={getRandomQuote}>Press For Wisdom</button>

    </>
  );
 
}

export default Quotes;
