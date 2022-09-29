const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const auth = require('../../middleware/auth');
require('dotenv').config();

const Users = require('../../models/modelUser');
const Image = require('../../data/image')

//Get All Users
router.get('/', auth, async (req, res) => {
    try {
        const user = await Users.find({})

        if (user.length < 1) {
            return res.json({ msg: 'Belum ada user' })
        }

        res.json(user)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

//Get Single user
router.get('/:id', auth, async (req, res) => {
    try {
        const user = await Users.findOne(req.user._id)

        if (!user) {
            res.status(404).json({ msg: "Pegawai tidak ditemukan." })
        }

        res.json(user)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

//Add User
router.post('/', async (req, res) => {
    const { nip, nama, password, email, tmpt_lhr, tgl_lhr, jns_klmn, telp, alamat } = req.body;
    try {
        const userExist = await Users.findOne({ email })

        if (userExist) {
            return res.status(400).json({ msg: "Akun sudah terdaftar !" })
        }

        const newUser = await Users.create({
            nip: nip,
            nama: nama,
            password: bcrypt.hashSync(password, 10),
            foto: Image,
            email: email,
            tmpt_lhr: tmpt_lhr,
            tgl_lhr: tgl_lhr,
            jns_klmn: jns_klmn,
            telp: telp,
            alamat: alamat,
        })

        await newUser.save()

        res.status(201).json({ msg: "Berhasil menambahkan pegawai baru !" })

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

//Update user
router.put('/:id', auth, async (req, res) => {
    const id = req.body._id || req.user._id
    const { nama, email, tmpt_lhr, tgl_lhr, jns_klmn, telp, alamat } = req.body;
    try {
        const user = await Users.findOne({ id })

        if (!user) {
            res.status(404).send({ msg: "Pegawai tidak ditemukan." })
        }

        user.nama = nama || user.nama
        // user.foto = Image,
        user.email = email || user.email
        user.tmpt_lhr = tmpt_lhr || user.tmpt_lhr
        user.tgl_lhr = tgl_lhr || user.tgl_lhr
        user.jns_klmn = jns_klmn || user.jns_klmn
        user.telp = telp || user.telp
        user.alamat = alamat || user.alamat

        await user.save()
        res.status(200).send({ msg: "Berhasil memperbarui data" })

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})


//Delete user
router.delete('/', auth, async (req, res) => {
    const { id } = req.body
    try {
        const user = await Users.findById({ id })

        if (!user) {
            res.status(404).send({ msg: "Pegawai tidak ditemukan." })
        }

        await user.remove()
        res.status(200).send({ msg: "Data Pegawai dihapus" })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})



module.exports = router;