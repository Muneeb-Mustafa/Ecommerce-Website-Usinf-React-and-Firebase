import React from 'react';
import { Link } from 'react-router-dom';

const Section4 = () => { 

  return (
    <div className='sectionStyless' >
      <h5>10% Off & The Best Indie Art Ever!</h5>
      <h1>Be The First To<br/>Get Limited Editions</h1>
      <Link to="/shop">
      <button className="btn3">Shop New Collection</button>
      </Link>
    </div>
  );
};

export default Section4;
