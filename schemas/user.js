<<<<<<< HEAD
const mongoose = require('mongoose')

const mongooseErrors = require('mongoose-errors') //--Gestionnaire d'erreurs monggose

//--Package de validation pour prévalider les informations avant de les enregistrer
//--Assure l'unicité du mail grâce au module mongoose-unique-validator
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            unique: [false, 'Le nom est requis'],
        }, //-- nom de l'utilisateur [unique]
        firstname: {
            type: String,
            require: true,
            unique: [false, 'Le prénom est requis'],
        }, //-- nom de l'utilisateur [unique]
        email: {
            type: String,
            require: true,
            unique: [true, 'Un email ou un numéro de téléphone est requis'],
        }, //-- adresse e-mail de l'utilisateur [unique]
        password: { type: String, require: true }, //-- mot de passe de l'utilisateur haché
        day: {
            type: Number,
            require: true,
            unique: [false, 'Un jour est requis'],
        },
        month: {
            type: Number,
            require: true,
            unique: [false, 'Un mois est requis'],
        },
        year: {
            type: Number,
            require: true,
            unique: [false, 'Une année est requise'],
        },
        type: { type: String, require: true },
        isAdmin: { type: Boolean, require: true, default: false },
    },
    {
        timestamps: true,
    }
)

//--Applique le uniqueValidator au schéma avant dans faire un modèle
userSchema.plugin(uniqueValidator)
userSchema.plugin(mongooseErrors)
module.exports = mongoose.model('User', userSchema)
=======
const mongoose = require('mongoose');

const mongooseErrors = require('mongoose-errors')//--Gestionnaire d'erreurs monggose

//--Package de validation pour prévalider les informations avant de les enregistrer
//--Assure l'unicité du mail grâce au module mongoose-unique-validator
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    name: {type: String, require: true, unique: [true, "Le nom ou un pseudonyme est requis"] },//-- nom de l'utilisateur [unique]
    email: {type: String, require: true, unique: [true, "Un email est requis"] },//-- adresse e-mail de l'utilisateur [unique]
    password: {type: String, require: true },//-- mot de passe de l'utilisateur haché
    isAdmin: {type: Boolean, require: true, default: false}
}, {
    timestamps: true
});

//--Applique le uniqueValidator au schéma avant dans faire un modèle
userSchema.plugin(uniqueValidator);
userSchema.plugin(mongooseErrors);
module.exports = mongoose.model('User', userSchema)
>>>>>>> 8c2a6ddc9acc13f4dcd16cd7d61c9ee2e3484d3a
