'use strict';
const express = require('express');
const Food = require('../models/data-collection-class.js');
const foodModel = require('../models/food.js');
const food = new Food(foodModel);
const router = express.Router();

const getFood = async (req, res) => {
  let foodArray = await food.read();
  res.status(200).json(foodArray);
};
const getFoodById = async (req, res) => {
  let foodObject = await food.read(req.params.id);
  res.json(foodObject);
};
const createFood = async (req, res) => {
  const foodObject = req.body;
  const resopnse = await food.create(foodObject);
  res.status(200).json(resopnse);
};
const updateFood = async (req, res) => {
  let foodObject = req.body;
  let response = await food.update(req.params.id, foodObject);
  res.status(200).json(response);
};

const deleteFood = async (req, res) => {
  const response = await food.delete(req.params.id);
  res.status(200).json(response);
};

router.get('/', getFood);
router.get('/:id', getFoodById);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

module.exports = router;
