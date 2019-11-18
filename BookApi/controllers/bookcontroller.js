let express = require('express')
let router = express.Router();
let Books = require('../db').import('../models/books');

router.get('/getall', (req, res) => {
    Books.findAll()
        .then(resp => res.status(200).json(resp))
        .catch(err => res.status(500).json({ error: err }))
})

router.post('/create', (req, res) => {
    Books.create({
        nameOfBook: req.body.nameOfBook,
        author: req.body.author,
        genre: req.body.genre,
        pubYear: req.body.pubYear,
        rating: req.body.rating
    })
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json({ error: err, message: 'something' }))
})

router.put('/update/:id', (req, res) => {
    Books.update(req.body, { where: { id: req.params.id } })
        .then( resp => res.status(200).json(resp))
        .catch(err => res.status(500).json(err))
})

router.delete('/delete/:id', (req, res) => {
    Books.destroy({where: {id: req.params.id}})
        .then(resp => res.status(200).json('deleted'))
        .catch(err => res.status(500).json(err))
})

module.exports = router;