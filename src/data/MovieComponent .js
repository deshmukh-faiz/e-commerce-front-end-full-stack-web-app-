import React, { useEffect } from 'react';
import Movies from './Movies'; // Assuming Movies.js is in the same directory

const MovieComponent = () => {
  useEffect(() => {
    // Create an instance of the Movies class
    const moviesInstance = new Movies();

    // Call the api method on the instance
    moviesInstance.api()
      .then((data) => {
        // Handle the data from the API
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <Movies/>
    </div>
  );
}

export default MovieComponent;
