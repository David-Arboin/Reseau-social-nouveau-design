/* eslint-disable */

import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
import { TokenContext } from '../../App'
import { FirstnameContext } from '../../App'
import { TypeContext } from '../../App'
import { NameContext } from '../../App'
import PostCard from './PostCart'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlassArrowRight } from '@fortawesome/free-solid-svg-icons'
import logo from '../loginPage/logo1.gif'
import avatarHomme from './avatar-homme.png'
import avatarFemme from './avatar-femme.jpg'

export default function Section() {
    const production =
        'https://reseau-social-d-entreprise.herokuapp.com/groupomania/posts/'
    const developpement = 'http://localhost:8000/groupomania/posts/'
    const SwalWelcome = require('sweetalert2')

    let [token, setToken] = React.useContext(TokenContext)
    let [firstname, setFirstname] = React.useContext(FirstnameContext)
    let [type, setType] = React.useContext(TypeContext)
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState(null)
    //**************Affichage des posts

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
    }
    useEffect(() => {
        setIsLoading(true)
        fetch(
            process.env.REACT_APP_ENVIRONMENT === 'production' ? production : developpement,
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                const posts = data.slice().sort(function (a, b) {
                    return new Date(b.createdAt) - new Date(a.createdAt)
                })
                setPosts(posts)
                SwalWelcome.fire({
                    title: `Bonjour ${firstname} !`,
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                })
                setIsLoading(false)
            })
    }, [])

    //****************Création d'un post */

    const textAreaAndImage = useRef([])
    const addTextAreaAndImage = (el) => {
        textAreaAndImage.current.push(el)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.target
        const formData = new FormData()
        const requestOptionsCreate = {
            method: 'POST',
            headers: { Authorization: 'Bearer ' + token },
            body: formData,
        }

        if (form[0].value === '' && form[1].files[0] === undefined) {
            Swal.fire('Vous avez oublié de saisir un texte et/ou un image')
        } else if (form[0].value === '' && form[1].files[0] !== undefined) {
            formData.append('image', form[1].files[0])
            formData.append('post', 'Aucun texte saisie')
            formData.append('firstname', firstname)
            formData.append('type', type)
            setIsLoading(true)

            fetch(
                process.env.REACT_APP_ENVIRONMENT === 'production'
                    ? production
                    : developpement,
                requestOptionsCreate
            )
                .then((response) => response.json())
                .then((data) => {
                    const requestOptions = {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + token,
                        },
                    }
                    const newArrayPosts = fetch(
                        process.env.REACT_APP_ENVIRONMENT === 'production'
                            ? production
                            : developpement,
                        requestOptions
                    )
                        .then((response) => response.json())
                        .then((data) => {
                            const posts = data.slice().sort(function (a, b) {
                                return (
                                    new Date(b.createdAt) -
                                    new Date(a.createdAt)
                                )
                            })
                            setPosts(posts)
                            form.reset()
                            setIsLoading(false)
                        })
                })
        } else if (form[0].value !== '' && form[1].files[0] === undefined) {
            formData.append('post', form[0].value)
            formData.append('firstname', firstname)
            formData.append('type', type)
            setIsLoading(true)

            fetch(
                process.env.REACT_APP_ENVIRONMENT === 'production'
                    ? production
                    : developpement,
                requestOptionsCreate
            )
                .then((response) => response.json())
                .then((data) => {
                    const requestOptions = {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + token,
                        },
                    }
                    const newArrayPosts = fetch(
                        process.env.REACT_APP_ENVIRONMENT === 'production'
                            ? production
                            : developpement,
                        requestOptions
                    )
                        .then((response) => response.json())
                        .then((data) => {
                            const posts = data.slice().sort(function (a, b) {
                                return (
                                    new Date(b.createdAt) -
                                    new Date(a.createdAt)
                                )
                            })
                            setPosts(posts)
                            form.reset()
                            setIsLoading(false)
                        })
                })
        } else if (form[0].value !== '' && form[1].files[0] !== undefined) {
            formData.append('post', form[0].value)
            formData.append('image', form[1].files[0])
            formData.append('firstname', firstname)
            formData.append('type', type)
            setIsLoading(true)

            fetch(
                process.env.REACT_APP_ENVIRONMENT === 'production'
                    ? production
                    : developpement,
                requestOptionsCreate
            )
                .then((response) => response.json())
                .then((data) => {
                    const requestOptions = {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + token,
                        },
                    }
                    const newArrayPosts = fetch(
                        process.env.REACT_APP_ENVIRONMENT === 'production'
                            ? production
                            : developpement,
                        requestOptions
                    )
                        .then((response) => response.json())
                        .then((data) => {
                            const posts = data.slice().sort(function (a, b) {
                                return (
                                    new Date(b.createdAt) -
                                    new Date(a.createdAt)
                                )
                            })
                            setPosts(posts)
                            form.reset()
                            setIsLoading(false)
                        })
                })
        }
    }

    useEffect(() => {
        if (!posts) {
            setIsLoading(true)
        } else {
            setIsLoading(false)
        }
    }, [posts])

    return isLoading ? (
        <div className="spinner-container">
            <div className="loading-spinner"></div>
        </div>
    ) : (
        <section className="displaySection">
            <div className="display-logo">
                <img src={logo} alt="logo du réseau social Groupomania" />
            </div>

            <div className="search">
                <form
                    className="rechercher"
                    method="GET"
                    action="rechercher.php"
                >
                    <input type="text" placeholder="Rechercher un ami" />
                    <button type="submit">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlassArrowRight}
                            className="inputCamera"
                            size="2x"
                        ></FontAwesomeIcon>
                    </button>
                </form>
            </div>
            <div className="displayCreatePost">
                <form onSubmit={handleSubmit}>
                    <textarea
                        id="post"
                        name="post"
                        type="text"
                        className="displayTextArea"
                        ref={addTextAreaAndImage}
                        placeholder=" Dites quelque chose"
                    ></textarea>
                    <div className="displayinputImageAndButtonPublish">
                        <div className="displayLabelAndInputImage">
                            <label htmlFor="image" id="colorLabelChooseImage">
                                <FontAwesomeIcon
                                    icon={faCamera}
                                    className="inputCamera"
                                    size="2x"
                                ></FontAwesomeIcon>
                            </label>
                            <input
                                name="image"
                                type="file"
                                accept="image/png, image/jpeg"
                                ref={addTextAreaAndImage}
                                id="image"
                                alt="image poster par un utilisateur"
                            />
                        </div>
                        <input
                            className="styleButton"
                            type="submit"
                            value="Publier"
                            id="publish"
                        ></input>
                    </div>
                </form>

                <div className="displayPosts">
                    {posts.map((post, index) => (
                        <PostCard data={{ post, setPosts }} />
                    ))}
                </div>
            </div>

            <div className="myParameters">
                <img
                    src={type === 'Homme' ? avatarHomme : avatarFemme}
                    alt="Photo de profil"
                />
                <div className="myAccount">
                    <button>Mon compte</button>
                </div>
                <div className="myFriends">
                    <button>Mes amis</button>
                </div>
                <div className="myImages">
                    <button>Mes photos</button>
                </div>
            </div>
        </section>
    )
}
