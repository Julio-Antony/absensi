const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
router.get('/single/:id', auth, async (req, res) => {
    try {
        const user = await Users.findOne({ _id: req.params.id })

        if (!user) {
            res.status(404).json({ msg: "Pegawai tidak ditemukan." })
        }

        res.json(user)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

//Get my Profile
router.get('/single', auth, async (req, res) => {
    try {
        const user = await Users.findOne({ _id: req.user.id })

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
            jabatan: "pegawai",
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
    const { nip, nama, email, tmpt_lhr, tgl_lhr, jns_klmn, telp, alamat, foto, jabatan } = req.body;
    try {
        const user = await Users.findOne({ _id: req.params.id })

        if (!user) {
            res.status(404).send({ msg: "Pegawai tidak ditemukan." })
        }

        user.nip = nip || user.nip
        user.nama = nama || user.nama
        user.foto = foto
        user.email = email || user.email
        user.tmpt_lhr = tmpt_lhr || user.tmpt_lhr
        user.tgl_lhr = tgl_lhr || user.tgl_lhr
        user.jns_klmn = jns_klmn || user.jns_klmn
        user.telp = telp || user.telp
        user.alamat = alamat || user.alamat
        user.jabatan = jabatan || user.jabatan

        await user.save()

        res.status(200).send({ msg: "Berhasil memperbarui data", user })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

//Change Password
router.put('/changePassword/:id', auth, async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    try {
        const user = await Users.findOne({ _id: req.params.id })

        if (!user) {
            res.status(404).send({ msg: "Pegawai tidak ditemukan." })
        }

        // Check for email and password match
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({
                errors: [{ msg: 'Password Salah' }],
            });
        }

        user.password = bcrypt.hashSync(newPassword, 10) || user.password

        await user.save()

        res.status(200).send({ msg: "Berhasil merubah password" })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

//Update my profile
router.put('/', auth, async (req, res) => {
    const { nip, nama, email, tmpt_lhr, tgl_lhr, jns_klmn, telp, alamat, foto } = req.body;
    try {
        const user = await Users.findOne({ _id: req.user.id })

        if (!user) {
            res.status(404).send({ msg: "Pegawai tidak ditemukan." })
        }

        user.nip = nip || user.nip
        user.nama = nama || user.nama
        user.foto = foto
        user.email = email || user.email
        user.tmpt_lhr = tmpt_lhr || user.tmpt_lhr
        user.tgl_lhr = tgl_lhr || user.tgl_lhr
        user.jns_klmn = jns_klmn || user.jns_klmn
        user.telp = telp || user.telp
        user.alamat = alamat || user.alamat

        await user.save()

        // Return jsonwebtoken
        jwt.sign(
            {
                user: {
                    id: user.id,
                },
            },
            process.env.JWT_SECRET,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.status(200).send({ msg: "Berhasil memperbarui data", token })
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})


//Delete user
router.delete('/:id', auth, async (req, res) => {
    const id = req.params.id
    try {
        const user = await Users.findById(id)

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