import React, { useState } from 'react';
import BusinessList from './BusinessList.jsx';
import SearchBar from './SearchBar.jsx';
import Video from './Video.jsx';
import Menu from './Menu.jsx';
import "./App.css";

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Pizzeria',
  address: '123 Main St',
  city: 'New York',
  state: 'NY',
  zipCode: '10001',
  category: 'Pizza',
  rating: 4.5,
  reviewCount: 90
};

const VIDEOS = {
  fast: '../Cinematic.mp4',
  slow: '../Cinematic.mp4',
  cute: '../Cinematic.mp4',
  eek: '../Cinematic.mp4',
};


// Array of businesses, each referencing the same object for now
const businesses = Array(6).fill(business);

function App() {

  const [src, setSrc] = useState(VIDEOS.fast); // Default video source

  // Function to change the video source
  const chooseVideo = (newVideo) => {
    setSrc(VIDEOS[newVideo]);
  };

  const searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    // Here you can make the API call to Yelp in the future.
  };

  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses} />
      <div className= "videoBox">
      <Video src={src} />
      <Menu chooseVideo={chooseVideo} />
      </div>
    </div>
  );
}

export default App;