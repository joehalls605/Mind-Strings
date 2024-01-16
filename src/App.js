import React, { useState } from 'react';
import quotes from './Quotes/quotes';

function App() {

const [selectedCategory, setSelectedCategory] = useState("wisdom");

const handleCategoryChange = (event) =>{
  setSelectedCategory(event.target.value);
}

  const filteredQuotes = quotes.filter(item => item.category === selectedCategory);
  const items = filteredQuotes.map((quote, index) => (
    <p key={index} className="mb-4">{quote.quote} - {quote.author}</p>
  ));

  return (
    <div className="bg-gray-300  p-5">
      <h1 className='text-3xl font-bold py-5 font-sans'>Mind Strings</h1>
      <p className='text-lg font-sans'>Exporting quotes for life and work</p>
      <div className='pb-5 text-lg font-sans'>
        <label className="block mb-5 text-lg font-sans" htmlFor="category">Select a category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange} >
        <option value="" disabled hidden>Choose a category</option>
          <option value="wisdom">Wisdom</option>
          <option value="happiness">Happiness</option>
          <option value="life">Life</option>
        </select>
        </div>
      <div className='text-lg font-sans py-5'>{items}</div>
      {console.log(items)}
    </div>
  );
}

export default App;
