const { Schema, model } = require('mongoose');

const AbsensiSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
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