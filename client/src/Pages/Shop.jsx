import React, { useRef } from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import NewCollections from '../components/NewCollections/NewCollections';
import NewsLetter from '../components/NewsLetter/NewsLetter';

const Shop = () => {
  const newCollectionsRef = useRef(null);

  return (
    <div>
      <Hero newCollectionsRef={newCollectionsRef} />
      <Popular />
      <Offers />
      <div ref={newCollectionsRef}>
        <NewCollections />
      </div>
      <NewsLetter />
    </div>
  );
};

export default Shop;
