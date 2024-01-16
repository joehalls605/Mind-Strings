import React, { useState } from 'react';
import quotes from './Quotes/quotes';

function App() {


const randomIndex = Math.floor(Math.random() * quotes.length);
const randomCategory = quotes[randomIndex].category;

const [selectedCategory, setSelectedCategory] = useState(randomCategory);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  const filteredQuotes = quotes.filter(item => item.category === selectedCategory);
  const items = filteredQuotes.map((quote, index) => (
    <p key={index} className="mb-4 text-2xl font-sans">{quote.quote} - {quote.author}</p>
  ));

  return (
    <div className="bg-gray-300 p-5">
      <h1 className='text-5xl py-5 font-sans'>Mind Strings</h1>
      <p className='text-2xl font-sans pb-5'>Exporting quotes for life and work</p>
      <div className='flex items-center pb-5 text-lg font-sans'>
        <label className="block mr-2 text-xl font-sans" htmlFor="category">Category</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange} className="italic text-2xl">
        <option value="life">Life</option>
          <option value="happiness">Happiness</option>
          <option value="productivity">Productivity</option>
        </select>
        <label className="block mr-2 text-xl font-sans" htmlFor="category">Author</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange} className="italic text-2xl">
          <option value="life">Life</option>
          <option value="happiness">Happiness</option>
          <option value="productivity">Productivity</option>
        </select>
      </div>
      <div className='mt-40'>
      <div className=''>{items}</div>
      </div>
    </div>
    
  );
}

export default App;
