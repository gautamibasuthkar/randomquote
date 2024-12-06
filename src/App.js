// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState(null);
  // const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRandomQuote = async () => {
    setLoading(true);
    setError('');
    const url = 'https://inspirational-quote-generator.p.rapidapi.com/quoteGenerator';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e78068b468msh4c02d2efaaea0aep119739jsnff23016da17f',
		'x-rapidapi-host': 'inspirational-quote-generator.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  setQuote(result)
	console.log(result);
} catch (error) {
	console.error(error);
}
  finally {
      setLoading(false);
    }
  };

  // const fetchSearchQuote = async () => {
  //   setLoading(true);
  //   setError('');
  //   try {
  //     const response = await fetch(`https://animechan.io/api/v1/quotes?title=${searchTerm}`);
  //     const data = await response.json();
  //     if (data.length > 0) {
  //       setQuote(data[0]);
  //     } else {
  //       setError('No quotes found for the given search term.');
  //     }
  //   } catch (err) {
  //     setError('Failed to fetch quotes. Please try again later.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quotes Generator</h1>
        <button onClick={fetchRandomQuote}>Get Random Quote</button>


        {loading && <p>Loading...</p>}

        {error && <p className="error">{error}</p>}

        {quote && (
          <div className="quote-card">
            <p>"{quote.quote}"</p>
            <p>
              <strong>- {quote.author}</strong>
            </p>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;

