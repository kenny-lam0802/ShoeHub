const Shoe = require('../models/shoe.model')
module.exports = {

// Get All shoes
    getAllshoes: (req, res) => {
        Shoe.find({})
            .then((allShoes) => {
                res.status(200).json(allShoes)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
// Get One shoe
    getOneShoe: (req, res) => {
        console.log(req.params.id);
        const id = req.params.id
        Shoe.findById(id)
            .then((oneShoe) => {
                res.status(200).json(oneShoe)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
// Creating a Shoe
    createShoe: (req, res) => {
        console.log(req.body);
        Shoe.create(req.body)
            .then((newshoe) => {
                res.status(201).json(newShoe)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },


// Edit a Shoe
    updateShoe: (req, res) => {
        const id = req.params.id
        Shoe.findOneAndUpdate(
            {_id: id},
            req.body,
            {new:true, runValidators:true}
        )
            .then((updatedShoe) => {
                res.status(201).json(updatedShoe)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

// Delete a Shoe
    deleteShoe: (req, res) => {
        const id = req.params.id
        Shoe.deleteOne({_id: id})
            .then((result) => {
                res.status(204).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}