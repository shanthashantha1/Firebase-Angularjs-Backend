const express = require('express');
const router = express.Router();
const { getReviews, createReview, updateReview, deleteReview } = require('./controllers/reviewController');


router.all('/', (req, res) => {
    res.send('This is / page');
});


// GET reviews
router.get('/reviews', getReviews);

// POST review
router.post('/reviews', createReview);

// PUT review
router.put('/reviews/:id', updateReview);

// DELETE review
router.delete('/reviews/:id', deleteReview);

module.exports = router;
