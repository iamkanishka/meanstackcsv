const express = require('express')
const router = express.Router()
const Login = require('../models/users')


router.get('/:email/:password', async (req, res) => {
 

    try {
        const allcus = await Login.find({
            email: String(req.params.email),
            password:String(req.params.password),

        })
        res.json(allcus)
    } catch (err) {
        res.send('Error ' + err)
    }
})







router.post('/', async (req, res) => {
    try {
        const addcus = await new Login({
            email: req.body.email,
            password: req.body.password,
        }).save();

        res.json({
            status: "done"
        })

    } catch (err) {
        res.send('Error' + err)
    }
})







module.exports = router













        