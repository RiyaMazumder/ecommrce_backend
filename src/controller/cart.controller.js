const cartService = require("../services/cart.service.js");

const findUserCart = async (req, res) => {
    const user = req.user;  
    try {
        const cart = await cartService.findUserCart(user._id);  
        if (!cart) {
            return res.status(404).send({ error: "Cart not found" });
        }
        return res.status(200).send(cart);  
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const addItemToCart = async (req, res) => {
    const user = req.user;  
    try {
        const cartItem = await cartService.addItemToCart(user._id, req.body);  
        return res.status(200).send(cartItem);  
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = {
    findUserCart,
    addItemToCart
};
