import React, { useEffect, useState } from 'react';

import CryptoElement from './CryptoElement.jsx';
import Error from './UI/Error.jsx'

import classes from './CryptoList.module.css'

const options = {
    method: 'GET',
    headers: {
        // 'X-CMC_PRO_API_KEY': 'f37a9af0-7582-4aae-82d2-37db99dc0aaf'
    }
};

const CryptoList = () => {

    const [topCryptos, setTopCryptos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const cryptoFetcher = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`, options);
                if (!response.ok) {
                    throw new Error('Failed to fetch data.');
                }
                const data = await response.json();
                setTopCryptos(data);
                console.log(data);
            }

            catch (error) {
                setError({ message: error.message || 'Could not fetch cryptocurrency data.' });
            }

            setIsLoading(false);
        }

        cryptoFetcher();
    }, [])

    if (error) {
        return <Error title="An error occured." message={error.message}></Error>
    }

    return (
        <>
            {isLoading && <h2>Loading...</h2>}
            {!isLoading && <ul className={classes.cryptoList}>
                {topCryptos.map((element) => <CryptoElement name={element.name} image={element.image} symbol={element.symbol} price={`${element.current_price.toLocaleString('en-US', { style: 'currency', currency: 'GBP' })}`} marketcap={element.market_cap.toLocaleString('en-US', { style: 'currency', currency: 'GBP' })} pricechange={element.price_change_percentage_24h.toFixed(1)} key={element.id}></CryptoElement>)}
            </ul>}
        </>
    )

}

export default CryptoList;