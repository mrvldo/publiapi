const express = require('express')
const router = express.Router()
const Hasil = require('../models/Hasil')
const response = require('../config/response')
const Hasil = require('../models/Hasil')
const { id } = require('@hapi/joi/lib/base')

// Create 
router.post('/', async(req, res) => {
    // tampung input Hasil 
    const hasilPost = new Hasil({
        id: req.body.id,
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        is_redy: req.body.is_redy,
        gambar: req.body.gambar,
        category: req.body.category,
    })

    try {
        // simpan data 
        const hasil = await hasilPost.save()
            // response
            // res.json(Hasil)
        response(201, asil, "berhasil", res)
    } catch (error) {
        res.json({ message: error })
    }
})

router.get('/', async(req, res) => {
        // tampung input hasil 
        try {
            // simpan data 
            const hasil = await Hasil.find()
                // response
            res.json(hasil)
        } catch (error) {
            res.json({ message: error })
        }
    })
    // Update
router.put('/:hasilID', async(req, res) => {
    const data = {
        id: req.body.id,
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        is_redy: req.body.is_redy,
        gambar: req.body.gambar,
        category: req.body.category,
    }
    try {
        const hasil = await Hasil.updateOne({
            _id: req.params.hasilID
        }, data)
        res.json(hasil)
    } catch (error) {
        req.json({ message: error })
    }
})

// Delete
router.delete('/:hasilID', async(req, res) => {
    try {
        const hasil = await Hasil.deleteOne({ _id: req.params.hasilID })
        res.json(hasil)
    } catch (error) {
        res.json({ message: error })
    }
})


module.exports = router