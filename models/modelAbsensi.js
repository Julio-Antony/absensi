const { Schema, model } = require('mongoose');

const AbsensiSchema = new Schema({
    nip: {
        type: String,
        required: true
    },
    user: {
        type: String,
    },
    jam_msk: {
        type: Date
    },
    jam_klr: {
        type: Date
    },
    keterangan: {
        type: String
    }
},
    {
        timestamps: true,
    }
);

module.exports = Absen = model('absensi', AbsensiSchema);