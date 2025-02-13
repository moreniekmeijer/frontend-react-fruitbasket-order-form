import './App.css'
import {useState} from "react";
import logo from './assets/screenshot-logo.png'
import FruitCounter from "./components/fruitcounter/FruitCounter.jsx";
import Form from "./components/form/Form.jsx";

function App() {
    const [amount, setAmount] = useState()

  return (
    <>
        <header>
            <img src={logo} alt="Logo"/>
        </header>
        <FruitCounter />
        <FruitCounter />
        <FruitCounter />
        <FruitCounter />
        <Form></Form>
    </>
  )
}

export default App
