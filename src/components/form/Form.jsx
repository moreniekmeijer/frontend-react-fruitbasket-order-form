import React from 'react';
import Button from "../button/Button.jsx";
import "./Form.css"

function Form(props) {

    const [formState, setFormState] = React.useState({
        firstName: "",
        lastName: "",
        age: 0,
        zipcode: "",
        deliverFrequency: "every-week",
        deliverMoment: "day",
        comments: "",

    })

    function handleChange(e) {
        const changedFieldName = e.target.name
        const changedFieldValue = e.target.value ===

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
            [changedFieldValue]: e.target.value
        })
    }

    return (
        <form >
            <h2>Bestelformulier</h2>
            <label htmlFor="firstName">
                Voornaam
                <input type="text"
                       id="firstName"
                       name="firstName"
                       value={formState.firstName}
                       onChange={handleChange}
                />
            </label>
            <label htmlFor="lastName">
                Achternaam
                <input type="text"
                       id="lastName"
                       name="lastName"
                       value={formState.lastName}
                       onChange={handleChange}
                />
            </label>
            <label htmlFor="age">
                Leeftijd
                <input type="number"
                       id="age"
                       name="age"
                       value={formState.age}
                       onChange={handleChange}
                />
            </label>
            <label htmlFor="zipcode">
                Postcode
                <input type="text"
                       id="zipcode"
                       name="zipcode"
                       value={formState.zipcode}
                       onChange={handleChange}
                />
            </label>
            <label htmlFor="deliverFrequency">
                Bezorgfrequentie
                <select name="deliverFrequency" id="deliverFrequency" value={formState.deliverFrequency} onChange={handleChange}>
                    <option value="every-week">Iedere week</option>
                    <option value="every-other-week">Om de week</option>
                    <option value="every-month">Iedere maand</option>
                </select>
            </label>
            <span>
            <input type="radio" id="afternoon" name="deliverMoment" value="afternoon"/>
            <label htmlFor="html">Overdag</label>
            <input type="radio" id="evening" name="deliverMoment" value="evening"/>
            <label htmlFor="css">&apos;s Avonds</label>
                </span>
            <label htmlFor="comments">
                Opmerkingen
                <textarea name="comments" id="comments" cols="30" rows="10" value={formState.comments} onChange={handleChange}></textarea>
            </label>
            <label htmlFor="terms-and-conditions"></label>
            <input type="checkbox" id="terms-and-conditions" name="terms-and-conditions"/>
            <Button>Verzend</Button>

        </form>
    );
}

export default Form;