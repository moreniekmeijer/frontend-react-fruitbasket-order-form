import React from 'react';
import "./FruitCounter.css";
import Button from "../button/Button.jsx";

function FruitCounter(props) {
    return (
        <section>
            <h3>Fruit</h3>
            <Button></Button>
            <p>0</p>
            <Button></Button>
        </section>
    );
}

export default FruitCounter;