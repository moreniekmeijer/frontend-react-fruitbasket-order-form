import React from 'react';
import "./FruitCounter.css";
import Button from "../button/Button.jsx";

function FruitCounter({title, fruitCount, setFruitCount}) {
    return (
        <article>
            <h3>{title}</h3>
            <Button handleClick={() => setFruitCount(Math.max(0, (fruitCount - 1)))}>
                -
            </Button>
            <p>{fruitCount}</p>
            <Button handleClick={() => setFruitCount(fruitCount + 1)}>
                +
            </Button>
        </article>
    );
}

export default FruitCounter;