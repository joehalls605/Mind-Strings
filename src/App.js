import React, { useState } from 'react';
import quotes from './Quotes/quotes';

function App() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomCategory = quotes[randomIndex].category;

  const [selectedCategory, setSelectedCategory] = useState(randomCategory);
  const [selectedAuthor, setSelectedAuthor] = useState('');


  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
  }

  const filteredQuotes = quotes.filter(item => {
    const byCategory = selectedCategory === '' || item.category === selectedCategory;
    const byAuthor = selectedAuthor === '' || item.author === selectedAuthor;
    return byCategory && byAuthor; // return true only if both conditions are met
  }); // returns an array of quotes that only match that criteria.

  const items = filteredQuotes.map((quote, index) => (
    <p key={index} className="mb-4 text-2xl p-4 font-sans border-b border-solid border-gray-200 bg-gray-100">{quote.quote} - {quote.author}</p>
  ));

  return (
    <div className="p-5">
      <h1 className='text-5xl py-5 font-sans'>Mind Strings</h1>
      <p className='text-2xl font-sans pb-5 mb-5'>Exporting quotes for life and work</p>
      <div className='flex items-center pb-5 text-lg font-sans'>
        <label className="block mr-2 text-xl font-sans" htmlFor="category">Category</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange} className="italic text-2xl">
          <option value="life">Life</option>
          <option value="happiness">Happiness</option>
          <option value="productivity">Productivity</option>
        </select>
        <label className="block mr-2 text-xl font-sans" htmlFor="author">Author</label>
        <select id="author" value={selectedAuthor} onChange={handleAuthorChange} className="italic text-2xl">
          <option value="Naval">Naval</option>
          <option value="Paul Graham">Paul Graham</option>
          <option value="Scott Adams">Scott Adams</option>
        </select>
      </div>
      <div className="mt-10">
        {items}
      </div>
    </div>
  );
}

export default App;
