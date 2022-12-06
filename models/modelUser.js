const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    nip: {
        type: String,
        required: true
    },
    nama: {
        type: String,
    },
    foto: {
        type: String
    },
    jabatan: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    tmpt_lhr: {
        type: String
    },
    tgl_lhr: {
        type: String
    },
    jns_klmn: {
        type: String
    },
    telp: {
        type: String,
    },
    alamat: {
        type: String
    }
},
    {
        timestamps: true,
    }
);

module.exports = User = model('user', UserSchema);