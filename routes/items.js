const express = require('express');
const router = express.Router();
const mockData = require('../mockdata/mockData');

router.get('/', async (req, res) => {
    const {page=1, limit=5, sortBy='name', sortOrder='asc'} = req.query;

    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const startIdx = (page - 1) * limit;
    const endIdx = startIdx + parseInt(limit);

    try {
        const items = mockData.sort((a,b) => (a[sortBy] < b[sortBy] ? -1 : 1) * (sortOrder === 'desc' ? -1 : 1)).slice(startIdx, endIdx);

        res.json(items);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

module.exports = router;