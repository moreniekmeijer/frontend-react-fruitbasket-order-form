import './App.css'
import {useState} from "react";
import logo from './assets/screenshot-logo.png'
import FruitCounter from "./components/fruitcounter/FruitCounter.jsx";
import Form from "./components/form/Form.jsx";
import Button from "./components/button/Button.jsx";

function App() {
    const [strawberries, setStrawberries] = useState(0)
    const [bananas, setBananas] = useState(0)
    const [apples, setApples] = useState(0)
    const [kiwis, setKiwis] = useState(0)

    function resetFruitCount() {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0)
    }

    function sendData(formData) {
        if (formData.termsAndConditions) {
            console.log(
                `Je hebt 
            ${strawberries} strawberries,
            ${bananas} bananas,
            ${apples} apples,
            ${kiwis} kiwi's 
            besteld met de volgende bestelgegevens: 
            ${JSON.stringify(formData, null, 1)}. 
            Smakelijk eten!`)
        } else {
            console.log("Hallo! Accepteer ff de voorwaarden!")
        }
    }

    return (
        <>
            <header>
                <img src={logo} alt="Logo"/>
            </header>
            <main>
                <section>
                    <FruitCounter title="🍓 Aardbeien" fruitCount={strawberries} setFruitCount={setStrawberries}/>
                    <FruitCounter title="🍌 Bananen" fruitCount={bananas} setFruitCount={setBananas}/>
                    <FruitCounter title="🍏 Appels" fruitCount={apples} setFruitCount={setApples}/>
                    <FruitCounter title="🥝 Kiwi's" fruitCount={kiwis} setFruitCount={setKiwis}/>
                    <Button handleClick={resetFruitCount}>Reset</Button>
                </section>
                <Form onSubmit={sendData}/>
            </main>
        </>
    )
}

export default App
