const express = require('express');
const { addToCart, fetchCartByUser, deleteFromCart, updateCart , fetchCheckCartByUser } = require('../controller/Cart');

const router = express.Router();
//  /products is already added in base path
router.post('/', addToCart)
      .get('/', fetchCartByUser)
      .delete('/', deleteFromCart)
      .patch('/:id', updateCart)
      .post('/check',fetchCheckCartByUser)


exports.router = router;
