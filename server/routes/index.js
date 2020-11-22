const router = require('express').Router()
const itemsRouter = require('./item')
// const usersRouter = require('./users')

router.use('/', (req,res)=> {
    res.send("Ini Home")
})

router.use('/items', itemsRouter);
// router.use('/users', usersRouter);

module.exports = router