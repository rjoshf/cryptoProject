import React, { useEffect, useState } from 'react';

import CryptoElement from './CryptoElement.jsx';

import classes from './CryptoList.module.css'


const DUMMY_DATA = [
    { name: 'Bitcoin', price: '$30000', marketcap: '$20000000', circulatingsupply: '$3000000', id: Math.random() * 1000 },
    { name: 'Ethereum', price: '$30000', marketcap: '$20000000', circulatingsupply: '$3000000', id: Math.random() * 1000 },
    { name: 'Solana', price: '$30000', marketcap: '$20000000', circulatingsupply: '$3000000', id: Math.random() * 1000 },
    { name: 'Cardano', price: '$30000', marketcap: '$20000000', circulatingsupply: '$3000000', id: Math.random() * 1000 },
    { name: 'Link', price: '$30000', marketcap: '$20000000', circulatingsupply: '$3000000', id: Math.random() * 1000 },
]

const options = {
    method: 'GET',
    headers: {
        // 'X-CMC_PRO_API_KEY': 'f37a9af0-7582-4aae-82d2-37db99dc0aaf'
    }
};

const CryptoList = () => {

    const [topCryptos, setTopCryptos] = useState([]);

    const cryptoFetcher = async () => {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`, options);
            if (!response.ok) {
                throw new Error('Perhaps the API is down! Please try again later.');
            }
            const data = await response.json();
            setTopCryptos(data);
            console.log(data);
        }

        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        cryptoFetcher();
    }, [])


    return (
        <ul className={classes.cryptoList}>
            {topCryptos.map((element) => <CryptoElement name={element.name} price={element.current_price} marketcap={element.market_cap} circulatingsupply={element.circulating_supply} key={element.id}></CryptoElement>)}
        </ul>
    )

}

export default CryptoList;