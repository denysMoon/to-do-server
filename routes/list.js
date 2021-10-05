const express = require('express')
const List = require('../models/List')

const router = express.Router()


router.get('/', async (req, res)=>{
    try{
        const list = await List.find()
        res.status(200).json(list)
    } catch(err){
        res.json({message: err})
    }
})

router.post('/', async (req, res)=>{
    const list = new List({
        body: req.body.body
    })

    try{
        const savedList = await list.save()
        res.json(savedList)
    } catch(err){
        res.json({message: err})
    }
})

router.delete('/:postId', async (req, res)=>{
    debugger
    try{
        const removedList = await List.remove({_id: req.params.postId})
        res.json(removedList)
    } catch(err){
        res.json({message: err})
    }
})

module.exports = router