import React from 'react';
import navalQuotes from './Quotes/navalQuotes';

function App() {
  // Since there's no category in navalQuotes, we can directly use the array
  const items = navalQuotes.map((quote, index) => <p key={index}>{quote.quote}</p>);

  return (
    <div className="bg-gray-300">
      <h1>Naval App</h1>
      <div>{items}</div>
      {console.log(items)}
    </div>
  );
}

export default App;
