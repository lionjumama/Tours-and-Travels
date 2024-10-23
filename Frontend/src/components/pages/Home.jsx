import React from 'react';
import Body from '../Body';
import Header from '../Header';

const Home = ({ isLoggedIn }) => { // Accept isLoggedIn as prop
  return (
    <div> 
        <Header isLoggedIn={isLoggedIn} /> {/* Pass it to Header */}
        <Body />
    </div>
  );
};

export default Home;
