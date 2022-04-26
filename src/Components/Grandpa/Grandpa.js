import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('ring');

const Grandpa = () => {
    const gift = 'Diamond Ring';
    const [house, setHouse] = useState(1);
    const handleBuyHouse = () => {
        let newHouse = house + 1;
        setHouse(newHouse);
    }
    return (
        <RingContext.Provider value={gift}>
            <div className='grandpa-container'>
                <h3>Grandpa</h3>
                <h5>House: {house}</h5>
                <button onClick={handleBuyHouse}>Buy A House</button>
                <div className='grandpa'>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;