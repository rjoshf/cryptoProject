import React from 'react'

import classes from './CryptoCurrencyHeader.module.css'

const CryptoCurrencyHeader = (props) => {

    return (
        <>
            <div className={classes.cryptoHeader}>
                <p>Name</p>
                <p>Price</p>
                <p>Market Cap</p>
                <p>Circulating Supply</p>
            </div>
        </>
    )

}

export default CryptoCurrencyHeader;