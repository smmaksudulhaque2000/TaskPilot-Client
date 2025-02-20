import React, { useState } from 'react';

const DropArea = ({onDrop}) => {

    const [showDrop, setShowDrop] = useState(false);
    return (
        <div onDragEnter={() => setShowDrop(true)} onDragLeave={() => setShowDrop(false)} onDrop={() => {onDrop(); setShowDrop(false)}} onDragOver={e => e.preventDefault()}>
            <h3>Drop Here: </h3>
        </div>
    );
};

export default DropArea;