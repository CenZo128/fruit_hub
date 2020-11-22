const express = require('express')
const app = express()
const PORT = 3000

require('dotenv').config()
const routes = require('./routes')

app.use(routes)

const db = require('./config/config')
db.on("error", console.error.bind(console, "Connection Error"));
db.once("open", () => console.log("Connected to mongodb!"));

app.listen(PORT, () => {
    console.log("App is running at : ", PORT)
})
