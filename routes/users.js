const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Users List')
})

router.get('/new', (req, res) => {
    res.send('New User')
})

router.post('/', (req, res) => {
    res.send('Create New User')
})

router
    .route('/:userId')
    .get((req, res) => {
        console.log(req.user)
        res.send(`Getting User with ID: ${req.params.userId}`)
    })
    .put((req, res) => {
        res.send(`Updating User with ID: ${req.params.userId}`)
    })
    .delete((req, res) => {
        res.send(`Deleting User with ID: ${req.params.userId}`)
    })

const users = [{ name: 'Vali' }, { name: 'Sanela' }]

router.param('userId', (req, res, next, userId) => {
    req.user = users[userId]
    next()
})



module.exports = router