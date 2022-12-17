// (1) definisikan module, middleware
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')
require('dotenv').config({ path: 'string.env' });

const quote = "cie berjalan"
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors())

// (7) import routes
const mahasiswaRoutes = require('./routes/mahasiswa')
const dosenRoutes = require('./routes/dosen')


// (8) app.use (mendaftarkan middleware baru ke Express)
app.use('/mahasiswa', mahasiswaRoutes)
app.use('/dosen', dosenRoutes)


// (3) koneksi ke database mongodb
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection

    // handle error
    db.on('error', console.error.bind(console, 'Error Establishing a Database Connection?'))
    // handle success
    db.once('open', () => {
        console.log('Database is connected')
    })

// (2) listen port, dan buat callback dengan output console.log
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT} ${quote}`);
})

