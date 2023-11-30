import React from 'react';
import './App.css'

import Header from './components/Header.jsx';
import Card from './components/UI/Card.jsx';
import CryptoCurrencyHeader from './components/CryptoCurrencyHeader.jsx';
import CryptoList from './components/CryptoList.jsx';

function App() {

  return (
    <>
      <Header></Header>
      <Card>
        <CryptoCurrencyHeader></CryptoCurrencyHeader>
        <CryptoList></CryptoList>
      </Card>

    </>
  )
}

export default App
