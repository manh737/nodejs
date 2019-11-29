const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'hello get'
    });
});
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'hello post'
    });
});
router.get('/:itemId', (req, res, next) => {
    const id = req.params.itemId;
    res.status(200).json({
        message: `hello get ${id} !`
    });
});
router.delete('/:itemId', (req, res, next) => {
    res.status(200).json({
        message: `Deleted item!`
    });
});
module.exports = router;