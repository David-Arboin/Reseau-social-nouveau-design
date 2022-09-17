/* eslint-disable */
import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {} from '@fortawesome/react-fontawesome'
import { TokenContext } from '../../App'
import { FirstnameContext } from '../../App'
import { TypeContext } from '../../App'
import { UserIdContext } from '../../App'
import { NameContext } from '../../App'
import SignUp from './SignUp'
import imageBackground from './pexels-helena-lopes-708440.jpg'
import logo from './logo1.gif'
import '../../fonts/aubrey/AUBREY1__.TTF'
import '../../fonts/caviar_dreams/CaviarDreams.ttf'

export default function Section() {
    const [errorMessages, setErrorMessages] = useState({})
    const navigate = useNavigate()
    const SwalWelcome = require('sweetalert2')
    const [signUpIsActive, setSignUpIsActive] = useState(false)
console.log(process.env.REACT_APP_ENVIRONMENT);
    const DisplayBlockSignUp = () => {
        setSignUpIsActive(true)
    }
    let [token, setToken] = React.useContext(TokenContext)
    let [firstname, setFirstname] = React.useContext(FirstnameContext)
    let [type, setType] = React.useContext(TypeContext)
    let [userId, setUserId] = React.useContext(UserIdContext)
    let [name, setName] = React.useContext(NameContext)

    useEffect(() => {
        setToken(undefined)
        setUserId('')
    }, [])

    const errors = {
        name: "Ceci n'est pas un nom ou pseudonyme valide",
        email: "Ceci n'est pas une adresse mail valide",
        pass: 'Votre mot de passe doit contenir au minimum 10 caractères, un chiffre, une minuscule, une majusle et un caratère spécial',
        ok: '',
    }

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        )

    //--Récupération de la saisie des inputs de connexion d'un compte existant
    const inputsSignIn = useRef([])
    const addInputsSignIn = (el) => {
        inputsSignIn.current.push(el)
    }

    //*************************** SignIn
    const handleFormSignIn = (event, props) => {
        event.preventDefault()
        const email = inputsSignIn.current[0]
        const password = inputsSignIn.current[1]

        //--S'il n'y a pas d'Email : on alerte l'utilisateur qu'il doit saisir un mail
        if (email.value === '') {
            document.getElementById('emailSignIn').placeholder =
                "Oups ! Pas d'email"
            //--S'il n'y a pas de mot de passe : on alerte l'utilisateur qu'il doit en saisir un
        } else if (
            email.value !== '' &&
            !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email.value)
        ) {
            setErrorMessages({
                name: 'emailErrorSignIn',
                message: errors.email,
            })
        } else if (password.value === '') {
            document.getElementById('passwordSignIn').placeholder =
                'Re oups ! Pas de mot de passe'
        } else if (
            password.value !== '' &&
            !/^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/g.test(
                password.value
            )
        ) {
            setErrorMessages({ name: 'passErrorSignIn', message: errors.pass })
        } else {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    email: email.value,
                    password: password.value,
                }),
            }
            fetch(process.env.REACT_APP_ENVIRONMENT === 'production' ?
                'https://reseau-social-d-entreprise.herokuapp.com/groupomania/auth/login' :
                'http://localhost:8000/groupomania/auth/login'
                ,
                requestOptions
            )
                .then((response) => response.json())
                .then((data) => {
                    setToken(data.token)
                    setFirstname(data.firstname)
                    setType(data.type)
                    setUserId(data.userId)
                    setName(data.name)

                    if (data.userId === undefined) {
                        SwalWelcome.fire({
                            title: '',
                            text: 'Veuillez créer un nouveau compte',
                            icon: 'warning',
                            confirmButtonText: 'Ok',
                        })
                    } else {
                        navigate('/homePage')
                    }
                })
                .catch(function (error) {
                    SwalWelcome.fire({
                        title: '',
                        text: 'Il y a un problème de connexion',
                        icon: 'warning',
                        confirmButtonText: 'Ok',
                    })
                    navigate('/')
                })
        }
    }

    const dispalyBlockSignUp = () => {
        if(signUpIsActive){
            setSignUpIsActive(false)
        }
    }
    return (
        <section>
           {signUpIsActive ? <SignUp />: ''}
             
            <div className="display-image-background" style={{ opacity: signUpIsActive ? '0.3' : '1'}} onClick={dispalyBlockSignUp}>
                <img
                    src={imageBackground}
                    alt="Fond d'écran avec trois personnes en pleine crise de rire"
                />
            </div>
            <div className="display-logo" style={{ opacity: signUpIsActive ? '0.3' : '1'}} onClick={dispalyBlockSignUp}>
                <img src={logo} alt="logo du réseau social Groupomania" />
            </div>
            {/* *******************************************SignIn*************************************************  */}
            <div className="display-sign-in" style={{ opacity: signUpIsActive ? '0.3' : '1'}} onClick={dispalyBlockSignUp}>
                <div className="signIn">
                    <form className="displayLogin" onSubmit={handleFormSignIn}>
                        <input
                            name="emailSignIn"
                            type="email"
                            ref={addInputsSignIn}
                            id="emailSignIn"
                            placeholder="monemail@monservicedemessagerie.com"
                        />
                        {renderErrorMessage('emailErrorSignIn')}
                        <input
                            name="passwordSignIn"
                            type="password"
                            ref={addInputsSignIn}
                            id="passwordSignIn"
                            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                        />
                        {renderErrorMessage('passErrorSignIn')}
                        <div className="displayResetSubmit">
                            <input
                                type="submit"
                                value="Se connecter"
                                id="backgroudColorSubmitLogin"
                            />
                        </div>
                    </form>

                    <div className="new-compte">
                        <input
                            type="button"
                            value="Nouveau compte"
                            onClick={DisplayBlockSignUp}
                            id="background-color-button-for-sign-up"
                        />
                    </div>
                </div>
                <p className="messageTeamTechnique">
                    Avec <span>Groupomania</span> restez connectez avec vos proches.
                </p>
            </div>
        </section>
    )
}
