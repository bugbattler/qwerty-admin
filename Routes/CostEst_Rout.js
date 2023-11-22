const {getCost,deleteById,getSingleCost,createCost,getCostsArray } =require("../Controllers/ConstEstimationCtl");
const express = require('express');
const router = express.Router();
router.post('/cost/create',createCost);
router.get('/cost/get',getCost);
router.get('/cost/get/:id',getCost);
router.get('/cost/getAll/',getCostsArray);
router.delete('/cost/delete/:id',deleteById);
router.get('/cost/get/single/:id',getSingleCost);
module.exports = router;