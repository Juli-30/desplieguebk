const mongoose = require('mongoose');
const userModel = new mongoose.Schema(
    {
        nombre:{
            type: String
        },
        contraseña:{
            type: String
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const ModelUser = mongoose.model("usuarios", userModel);
module.exports = ModelUser;