const express = require('express');
const router = express.Router();
const moment = require('moment-timezone')
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
router.get('/pribadi', auth, async (req, res) => {
    try {
        const absen = await Absensi.find({})
        const userAbsen = absen.filter(item => item.user_id.toString() === req.user.id)

        if (!userAbsen) {
            res.status(404).send({ msg: "Pegawai tidak ditemukan." })
        }

        res.json(userAbsen)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

//Add Absensi
router.post('/', auth, async (req, res) => {
    // const { jam_msk, jam_klr } = req.body;
    const userId = req.user.id

    // function terlamabat(jam_msk) {
    //     var now = moment.tz(jam_msk, "Asia/Jakarta");
    //     var hourToCheck = (now.day() !== 0) ? 07 : 30;
    //     var dateToCheck = now.hour(hourToCheck).minute(30);

    //     return moment().isAfter(dateToCheck);
    // }
    try {
        const absen = await Absensi.find({})
        const userAbsen = absen.filter(item => item.user_id.toString() === req.user.id)

        const getTime = moment.tz(Date.now(), "Asia/Jakarta")
        const today = userAbsen.find(item => moment.tz(item.jam_msk, "Asia/Jakarta").format("MM/DD/YYYY") === getTime.format("MM/DD/YYYY"))

        if (!today) {
            const newAbsen = await Absensi.create({
                user_id: userId,
                jam_msk: getTime,
                // keterangan: terlamabat(jam_msk) === false ? "Telambat" : "On time",
            })

            await newAbsen.save()

            res.status(201).json({ msg: "Berhasil Absen !" })
        } else if (today) {
            today.jam_klr = getTime

            await today.save()
            res.status(201).json({ msg: "Berhasil Absen Keluar !" })
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})


module.exports = router;