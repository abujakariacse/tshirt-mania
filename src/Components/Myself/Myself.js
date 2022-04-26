import React from 'react';
import Special from '../Special/Special';

const Myself = ({house}) => {
    return (
        <div>
            <h3>Myself</h3>
            <small>House: {house}</small>
            <Special></Special>
        </div>
    );
};

export default Myself;