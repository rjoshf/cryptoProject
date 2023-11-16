import React from 'react';

import classes from './CryptoElement.module.css'

const CryptoElement = ({ name, price, marketcap, circulatingsupply }) => {

    return (
        <>
            <li className={classes.cryptoElement}>
                <p>{name}</p>
                <p>{price}</p>
                <p>{marketcap}</p>
                <p>{circulatingsupply}</p>
            </li>
        </>
    )

}

export default CryptoElement