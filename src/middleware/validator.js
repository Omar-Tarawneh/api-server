'use strict';

module.exports = (req, res, next) => {
  if (!req.params.id) {
    next('The id is wrong');
  }
  next();
};
