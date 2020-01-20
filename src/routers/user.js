const express = require('express')
const User = require('../models/user')
const router = new express.Router()

/// Resource Create

router.post('/users', async (req, res) => {
    const user = new User(req.body)  
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

/// Resource Update

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowUpdates = ['name', 'email', 'age', 'password']
    const isValidOperation = updates.every((update) => allowUpdates.includes(update))
    
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid Updates!'})
    }

    const _id = req.params.id
    try{
        const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(400).send(e) 
    }
})

/// Resource Delete

router.delete('/users/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const user = await User.findByIdAndDelete(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send()
    }
})

module.exports = router
