import React from 'react';

import classes from './CryptoElement.module.css'

const CryptoElement = ({ name, price, marketcap, pricechange, image, symbol }) => {

    const change = +pricechange

    return (
        <>
            <li className={classes.cryptoElement}>
                <div className={classes.name}><img src={image}></img> <p>{name}</p> <p>({symbol})</p></div>
                <div className={classes.price}>{price}</div>
                <div className={classes.marketcap}>{marketcap}</div>
                <div style={{ color: change >= 0 ? 'green' : 'red' }} className={classes.pricechange}>{pricechange}%</div>
            </li>
        </>
    )

}

export default CryptoElement