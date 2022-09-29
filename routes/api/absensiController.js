const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
require('dotenv').config();

const Absensi = require('../../models/modelAbsensi');

//Get All Users
router.get('/', auth, async (req, res) => {
    try {
        const absen = await Absensi.find({})

        if (absen.length < 1) {
            return res.json({ msg: 'Belum ada catatan absen' })
        }

        res.json(absen)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

//Get Absen by user
router.get('/:id', auth, async (req, res) => {
    try {
        const absen = await Absensi.findOne({ user: req.user._id })

        if (!absen) {
            res.status(404).send({ msg: "Pegawai tidak ditemukan." })
        }

        res.json(absen)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

//Add Absensi
router.post('/', async (req, res) => {
    const { jam_msk, jam_klr } = req.body;
    const userId = req.user._id

    function terlamabat(jam_msk) {
        var now = moment.tz(jam_msk, "Asia/Jakarta");
        var hourToCheck = (now.day() !== 0) ? 07 : 30;
        var dateToCheck = now.hour(hourToCheck).minute(30);

        return moment().isAfter(dateToCheck);
    }
    try {
        const newAbsen = await Users.create({
            user: userId,
            jam_msk: jam_msk,
            jam_klr: jam_klr,
            keterangan: terlamabat(jam_msk) === false ? "Telamabat" : "On time",
        })

        await newAbsen.save()

        res.status(201).json({ msg: "Berhasil Absen !" })

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})


module.exports = router;