'use strict';
const express = require('express');
const Clothe = require('../models/data-collection-class.js');
const clotheModel = require('../models/clothes.js');
const clothe = new Clothe(clotheModel);
const router = express.Router();

const getClothes = async (req, res) => {
  let clothesArray = await clothe.read();
  res.status(200).json(clothesArray);
};
const getClothesById = async (req, res) => {
  let colthesObject = await clothe.read(req.params.id);
  res.json(colthesObject);
};
const createClothes = async (req, res) => {
  const clotheObject = req.body;
  const resopnse = await clothe.create(clotheObject);
  res.status(200).json(resopnse);
};
const updateClothe = async (req, res) => {
  let clotheObject = req.body;
  let response = await clothe.update(req.params.id, clotheObject);
  res.status(200).json(response);
};

const deleteClothe = async (req, res) => {
  const response = await clothe.delete(req.params.id);
  res.status(200).json(response);
};

router.get('/', getClothes);
router.get('/:id', getClothesById);
router.post('/', createClothes);
router.put('/:id', updateClothe);
router.delete('/:id', deleteClothe);

module.exports = router;
