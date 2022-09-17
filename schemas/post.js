<<<<<<< HEAD
const mongoose = require('mongoose') //--Infrastructure de modélisation d’objet pour MongoDB dans Node.js

const mongooseErrors = require('mongoose-errors') //--Gestionnaire d'erreurs monggose

const commentsSchema = mongoose.Schema({
    userId: { type: String, required: true },
    comment: { type: String, required: true },
    firstname: { type: String, required: true },
    type: { type: String, required: true },
})
const postSchema = mongoose.Schema(
    {
        userId: { type: String, required: true }, //-- l'identifiant MongoDB unique de l'utilisateur qui a créé le post
        firstname: { type: String, required: true },
        type: { type: String, required: true },
        post: { type: String, required: false }, //-- post
        imageUrl: { type: String, required: false }, //-- l'URL de l'image à téléchargée par l'utilisateur
        time: { type: Number, required: false }, //-- Time
        likes: { type: Number, required: false, default: 0 }, //-- nombre d'utilisateurs qui aiment (= likent) le post
        comments: [commentsSchema],
        usersLiked: { type: [String], required: false }, //-- tableau des identifiants des utilisateurs qui ont aimé (= liked) le post
    },
    {
        timestamps: true,
    }
)

postSchema.plugin(mongooseErrors)
module.exports = mongoose.model('Post', postSchema)
=======
const mongoose = require('mongoose');//--Infrastructure de modélisation d’objet pour MongoDB dans Node.js

const mongooseErrors = require('mongoose-errors')//--Gestionnaire d'erreurs monggose

const postSchema = mongoose.Schema({
    userId : {type: String, required: true }, //-- l'identifiant MongoDB unique de l'utilisateur qui a créé le post
    name : { type: String, required: true },
    post: {type: String, required: false }, //-- post
    imageUrl: {type: String, required: false }, //-- l'URL de l'image à téléchargée par l'utilisateur
    time: {type: Number, required: false }, //-- Time
    likes: {type: Number, required: false, default: 0 }, //-- nombre d'utilisateurs qui aiment (= likent) le post
    usersLiked: { type: [String], required: false }, //-- tableau des identifiants des utilisateurs qui ont aimé (= liked) le post
}, {
    timestamps: true
});

postSchema.plugin(mongooseErrors);
module.exports = mongoose.model('Post', postSchema);
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a

/* VALUE POSTMAN
{
    "userId" : "IdUser",
    "post": "",
    "imageUrl" : "",
    "likes": 0,
    "usersLiked": [],
<<<<<<< HEAD
} */
=======
} */
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
