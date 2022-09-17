<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth') //--Middleware d'authentification
const multer = require('../middleware/multer-config') //--Middleware de gestion des fichiers

const postsCtrl = require('../controllers/posts')

//*****Routes des posts
//--Ajouter un nouveau post
router.post('/', auth, multer, postsCtrl.createPost) //--multer doit être après auth pour éviter l'enregistrement d'un fichier sans authentification

//--Mettre à jour un Post existant
router.put('/:id', auth, multer, postsCtrl.modifyPost)

//--Suppression d'un Post
router.delete('/:id', auth, postsCtrl.deletePost)

//--Récupération d'un Post spécifique
router.get('/:id', auth, postsCtrl.getOnePost)

//--Route GET qui renvoie toutes les Posts dans la base de données
router.get('/', auth, postsCtrl.getAllPosts)
=======
const express = require('express');
const router = express.Router();
const auth =require('../middleware/auth');//--Middleware d'authentification
const multer = require('../middleware/multer-config');//--Middleware de gestion des fichiers

const postsCtrl = require('../controllers/posts');

//*****Routes des posts
//--Ajouter un nouveau post
router.post('/', auth, multer, postsCtrl.createPost);//--multer doit être après auth pour éviter l'enregistrement d'un fichier sans authentification

//--Mettre à jour un Post existant
router.put('/:id', auth, multer, postsCtrl.modifyPost);

//--Suppression d'un Post
router.delete('/:id', auth, postsCtrl.deletePost);

//--Récupération d'un Post spécifique
router.get('/:id', auth, postsCtrl.getOnePost);

//--Route GET qui renvoie toutes les Posts dans la base de données
router.get('/', auth, postsCtrl.getAllPosts);
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a

//*****Route des likes
router.post('/:id/like', auth, postsCtrl.likePost)

<<<<<<< HEAD
//*****Ajout d'un nouveau commentaire
router.post('/:id/comment', auth, postsCtrl.commentPost)

//*****Récupération de tous les commentaires d'un post
router.get('/:id/comments', auth, postsCtrl.getAllCommentsOfAPost)

module.exports = router
=======
module.exports = router;
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
