const express = require('express')

const router = express.Router()

router.get('/', async (req, res)=>{
    try{
        res.send('Ok')
    } catch(err){
        res.json({message: err})
    }
})

module.exports = router