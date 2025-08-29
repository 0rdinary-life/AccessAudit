const express = require('express');
const router = express.Router()
crawler = require('../services/crawler')
scoreCalculator = require('../services/aiAnalyzer')
cache = require('../services/cache')
router.post('/', async(req, res) => {
    const { url } = req.body;
    const cached = cache.getCache(url)
    if(cached){
        console.log("serving cached")
        return res.json(cached);
    }
    console.log("test")
    try{
        const result = await crawler.scanPage(url)
        const score = await scoreCalculator.calculateScore(result)
        const data = {score, result}
        cache.setCache(url, data)
        return res.json(data);
    }catch(err){
        console.error("Error scanning", err)
        return res.status(500).json({ error: "scan failed"})
    }

})
module.exports = router;