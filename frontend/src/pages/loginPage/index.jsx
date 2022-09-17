/* eslint-disable */
import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {} from '@fortawesome/react-fontawesome'
import { TokenContext } from '../../App'
<<<<<<< HEAD
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
=======
import { UserIdContext } from '../../App'
import { NameContext } from '../../App'

export default function Section() {
    const [errorMessages, setErrorMessages] = useState({})
    const [signInInAndsignUpOrSignUp, setSignInInAndsignUpOrSignUp] =
        useState(true)
    const navigate = useNavigate()
    const SwalWelcome = require('sweetalert2')

    let [token, setToken] = React.useContext(TokenContext)
    let [userId, setUserId] = React.useContext(UserIdContext)
    let [name, setName] = React.useContext(NameContext)

    useEffect(() => { 
        setToken(undefined)
        setUserId('')
    },[])

>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a

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

<<<<<<< HEAD
=======
    //--Bouton Tout effacer pour resaisir le mail et le mot de passe sans avoir à les supprimer à "la main"

    const resetedSignIn = (e) => {
        document.getElementById('emailSignIn').innerHTML = ''
        document.getElementById('passwordSignIn').innerHTML = ''
        document.getElementById('emailSignIn').placeholder = ''
        document.getElementById('passwordSignIn').placeholder = ''
        setErrorMessages({ name: 'ok', message: errors.ok })
    }

    const resetedSignUp = (e) => {
        document.getElementById('nameSignUp').innerHTML = ''
        document.getElementById('emailSignUp').innerHTML = ''
        document.getElementById('passwordSignUp').innerHTML = ''
        document.getElementById('nameSignUp').placeholder = ''
        document.getElementById('emailSignUp').placeholder = ''
        document.getElementById('passwordSignUp').placeholder = ''
        setErrorMessages({ name: 'ok', message: errors.ok })
    }

>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
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
<<<<<<< HEAD
            fetch(process.env.NODE_ENV === 'production' ?
                'https://reseau-social-d-entreprise.herokuapp.com/groupomania/auth/login' :
                'http://localhost:8000/groupomania/auth/login'
                ,
=======
            fetch(
                'https://reseau-social-d-entreprise.herokuapp.com/groupomania/auth/login',
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                requestOptions
            )
                .then((response) => response.json())
                .then((data) => {
                    setToken(data.token)
<<<<<<< HEAD
                    setFirstname(data.firstname)
                    setType(data.type)
=======
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                    setUserId(data.userId)
                    setName(data.name)

                    if (data.userId === undefined) {
                        SwalWelcome.fire({
                            title: '',
<<<<<<< HEAD
                            text: 'Veuillez créer un nouveau compte',
=======
                            text: 'Veuillez vous inscrire sur la partie de droite',
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
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
<<<<<<< HEAD

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
=======
    //************************************SignUp
    const inputsSignUp = useRef([])
    const addInputsSignUp = (el) => {
        inputsSignUp.current.push(el)
    }

    const handleFormSignUp = (event) => {
        event.preventDefault()

        const name = inputsSignUp.current[0]
        const email = inputsSignUp.current[1]
        const password = inputsSignUp.current[2]

        if (name.value === '') {
            document.getElementById('nameSignUp').placeholder =
                'Oups ! Ni nom ni pseudo'
        } else if (
            name.value !== '' &&
            !/^([a-zA-Z0-9-_]{2,36})$/g.test(name.value)
        ) {
            setErrorMessages({
                name: 'nameErrorSignUp',
                message: errors.name,
            })
        } else if (email.value === '') {
            document.getElementById('emailSignUp').placeholder =
                "Re Oups ! Pas d'email"
        } else if (
            email.value !== '' &&
            !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email.value)
        ) {
            setErrorMessages({
                name: 'emailErrorSignUp',
                message: errors.email,
            })
        } else if (password.value === '') {
            document.getElementById('passwordSignUp').placeholder =
                'Re Re oups ! Pas de mot de passe'
        } else if (
            password.value !== '' &&
            !/^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/g.test(
                password.value
            )
        ) {
            setErrorMessages({ name: 'passErrorSignUp', message: errors.pass })
        } else {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    password: password.value,
                }),
            }
            fetch(
                'https://reseau-social-d-entreprise.herokuapp.com/groupomania/auth/signup',
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
                    setSignInInAndsignUpOrSignUp(false)
                })
        }
    }

    return signInInAndsignUpOrSignUp ? (
        <section>
            {/* *******************************************SignIn*************************************************  */}

            <div className="signIn">
                <h1>Je suis ravis de déjà avoir un compte !</h1>
                <h1>Je me connecte juste dessous</h1>

                <form className="displayLogin" onSubmit={handleFormSignIn}>
                        <label htmlFor="emailSignIn">Email</label>
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                        <input
                            name="emailSignIn"
                            type="email"
                            ref={addInputsSignIn}
                            id="emailSignIn"
<<<<<<< HEAD
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
=======
                            placeholder=""
                        />
                    {renderErrorMessage('emailErrorSignIn')}
                    <label htmlFor="passwordSignIn">Mot de passe</label>
                    <input
                        name="passwordSignIn"
                        type="password"
                        ref={addInputsSignIn}
                        id="passwordSignIn"
                    />
                    {renderErrorMessage('passErrorSignIn')}
                    <div className="displayResetSubmit">
                        <input
                            type="reset"
                            value="Tout effacer"
                            onClick={resetedSignIn}
                        />
                        <input
                            type="submit"
                            value="Je me connecte"
                            onClick={() => setSignInInAndsignUpOrSignUp(true)}
                            id="backgroudColorSubmitLogin"
                        />
                    </div>
                </form>
            </div>
            <div className="separator"></div>
            {/* *******************************************SignUp*************************************************  */}
            <div className="signUp">
                <h1>Je n'ai pas encore de compte !</h1>
                <h1>Je m'inscrit en un éclair</h1>

                <form className="displaySignup" onSubmit={handleFormSignUp}>
                    <label htmlFor="nameSignUp" className="widthTextNameOrPseeudo">
                        Nom complet ou pseudonyme
                    </label>
                    <input
                        name="nameSignUp"
                        type="text"
                        ref={addInputsSignUp}
                        id="nameSignUp"
                    />
                    {renderErrorMessage('nameErrorSignUp')}
                    <label htmlFor="emailSignUp">Email</label>
                    <input
                        name="emailSignUp"
                        type="email"
                        ref={addInputsSignUp}
                        id="emailSignUp"
                    />
                    {renderErrorMessage('emailErrorSignUp')}
                    <label htmlFor="passwordSignUp">Mot de passe</label>
                    <input
                        name="passwordSignUp"
                        type="password"
                        ref={addInputsSignUp}
                        id="passwordSignUp"
                    />
                    {renderErrorMessage('passErrorSignUp')}
                    <div className="displayResetSubmit">
                        <input
                            name="resetLogin"
                            type="reset"
                            value="Tout effacer"
                            onClick={resetedSignUp}
                        />
                        <input
                            type="submit"
                            value="Je crée mon compte"
                            id="backgroudColorSubmitSignUp"
                        />
                    </div>
                </form>
            </div>
            <p className="messageTeamTechnique">
                Bienvenue sur le nouveau réseau social de Groupomania ! Vous
                utilisé la version bêta de l'application. Si vous rencontrez des
                problèmes, merci de nous en faire part à
                support@groupomania.complet Excellent journée.
            </p>
        </section>
    ) : (
        <section>
            {/* *******************************************SignIn*************************************************  */}
            <div className="signInAfterSignUp">
                <h1>Mon compte vient d'être créé à l'instant !</h1>
                <h1>Je me connecte juste dessous</h1>
                <form className="displayLogin" onSubmit={handleFormSignIn}>
                    <label htmlFor="emailSignIn">Email</label>
                        <input
                            name="email"
                            type="text"
                            ref={addInputsSignIn}
                            id="emailSignIn"
                        />
                    {renderErrorMessage('emailErrorSignIn')}
                    <label htmlFor="passwordSignIn">Mot de passe</label>
                    <input
                        name="password"
                        type="password"
                        ref={addInputsSignIn}
                        id="passwordSignIn"
                    />
                    {renderErrorMessage('passErrorSignIn')}
                    <div className="displayResetSubmit">
                        <input
                            type="reset"
                            value="Tout effacer"
                            onClick={resetedSignIn}
                        />
                        <input
                            type="submit"
                            value="Je me connecte"
                            onClick={() => setSignInInAndsignUpOrSignUp(false)}
                            id="backgroudColorSubmitSignIn"
                        />
                    </div>
                </form>
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
            </div>
        </section>
    )
}
