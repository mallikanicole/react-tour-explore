import React, { useState, useEffect } from 'react';
import Gallery from './component/Gallery'; 

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
//fetch tours from API
  const fetchTours = async () => {
    setLoading(true);
    setError(null); // Reset error state before fetching
    try {
      const response = await fetch('https://course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      const data = await response.json();
      setTours(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
//use useEffect to fetch tours
  useEffect(() => {
    fetchTours();
  }, []);
//handle loading and error states
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return (
      <div>
        <h2>Error: {error}</h2>
        <button onClick={fetchTours}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Tours</h1>
      <ul>
        {tours.map((tour) => (
          <li key={tour.id}>
            <h2>{tour.name}</h2>
            <p>{tour.info}</p>
            <p>Price: ${tour.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
