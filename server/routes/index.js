const router = require('express').Router()

router.use('/', (req,res)=> {
    res.send("Ini Home")
})

module.exports = router