import React from 'react';
import navalQuotes from './Quotes/navalQuotes';

function App() {
  const categoryToDisplay = "wisdom";
  const filteredQuotes = navalQuotes.filter(item => item.category === categoryToDisplay);
  const items = filteredQuotes.map((quote, index) => <p key={index}>{quote.quote}</p>);

  return (
    <div className="bg-gray-300">
      <h1>Naval App</h1>
      <div>{items}</div>
      {console.log(items)}
    </div>
  );
}

export default App;
