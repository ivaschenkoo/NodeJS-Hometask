const { validationResult } = require('express-validator');

const createUserValid = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.errors.map((el) => el.msg);

    return res.status(400).json({ error: true, message: errorMessages });
  }

  next();
};

const updateUserValid = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.errors.map((el) => el.msg);

    return res.status(400).json({ error: true, message: errorMessages });
  }

  next();
};

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;
