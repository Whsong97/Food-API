const router = require('express').Router()
const Food = require('../models/food')

router.get('/', async (req, res) => {
    try {
        const food = await Food.find()
        res.json(food)
    } catch (error) {
        console.log(error)
        res.status(400).json({ 'message': 'error getting resource' })
    }
})

router.post('/', async (req, res) => {
    try {
        const food = await new Food(req.body).save()
        res.json(food)
    } catch (error) {
        console.log(error)
        res.status(400).json({ 'message': 'error creating resource' })
    }
})

module.exports = router