// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const HasilSchema = mongoose.Schema({
    // Buat Schema data
    id: {
        type: Number,
        required: true
    },
    kode: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    is_redy: {
        type: Boolean,
        required: true
    },
    gambar: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Hasil', HasilSchema)