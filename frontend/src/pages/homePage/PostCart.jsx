/* eslint-disable */

import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { TokenContext, UserIdContext, NameContext } from '../../App'
<<<<<<< HEAD
import avatarHomme from './avatar-homme.png'
import avatarFemme from './avatar-femme.jpg'
import { FirstnameContext } from '../../App'
import { TypeContext } from '../../App'

const PostCard = (props) => {
    const production =
        'https://reseau-social-d-entreprise.herokuapp.com/groupomania/posts/'
    const developpement = 'http://localhost:8000/groupomania/posts/'

    const Swal = require('sweetalert2')
    const { post, setPosts } = props.data
    const { comments, setComments } = useState()
    let [token, setToken] = React.useContext(TokenContext)
    let [userId, setUserId] = React.useContext(UserIdContext)
    let [name, setName] = React.useContext(NameContext)
    let [firstname, setFirstname] = React.useContext(FirstnameContext)
    let [type, setType] = React.useContext(TypeContext)

    //--Marge sous le premier post

    const [modification, setModification] = useState(false)

=======

const PostCard = (props) => {
    const Swal = require('sweetalert2')           
    const { post, setPosts } = props.data

    let [token, setToken] = React.useContext(TokenContext)
    let [userId, setUserId] = React.useContext(UserIdContext)
    let [name, setName] = React.useContext(NameContext)

    const [modification, setModification] = useState(false)
         
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
    //*****************Modification d'un post */
    //--Récupération de la saisie de textArea et de l'image
    const textAreaAndImage = useRef([])
    const addTextAreaAndImage = (el) => {
        textAreaAndImage.current.push(el)
    }

    const sendModification = (event) => {
        event.preventDefault()
        const form = event.target
        const postId = form[1].id
        const formData = new FormData()
        const requestOptionsModifiyPost = {
            method: 'PUT',
            headers: { Authorization: 'Bearer ' + token },
            body: formData,
        }

        if (form[0].value === '' && form[2].files[0] === undefined) {
            Swal.fire('Vous avez oublié de saisir un texte et/ou un image')
        } else if (form[0].value === '' && form[2].files[0] !== undefined) {
            formData.append('image', form[2].files[0])

            fetch(
<<<<<<< HEAD
                process.env.NODE_ENV === 'production'
                    ? production + '/' + postId
                    : developpement + '/' + postId,
=======
                'https://reseau-social-d-entreprise.herokuapp.com/groupomania/posts/' + postId,
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                requestOptionsModifiyPost
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
<<<<<<< HEAD
                                return (
                                    new Date(b.createdAt) -
                                    new Date(a.createdAt)
                                )
=======
                                return new Date(b.createdAt) - new Date(a.createdAt)
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                            })
                            setPosts(posts)
                            if (posts) {
                                setModification(false)
                            }
                        })
                })
        } else if (form[0].value !== '' && form[2].files[0] === undefined) {
            formData.append('post', form[0].value)

            fetch(
<<<<<<< HEAD
                process.env.NODE_ENV === 'production'
                    ? production + '/' + postId
                    : developpement + '/' + postId,
=======
                'https://reseau-social-d-entreprise.herokuapp.com/groupomania/posts/' + postId,
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                requestOptionsModifiyPost
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
<<<<<<< HEAD
                                return (
                                    new Date(b.createdAt) -
                                    new Date(a.createdAt)
                                )
=======
                                return new Date(b.createdAt) - new Date(a.createdAt)
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                            })
                            setPosts(posts)
                            if (posts) {
                                setModification(false)
                            }
                        })
                })
        } else if (form[0].value !== '' && form[2].files[0] !== undefined) {
            formData.append('post', form[0].value)
            formData.append('image', form[2].files[0])

            fetch(
<<<<<<< HEAD
                process.env.NODE_ENV === 'production'
                    ? production + '/' + postId
                    : developpement + '/' + postId,
=======
                'https://reseau-social-d-entreprise.herokuapp.com/groupomania/posts/' + postId,
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                requestOptionsModifiyPost
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
<<<<<<< HEAD
                                return (
                                    new Date(b.createdAt) -
                                    new Date(a.createdAt)
                                )
=======
                                return new Date(b.createdAt) - new Date(a.createdAt)
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                            })
                            setPosts(posts)
                            if (posts) {
                                setModification(false)
                            }
                        })
                })
        }
    }

    //****************Suppression d'un post
    const handleDelete = async (event) => {
        event.preventDefault()
        let target = event.target.id
<<<<<<< HEAD
=======
        console.log(target)
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
        const requestOptionsDelete = {
            method: 'DELETE',
            headers: { Authorization: 'Bearer ' + token },
        }
        fetch(
<<<<<<< HEAD
            process.env.NODE_ENV === 'production'
                ? production + '/' + target
                : developpement + '/' + target,
=======
            'https://reseau-social-d-entreprise.herokuapp.com/groupomania/posts/' + target,
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
            requestOptionsDelete
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
                            return new Date(b.createdAt) - new Date(a.createdAt)
                        })
                        setPosts(posts)
                    })
            })
    }

    //*************************Like
    const handleLike = async (event) => {
        let postId = event

        const arrayUsersLiked = post.usersLiked
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        }

        if (!arrayUsersLiked.includes(userId)) {
            const requestOptionsLike = {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userId,
                    like: 1,
                }),
            }

            await fetch(
<<<<<<< HEAD
                process.env.NODE_ENV === 'production'
                    ? production + '/' + postId
                    : developpement + '/' + postId,
                +'/like',
=======
                'https://reseau-social-d-entreprise.herokuapp.com/groupomania/posts/' + postId + '/like',
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                requestOptionsLike
            )
                .then((response) => response.json())
                .then((data) => {
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
<<<<<<< HEAD
                                return (
                                    new Date(b.createdAt) -
                                    new Date(a.createdAt)
                                )
=======
                                return new Date(b.createdAt) - new Date(a.createdAt)
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                            })
                            setPosts(posts)
                        })
                })
        } else {
            const requestOptionsLike = {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userId,
                    like: 0,
                }),
            }

            await fetch(
<<<<<<< HEAD
                process.env.NODE_ENV === 'production'
                    ? production + '/' + postId + '/like'
                    : developpement + '/' + postId + '/like',
=======
                'https://reseau-social-d-entreprise.herokuapp.com/groupomania/posts/' + postId + '/like',
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                requestOptionsLike
            )
                .then((response) => response.json())
                .then((data) => {
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
<<<<<<< HEAD
                                return (
                                    new Date(b.createdAt) -
                                    new Date(a.createdAt)
                                )
=======
                                return new Date(b.createdAt) - new Date(a.createdAt)
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                            })
                            setPosts(posts)
                        })
                })
        }
    }
<<<<<<< HEAD
    //-- Commentaires *****************************************
    const newComment = useRef([])
    const addNewComment = (el) => {
        newComment.current.push(el)
    }

    const handleComment = async (e) => {
        e.preventDefault()
        let idPost = e.target.id.split(' ')
        let comment = document.getElementById('text-new-comment').value

        const requestOptionsNewComment = {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                comment,
                comment,
                firstname,
                firstname,
                type,
                type,
            }),
        }
        await fetch(
            process.env.NODE_ENV === 'production'
                ? production + '/' + idPost[1] + '/comment'
                : developpement + '/' + idPost[1] + '/comment',
            requestOptionsNewComment
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
                const newArrayComments = fetch(
                    process.env.NODE_ENV === 'production'
                        ? production + '/' + idPost[1] + '/comments'
                        : developpement + '/' + idPost[1] + '/comments',
                    requestOptions
                )
                    .then((response) => response.json())
                    .then((data) => {

                        const newArrayPosts = fetch(
                            process.env.NODE_ENV === 'production'
                                ? production
                                : developpement,
                            requestOptions
                        )
                            .then((response) => response.json())
                            .then((data) => {
                                const posts = data
                                    .slice()
                                    .sort(function (a, b) {
                                        return (
                                            new Date(b.createdAt) -
                                            new Date(a.createdAt)
                                        )
                                    })
                                setPosts(posts)
                            })
                    })
            })
    }

    return post.userId === userId || name === process.env.REACT_APP_NAME ? (
=======

    return post.userId === userId ||
        name === process.env.REACT_APP_NAME ? (
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
        modification ? (
            <div className="displayPost">
                <div className="conteneur">
                    <h1 className="dispayNamePoster">
                        Mode modification activé
                    </h1>
<<<<<<< HEAD
                    <form
                        onSubmit={sendModification}
                        className="displayTexteareaModificationMode"
                    >
=======
                    <form onSubmit={sendModification} className="displayTexteareaModificationMode">
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                        <textarea
                            name="post"
                            type="text"
                            className="displayTextAreaToModif"
                            ref={addTextAreaAndImage}
                            placeholder="Si vous le souhaitez, vous pouvez saisir du texte dans cette zone et choisir un image avec le boutton ci-dessous"
                        ></textarea>
                        <div className="displayButtons">
                            <input
                                id={post._id}
                                className="styleButton fontSizeSend"
                                type="submit"
                                name="envoyer"
                            ></input>
                            <input
                                name="image"
                                type="file"
                                ref={addTextAreaAndImage}
                                accept="image/png, image/jpeg"
                                alt="image poster par un utilisateur"
                                id="image"
                            />
                            <button
                                className="styleButton fontSizeAnnulation"
                                onClick={() => setModification(false)}
                            >
                                Annuler
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        ) : (
<<<<<<< HEAD
            <div data-set={post._id} className="displayPost" key={post._id}>
                <div className="conteneur" key={post._id + post._id}>
                    <div
                        className="displayTextAndImage"
                        key={post._id + post._id + post._id}
                    >
                        <h1 className="dispayAvatarPoster">
                            <img
                                src={
                                    post.type === 'Homme'
                                        ? avatarHomme
                                        : avatarFemme
                                }
                                alt="Avatar du poster"
                            />
                        </h1>
                        <div className="display-name-poster-and-text">
                            <h2 className="namePoster">{post.firstname} :</h2>
                            <p className="displayText">{post.post}</p>
                        </div>
                    </div>
                    <div
                        className="displayImage"
                        key={post._id + post._id + post._id + post._id}
                    >
                        <img
                            src={post.imageUrl}
                            alt=""
                            align="right"
                            className="image"
                        />
                    </div>
                    <div
                        className="display-comments" /* key={Math. rand() * 2} */
                    >
                        {post.comments
                            .map((comment, index) => (
                                <div className="display-comment">
                                    <h1 className="dispay-avatar-commentator">
                                        <img
                                            src={
                                                comment.type === 'Homme'
                                                    ? avatarHomme
                                                    : avatarFemme
                                            }
                                            alt="Avatar du commenteur"
                                        />
                                    </h1>
                                    <div className="display-name-commentator-and-text">
                                        <h2 className="name-commentator">
                                            {comment.firstname} :
                                        </h2>
                                        <p className="display-commentator-text">
                                            {comment.comment}
                                        </p>
                                    </div>
                                </div>
                            ))
                            .reverse()}
                        <div className="display-new-comment">
                            <div className="smiley">😊</div>
                            <input
                                type="text"
                                id="text-new-comment"
                                placeholder="Ajouter un commentaire"
                                ref={addNewComment}
                            />
                            <button
                                id={
                                    'publish-new-commnent' + ' ' + `${post._id}`
                                }
                                onClick={(e) => handleComment(e)}
                            >
                                Commenter
                            </button>
                        </div>
                    </div>
                </div>
                {/*                 <div className="displayButtons">
=======
            <div data-set={post._id} className="displayPost">
                <div className="conteneur">
                    <h1 className="dispayNamePoster">{post.name === name ? "Votre post" : post.name}</h1>
                    <h1 className="dispayNamePoster">{`Publié le ${new Date(
                        post.createdAt
                    ).toLocaleDateString('fr')} à ${new Date(
                        post.createdAt
                    ).toLocaleTimeString('fr')}`}</h1>
                    <div className="displayTextAndImage">
                        <div className="displayImage">
                            <img
                                src={post.imageUrl}
                                alt=""
                                align="right"
                                className="image"
                            />
                            <p className="displayText">{post.post}</p>
                        </div>
                    </div>
                </div>
                <div className="displayButtons">
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                    <button
                        id={post._id}
                        className="styleButton widthButtonModify"
                        onClick={() => setModification(true)}
                    >
                        Modifier
                    </button>

                    <div className="displayLikes">
                        <div className="displayLikesAndNumberLikes">
                            {!post.usersLiked.includes(userId) ? (
                                <FontAwesomeIcon
                                    icon={faThumbsUp}
                                    onClick={() => handleLike(post._id)}
                                    className="likeOff"
                                ></FontAwesomeIcon>
                            ) : (
                                <FontAwesomeIcon
                                    icon={faThumbsUp}
                                    onClick={() => handleLike(post._id)}
                                    className="likeOn"
                                ></FontAwesomeIcon>
                            )}
                            <p className="numberOfLikes">{post.likes}</p>
                        </div>
                    </div>

                    <button
                        id={post._id}
                        className="styleButton widthButtonSendModification"
                        onClick={(e) => handleDelete(e)}
                    >
                        Supprimer
                    </button>
<<<<<<< HEAD
                </div> */}
            </div>
        )
    ) : (
        <div data-set={post._id} className="displayPost">
            <div className="conteneur">
                <div className="displayTextAndImage">
                    <h1 className="dispayAvatarPoster">
                        <img
                            src={
                                post.type === 'Homme'
                                    ? avatarHomme
                                    : avatarFemme
                            }
                            alt="Avatar du poster"
                        />
                    </h1>
                    <div className="display-name-poster-and-text">
                        <h2 className="namePoster">{post.firstname} :</h2>
                        <p className="displayText">{post.post}</p>
                    </div>
                </div>
                <div className="displayImage">
                    <img
                        src={post.imageUrl}
                        alt=""
                        align="right"
                        className="image"
                    />
                </div>
                <div className="display-comments" /* key={Math. rand() * 2} */>
                {post.comments
                        .map((comment, index) => (
                            <div className="display-comment">
                                <h1 className="dispay-avatar-commentator">
                                    <img
                                        src={
                                            comment.type === 'Homme'
                                                ? avatarHomme
                                                : avatarFemme
                                        }
                                        alt="Avatar du commenteur"
                                    />
                                </h1>
                                <div className="display-name-commentator-and-text">
                                    <h2 className="name-commentator">
                                        {comment.firstname} :
                                    </h2>
                                    <p className="display-commentator-text">
                                        {comment.comment}
                                    </p>
                                </div>
                            </div>
                        ))
                        .reverse()}
                    <div className="display-new-comment">
                        <div className="smiley">😊</div>
                        <input
                            type="text"
                            id="text-new-comment"
                            placeholder="Ajouter un commentaire"
                            ref={addNewComment}
                        />
                        <button
                            id={'publish-new-commnent' + ' ' + `${post._id}`}
                            onClick={(e) => handleComment(e)}
                        >
                            Commenter
                        </button>
                    </div>
                </div>
            </div>
            {/*             <div className="displayLikes">
=======
                </div>
            </div>
        )
    ) : (
        <div className="displayPost">
            <div className="conteneur">
                <h1 className="dispayNamePoster">Publié par : {post.name}</h1>
                <h1 className="dispayNamePoster">
                    {`Publié le ${new Date(post.createdAt).toLocaleDateString(
                        'fr'
                    )} à ${new Date(post.createdAt).toLocaleTimeString('fr')}`}
                </h1>
                <div className="displayTextAndImage">
                    <div className="displayImage">
                        <img
                            src={post.imageUrl}
                            alt=""
                            align="right"
                            className="image"
                        />
                        <p className="displayText">{post.post}</p>
                    </div>
                </div>
            </div>
            <div className="displayLikes">
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
                <div className="displayLikesAndNumberLikes">
                    {!post.usersLiked.includes(userId) ? (
                        <FontAwesomeIcon
                            icon={faThumbsUp}
                            onClick={() => handleLike(post._id)}
                            className="likeOff"
                            size="4x"
                        ></FontAwesomeIcon>
                    ) : (
                        <FontAwesomeIcon
                            icon={faThumbsUp}
                            onClick={() => handleLike(post._id)}
                            className="likeOn"
                            size="4x"
                        ></FontAwesomeIcon>
                    )}
                    <p className="numberOfLikes">{post.likes}</p>
                </div>
<<<<<<< HEAD
            </div> */}
=======
            </div>
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
        </div>
    )
}

export default PostCard
