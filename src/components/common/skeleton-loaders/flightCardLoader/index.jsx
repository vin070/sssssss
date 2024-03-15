import React from 'react';
import CardLoader from './cardLoader';

const FlightCardLoader = () => {
    return (
        <>
            {Array.from({ length: 5 }).map((_, index) => (
                <CardLoader key={index} />
            ))}
        </>
    )
}

export default FlightCardLoader;