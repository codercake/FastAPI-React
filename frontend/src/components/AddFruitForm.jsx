import React, { useState } from 'react';

const AddFruitForm=({ addFruit })=>{
    const [fruitName, setFruitName]=useState('');

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(fruitName){
            addFruit(fruitName);
            setFruitName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            typr="text"
            value={fruitName}
            onChange={(e) => setFruitName(e.target.value)}
            placeholder='Enter fruit name'
            />
            <button type="submit">ADD FRUIT 🍓</button>
        </form>
    );
};

export default AddFruitForm;