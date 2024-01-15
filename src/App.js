import React, { useState } from 'react';
import navalQuotes from './Quotes/navalQuotes';

function App() {

const [selectedCategory, setSelectedCategory] = useState("wisdom");

const handleCategoryChange = (event) =>{
  setSelectedCategory(event.target.value);
}

  const filteredQuotes = navalQuotes.filter(item => item.category === selectedCategory);
  const items = filteredQuotes.map((quote, index) => <p key={index}>{quote.quote}</p>);

  return (
    <div className="bg-gray-300">
      <h1>Naval App</h1>
      <div>
        <label htmlFor="category">Select a category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="wisdom">wisdom</option>
          <option value="happiness">happiness</option>
          <option value="life">life</option>
        </select>
      </div>
      <div>{items}</div>
      {console.log(items)}
    </div>
  );
}

export default App;
