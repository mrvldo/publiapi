const express = require('express')
const router = express.Router() 
const Mahasiswa = require('../models/Mahasiswa')
const verifyToken = require('../config/verifyToken')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const mahasiswaPost = new Mahasiswa({
        nama: req.body.nama,
        alamat: req.body.alamat,
        dosen: req.body.dosen,
        npm: req.body.npm,

    })

    try {
        // simpan data 
        const mahasiswa = await mahasiswaPost.save()
        // response
        res.json(mahasiswa)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/', verifyToken, async(req, res) => {
    // tampung input mahasiswa 
    try {
        // simpan data 
        const mahasiswa = await Mahasiswa.find()
        // response
        res.json(mahasiswa)
    } catch (error) {
        res.json({message: error})
    }
})
// Update
router.put('/:mahasiswaID', async (req,res) => {
    const data = {
        nama: req.body.nama,
        alamat: req.body.alamat,
        npm: req.body.npm,
        dosen: req.body.dosen
    }
    try{
        const mahasiswa = await Mahasiswa.updateOne({
            _id: req.params.mahasiswaID
        },data)
        res.json(mahasiswa)
    }catch(error){
        req.json({message: error})
    }
})

// Delete
router.delete('/:mahasiswaID', async(req,res) => {
    try{
        const mahasiswa = await Mahasiswa.deleteOne({_id: req.params.mahasiswaID})
        res.json(mahasiswa)
    }catch(error) {
        res.json({message: error})
    }
})

router.get('/', verifyToken, async(req, res) => {
    try {
        const mahasiswa = await Mahasiswa.find()
        res.json(mahasiswa)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router