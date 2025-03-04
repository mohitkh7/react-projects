import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
      console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  const removeTour = (tour_id) => {
    const newTours = tours.filter((tour) => tour.id !== tour_id);
    setTours(newTours);
  }

  useEffect(() => {
    fetchTours();
  }, []);
  
  if (loading) {
    return <main><Loading /></main>
  }

  if (tours.length === 0) {
    return <main>
    <div className='title'>
      <h2>No Tours Left</h2>
      <button className='btn' onClick={() => fetchTours()}>Refresh</button>
    </div>
  </main>
  }

  return <main>
    <div className='title'>
      <h2>Our Tours</h2>
      <div className='underline'></div>
    </div>
    <Tours tours={tours} removeTour={removeTour}></Tours>
  </main>
}

export default App
