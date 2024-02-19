const express = require('express');
const { addToFavorite, fetchFavoriteByUser, deleteFromFavorite, updateFavorite , fetchCheckFavoriteByUser } = require('../controller/Favorite');

const router = express.Router();
//  /products is already added in base path
router.post('/', addToFavorite)
      .get('/:user', fetchFavoriteByUser)
      .delete('/', deleteFromFavorite)
      .patch('/:id', updateFavorite)
      .post('/check',fetchCheckFavoriteByUser)


exports.router = router;
