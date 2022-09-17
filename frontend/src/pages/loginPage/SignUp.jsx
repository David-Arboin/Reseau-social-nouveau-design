import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp(params) {
    const navigate = useNavigate()
    //************************************SignUp
    /*     const [errorMessages, setErrorMessages] = useState({}) */

    const inputsSignUp = useRef([])
    const addInputsSignUp = (el) => {
        inputsSignUp.current.push(el)
    }

    // Generate JSX code for error message
    /*     const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        ) */

    const resetInputNameOnclick = (e) => {
        document.getElementById('name').style.backgroundColor = '#f8f6f9'
    }
    const resetInputFirstnameOnclick = () => {
        document.getElementById('name').style.backgroundColor = '#f8f6f9'
    }
    const resetInputEmailOnclick = () => {
        document.getElementById('name').style.backgroundColor = '#f8f6f9'
    }
    const resetInputPasswordOnclick = () => {
        document.getElementById('name').style.backgroundColor = '#f8f6f9'
    }
    const resetInputDayOnclick = () => {
        document.getElementById('name').style.backgroundColor = '#f8f6f9'
    }
    const resetInputMonthOnclick = () => {
        document.getElementById('name').style.backgroundColor = '#f8f6f9'
    }
    const resetInputYearOnclick = () => {
        document.getElementById('name').style.backgroundColor = '#f8f6f9'
    }

    const resetPlaceholderIfnothing = () => {
        if (inputsSignUp.current[0].value === '') {
            document.getElementById('name').style.backgroundColor = '#f8f6f9'
            document.getElementById('name').placeholder = 'Nom'
        }
        if (inputsSignUp.current[1].value === '') {
            document.getElementById('firstname').style.backgroundColor =
                '#f8f6f9'
            document.getElementById('firstname').placeholder = 'Prénom'
        }
        if (inputsSignUp.current[2].value === '') {
            document.getElementById('email').style.backgroundColor = '#f8f6f9'
            document.getElementById('email').placeholder =
                'email'
        }
        if (inputsSignUp.current[3].value === '') {
            document.getElementById('passwordSignUp').style.backgroundColor =
                '#f8f6f9'
            document.getElementById('passwordSignUp').placeholder =
                'Nouveau mot de passe'
        }
        if (inputsSignUp.current[4].value === '') {
            document.getElementById('day').style.backgroundColor = '#f8f6f9'
            document.getElementById('day').placeholder = 'Jour'
        }
        if (inputsSignUp.current[5].value === '') {
            document.getElementById('month').style.backgroundColor = '#f8f6f9'
            document.getElementById('month').placeholder = 'Mois'
        }
        if (inputsSignUp.current[6].value === '') {
            document.getElementById('year').style.backgroundColor = '#f8f6f9'
            document.getElementById('year').placeholder = 'Année'
        }
    }
    const handleFormSignUp = (event) => {
        event.preventDefault()
        const SwalWelcome = require('sweetalert2')

        const errors = {
            name: "Ceci n'est pas un nom valide",
            firstname: "Ceci n'est pas un prénom  valide",
            email: "Ceci n'est pas une adresse mail valide",
            pass: 'Votre mot de passe doit contenir au minimum 10 caractères, un chiffre, une minuscule, une majusle et un caratère spécial',
            day: "Ceci n'est pas un jour valide",
            month: "Ceci n'est pas un mois valide",
            year: "Ceci n'est pas une année valide",
            type: 'Veuillez sélectionner votre sexe',
            ok: '',
        }
        const name = inputsSignUp.current[0]
        const firstname = inputsSignUp.current[1]
        const email = inputsSignUp.current[2]
        const password = inputsSignUp.current[3]
        const day = inputsSignUp.current[4]
        const month = inputsSignUp.current[5]
        const year = inputsSignUp.current[6]
        const man = inputsSignUp.current[7].checked
        const woman = inputsSignUp.current[8].checked
        let type = ''
        if (man) {
            type = 'Homme'
        }
        if (woman) {
            type = 'Femme'
        }

        if (name.value === '') {
            document.getElementById('name').placeholder = 'Oups ! Aucun nom'
            document.getElementById('name').style.backgroundColor = '#c9bb8e'
        } else if (
            name.value !== '' &&
            !/^([a-zA-Z-_]{2,36})$/g.test(name.value)
        ) {
            alert(errors.name)
        } else if (firstname.value === '') {
            document.getElementById('firstname').placeholder =
                'Oups ! Aucun nom'
            document.getElementById('firstname').style.backgroundColor =
                '#c9bb8e'
        } else if (
            firstname.value !== '' &&
            !/^([a-zA-Z-_]{2,36})$/g.test(firstname.value)
        ) {
            alert(errors.firstname)
        } else if (email.value === '') {
            document.getElementById('Email').placeholder =
                "Re Oups ! Pas d'Email"
        } else if (
            email.value !== '' &&
            !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email.value)
        ) {
            alert(errors.email)
        } else if (password.value === '') {
            document.getElementById('password').placeholder =
                'Re Re oups ! Pas de mot de passe'
        } else if (
            password.value !== '' &&
            !/^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/g.test(
                password.value
            )
        ) {
            alert(errors.pass)
        } else if (day.value === '') {
            document.getElementById('day').placeholder = 'Oups ! Aucun jour'
            document.getElementById('day').style.backgroundColor = '#c9bb8e'
        } else if (
            day.value !== '' &&
            !/^(0[1-9]|[12]\d|3[01])$/g.test(day.value)
        ) {
            alert(errors.day)
        } else if (month.value === '') {
            document.getElementById('month').placeholder = 'Oups ! Aucun mois'
            document.getElementById('month').style.backgroundColor = '#c9bb8e'
        } else if (
            month.value !== '' &&
            !/^(0?[1-9]|1[012])$/g.test(month.value)
        ) {
            alert(errors.month)
        } else if (year.value === '') {
            document.getElementById('year').placeholder = 'Oups ! Aucuna année'
            document.getElementById('year').style.backgroundColor = '#c9bb8e'
        } else if (year.value !== '' && !/^[12][0-9]{3}$/g.test(year.value)) {
            alert(errors.year)
        } else if (type === '') {
            alert(errors.type)
        } else {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: name.value,
                    firstname: firstname.value,
                    email: email.value,
                    password: password.value,
                    day: day.value,
                    month: month.value,
                    year: year.value,
                    type: type,
                }),
            }
            fetch(
                process.env.REACT_APP_ENVIRONMENT === 'production'
                    ? 'https://reseau-social-d-entreprise.herokuapp.com/groupomania/auth/signup'
                    : 'http://localhost:8000/groupomania/auth/signup',
                requestOptions
            )
                .then((response) => response.json())
                .then((data) => {
                    SwalWelcome.fire({
                        title: '',
                        text: 'Votre compte a été enregistré ! Vous pouvez maintenant vous y connecter',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    })
                    navigate('/')
                })
        }
    }

    return (
        <div className="signUp" onClick={resetPlaceholderIfnothing}>
            <h1>Incription</h1>
            <form className="displaySignup" onSubmit={handleFormSignUp}>
                <div className="display-name-firstname">
                    <input
                        name="name"
                        type="text"
                        ref={addInputsSignUp}
                        placeholder="Nom"
                        id="name"
                        onClick={resetInputNameOnclick}
                        required
                    />
                    {/*    {renderErrorMessage('nameErrorSignUp')} */}
                    <input
                        name="firstname"
                        type="text"
                        ref={addInputsSignUp}
                        placeholder="Prénom"
                        id="firstname"
                        onClick={resetInputFirstnameOnclick}
                        required
                    />
                </div>
                <input
                    name="emailSignUp"
                    type="text"
                    ref={addInputsSignUp}
                    placeholder="Numéro de mobile ou Email"
                    id="email"
                    onClick={resetInputEmailOnclick}
                    required
                />
                {/*     {renderErrorMessage('EmailErrorSignUp')} */}
                <input
                    name="passwordSignUp"
                    type="password"
                    ref={addInputsSignUp}
                    placeholder="Nouveau mot de passe"
                    id="passwordSignUp"
                    onClick={resetInputPasswordOnclick}
                    required
                />
                <div className="display-day-month-year">
                    <input
                        name="day"
                        type="number"
                        ref={addInputsSignUp}
                        placeholder="Jour"
                        id="day"
                        onClick={resetInputDayOnclick}
                        required
                    />
                    <input
                        name="month"
                        type="number"
                        ref={addInputsSignUp}
                        placeholder="Mois"
                        id="month"
                        onClick={resetInputMonthOnclick}
                        required
                    />
                    <input
                        name="year"
                        type="number"
                        ref={addInputsSignUp}
                        placeholder="Année"
                        id="year"
                        onClick={resetInputYearOnclick}
                        required
                    />
                </div>
                <div className="display-men-woman">
                    <div className="display-men-input">
                        <div className="display-men">
                            <h2 id="man">Homme</h2>
                        </div>
                        <input
                            name="type"
                            type="radio"
                            ref={addInputsSignUp}
                            id="manRadio"
                        />
                    </div>
                    <div className="display-woman-input">
                        <div className="display-woman">
                            <h2 id="women">Femme</h2>
                        </div>
                        <input
                            name="type"
                            type="radio"
                            ref={addInputsSignUp}
                            id="womenRadio"
                        />
                    </div>
                </div>
                <p className="display-text">
                    Les personnes qui utilisent notre site ont pu importer vos
                    coordonnées sur Groupomania. <span>En savoir plus.</span>
                    <br></br>
                    <br></br>
                    En cliquant sur S'inscrire,vous acceptez nos{' '}
                    <span>Conditions générales</span> Découvrez comment nous
                    receuillons, utilisons et partageaons vos données en lisant
                    notre <span>Politique d'utilisation des cookies.</span>
                    <br></br>
                    Vous recevrez peut-être des notifications par texto de notre
                    part et vous pouvez à tout moment vous{' '}
                    <span>désabonner.</span>
                </p>
                <div className="displayResetSubmit">
                    <input
                        type="submit"
                        value="Je crée mon compte"
                        id="backgroudColorSubmitSignUp"
                    />
                </div>
            </form>
        </div>
    )
}
