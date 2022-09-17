/* eslint-disable */

<<<<<<< HEAD
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
=======
import React, {
    useState,
    useEffect
} from 'react'
import { useRef } from 'react'
import { TokenContext } from '../../App'
import { NameContext } from '../../App'
import PostCard from './PostCart'
import Swal from 'sweetalert2'

export default function Section() {
    const SwalWelcome = require('sweetalert2')
    
    let [token, setToken] = React.useContext(TokenContext)
    let [name, setName] = React.useContext(NameContext)

    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState(null)

>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
    //**************Affichage des posts

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
    }
<<<<<<< HEAD
    useEffect(() => {
        setIsLoading(true)
        fetch(
            process.env.NODE_ENV === 'production' ? production : developpement,
            requestOptions
        )
=======

    useEffect(() => {
        setIsLoading(true)
        fetch('https://reseau-social-d-entreprise.herokuapp.com/groupomania/posts', requestOptions)
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
            .then((response) => response.json())
            .then((data) => {
                const posts = data.slice().sort(function (a, b) {
                    return new Date(b.createdAt) - new Date(a.createdAt)
                })
                setPosts(posts)
                SwalWelcome.fire({
<<<<<<< HEAD
                    title: `Bonjour ${firstname} !`,
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                })
                setIsLoading(false)
=======
                    title: `Bonjour ${name} !`,
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                setIsLoading(false)

>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
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
<<<<<<< HEAD
            formData.append('firstname', firstname)
            formData.append('type', type)
            setIsLoading(true)

            fetch(
                process.env.NODE_ENV === 'production'
                    ? production
                    : developpement,
=======
            formData.append('name', name)
            setIsLoading(true)

            fetch(
                'https://reseau-social-d-entreprise.herokuapp.com/groupomania/posts',
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
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
<<<<<<< HEAD
                        process.env.NODE_ENV === 'production'
                            ? production
                            : developpement,
=======
                        'https://reseau-social-d-entreprise.herokuapp.com/groupomania/posts',
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
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
<<<<<<< HEAD
            formData.append('post', form[0].value)
            formData.append('firstname', firstname)
            formData.append('type', type)
            setIsLoading(true)

            fetch(
                process.env.NODE_ENV === 'production'
                    ? production
                    : developpement,
=======
            console.log('ICI')
            formData.append('post', form[0].value)
            formData.append('name', name)
        setIsLoading(true)

            fetch(
                'https://reseau-social-d-entreprise.herokuapp.com/groupomania/posts',
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
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
<<<<<<< HEAD
                        process.env.NODE_ENV === 'production'
                            ? production
                            : developpement,
=======
                        'https://reseau-social-d-entreprise.herokuapp.com/groupomania/posts',
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
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
<<<<<<< HEAD
            formData.append('firstname', firstname)
            formData.append('type', type)
            setIsLoading(true)

            fetch(
                process.env.NODE_ENV === 'production'
                    ? production
                    : developpement,
=======
            formData.append('name', name)
            setIsLoading(true)

            fetch(
                'https://reseau-social-d-entreprise.herokuapp.com/groupomania/posts',
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
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
<<<<<<< HEAD
                        process.env.NODE_ENV === 'production'
                            ? production
                            : developpement,
=======
                        'https://reseau-social-d-entreprise.herokuapp.com/groupomania/posts',
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
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
<<<<<<< HEAD
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
=======
        <div className="loading-spinner"></div>
      </div>
    ) : (
        <section className="displaySection">
            <div className="displayCreatePost">
                <div className="hello">Bienvenue {name} 🙂</div>
                <div className="displayTitleCreatePost">
                    <label for="post" className="titleCreatePost">Créer un post</label>
                </div>
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                <form onSubmit={handleSubmit}>
                    <textarea
                        id="post"
                        name="post"
                        type="text"
                        className="displayTextArea"
                        ref={addTextAreaAndImage}
<<<<<<< HEAD
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
=======
                        placeholder="Si vous le souhaitez, vous pouvez saisir du texte dans cette zone et choisir un image avec le boutton ci-dessous"
                    ></textarea>
                    <div className="displayinputImageAndButtonPublish">
                        <div className='displayLabelAndInputImage'>
                        <label for="image" id='colorLabelChooseImage'>Choisi une image</label>
                        <input
                            name="image"
                            type="file"
                            accept="image/png, image/jpeg"
                            ref={addTextAreaAndImage}
                            id="image"
                            alt="image poster par un utilisateur"
                        />
                        </div>
                        <input className="styleButton" type="submit" value="Envoyer"></input>
                    </div>
                </form>
            </div>

            <div className="displayPosts">
                {posts.map((post, index) => (
                    <PostCard data={{ post, setPosts }} />
                ))}
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
            </div>
        </section>
    )
}
