import React from 'react';
import Button from "../button/Button.jsx";
import "./Form.css"

function Form({onSubmit}) {

    const [formState, setFormState] = React.useState({
        firstName: "",
        lastName: "",
        age: 0,
        zipcode: "",
        deliverFrequency: "every-week",
        deliverMoment: "afternoon",
        comments: "",
        termsAndConditions: false
    })

    function handleChange(e) {
        const changedFieldName = e.target.name
        const changedFieldValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        setFormState({
            ...formState,
            [changedFieldName]: changedFieldValue,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(formState)
    }

    return (
        <form onSubmit={handleSubmit}>
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
                <select name="deliverFrequency" id="deliverFrequency" value={formState.deliverFrequency}
                        onChange={handleChange}>
                    <option value="every-week">Iedere week</option>
                    <option value="every-other-week">Om de week</option>
                    <option value="every-month">Iedere maand</option>
                </select>
            </label>
            <span>
            <input type="radio" id="afternoon" name="deliverMoment" value="afternoon"
                   checked={formState.deliverMoment === 'afternoon'} onChange={handleChange}/>
            <label htmlFor="afternoon">Overdag</label>
            <input type="radio" id="evening" name="deliverMoment" value="evening"
                   checked={formState.deliverMoment === 'evening'} onChange={handleChange}/>
            <label htmlFor="evening">&apos;s Avonds</label>
                </span>
            <label htmlFor="comments">
                Opmerkingen
            </label>
            <textarea name="comments" id="comments" cols="10" rows="4" value={formState.comments}
                      onChange={handleChange}></textarea>
            <label htmlFor="termsAndConditions">
                <input type="checkbox" id="termsAndConditions" name="termsAndConditions"
                       checked={formState.termsAndConditions} onChange={handleChange}/>
                Ik ga akkoord met de voorwaarden</label>
            <Button disabled={!formState.termsAndConditions}>Verzend</Button>
        </form>
    );
}

export default Form;