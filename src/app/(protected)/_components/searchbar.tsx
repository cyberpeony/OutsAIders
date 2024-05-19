//"use client";
// components/SearchBar.tsx
import { useState } from 'react';
const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Search Term:', searchTerm);
      // Handle the search logic here, e.g., fetch data or navigate to a search results page
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex items-center max-w-md mx-auto bg-white rounded-lg overflow-hidden">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."
          className="w-full px-4 py-2 text-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </form>
    );
  };
  
export default SearchBar;
