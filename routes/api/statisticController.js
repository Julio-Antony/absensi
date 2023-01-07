const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
require('dotenv').config();

const Absensi = require('../../models/modelAbsensi');
const User = require('../../models/modelUser');

//Get Statistic
router.get('/', auth, async (req, res) => {
    try {
        const admin = await User.find({ "jabatan": "admin" }).count()
        const pegawai = await User.find({ "jabatan": "pegawai" }).count()
        const absen = await Absensi.find({})

        if (absen.length < 1) {
            return res.json({ msg: 'Belum ada catatan absen' })
        }

        res.json({ "admin": admin, "pegawai": pegawai, "absen": absen })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

module.exports = router;