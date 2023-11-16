import React from 'react'

import classes from './CryptoCurrencyHeader.module.css'

const CryptoCurrencyHeader = (props) => {

    return (
        <>
            <div className={classes.cryptoHeader}>
                <h2>Name</h2>
                <h2>Price</h2>
                <h2>Market Cap</h2>
                <h2>Change (24h)</h2>
            </div>
        </>
    )

}

export default CryptoCurrencyHeader;