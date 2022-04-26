import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';
import './Father.css'

const Father = ({house}) => {
    return (
        <div>
            <h3>Father</h3>
            <small>House: {house}</small>
            <div className='father'>
                <Myself house={house}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;