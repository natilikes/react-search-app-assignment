
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const items = [
    'Apple',
    'Banana',
    'Cherry',
    'Blueberry',
    'Orange',
    'Grapes',
    'Strawberry',
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Search App</h1>

      <Search
        value={searchTerm}
        onSearch={handleSearch}
      />

      <p>Searching for: {searchTerm}</p>

      <h2>Results</h2>

      {filteredItems.length > 0 ? (
        <ul>
          {filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No matching items found.</p>
      )}
    </div>
  );
}

function Search(props) {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={props.value}
        onChange={props.onSearch}
      />
    </div>
  );
}

export default App;
