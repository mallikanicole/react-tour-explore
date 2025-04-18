import React, { useState } from 'react';
import Gallery from './components/Gallery';
import { useEffect } from 'react';

const App = () => {
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h1>Tour Comparison</h1>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
};
useEffect(() => {
  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      const data = await response.json();
      setTours(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchTours();
}, []);

const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

if (loading) {
  return <main><h1>Loading...</h1></main>;
}

if (error) {
  return <main><h1>Error: {error}</h1></main>;
}

export default App;