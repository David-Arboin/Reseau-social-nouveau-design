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

/* VALUE POSTMAN
{
    "userId" : "IdUser",
    "post": "",
    "imageUrl" : "",
    "likes": 0,
    "usersLiked": [],
} */
