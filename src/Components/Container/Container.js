import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Cards from '../Cards/Cards';
import Purple from '../Purple/Purple';
import Nft from '../NFTs/Nft';


const Container = () => {
  return (
    <div className='concon'>
        <Header />
        <Body />
        <Footer />
        <Cards />
        <Purple />
        <Nft />

    </div>
  )
}

export default Container