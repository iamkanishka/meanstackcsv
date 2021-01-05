const express = require('express')
const router = express.Router()
const Farmers = require('../models/userdata')


router.get('/:uuid', async (req, res) => {
    try {
        const allusers = await Farmers.find({
'userid': String(req.params.uuid),
         
        })

        res.json(allusers)
    } catch (err) {
        res.send('Error ' + err)
    }
})


router.post('/', async (req, res) => {
    try {
        const addfar = await new Farmers({
            fullname: req.body.fullname,
     
            review: req.body.review,
            rating: req.body.rating,
            userid:req.body.userid
           


        }).save();

        res.json({
            status: "done"
        })

    } catch (err) {
        res.send('Error' + err)
    }
})

router.patch('/:id', async (req, res) => {


    try {
        const euser = await Farmers.findById(req.params.id)
        euser.fullname= req.body.fullname,
 euser.review= req.body.review,
        euser.rating= req.body.rating
        const a1 = await euser.save()
        res.json({
            status: "done"
        })
    } catch (err) {
        res.send('Error')
    }

})






router.delete('/:id', async (req, res) => {
    try {
        const dalien = await Farmers.findByIdAndDelete(req.params.id)
        res.json(dalien)

    } catch (err) {
        res.send('Error' + err)
    }
})





router.post('/many', async (req, res) => {
    console.log(req.body.dudata);
    try {
        const addfar = await Farmers.insertMany(req.body.dudata, function(error, docs) {
           
        });
        res.json({
            status: "done"
        })

  

    } catch (err) {
        res.send('Error' + err)
    }
})




module.exports = router