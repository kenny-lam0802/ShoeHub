const ShoeController = require("../controllers/shoe.controller")


module.exports = (app) => {
    app.get('/api/allShoes', ShoeController.getAllshoes)
    app.get('/api/oneShoes/:id', ShoeController.getOneShoe)
    app.post('/api/newShoes', ShoeController.createShoe)
    app.put('/api/editShoes/:id', ShoeController.updateShoe)
    app.delete('/api/deleteShoe/:id', ShoeController.deleteShoe)
}