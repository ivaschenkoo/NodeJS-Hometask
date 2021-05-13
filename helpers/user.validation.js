const { check } = require('express-validator');

const validateUsers = () => [
  check('email', 'To register, you need Google mail (gmail)').notEmpty().matches(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/),
  check('firstName', 'You must provide a name').notEmpty(),
  check('lastName', 'You must provide a last name').notEmpty(),
  check('password', 'Password must be at least three characters').isLength({ min: 3 }),
  check('phoneNumber', 'You must use a Ukrainian phone number in the format +380 00 000 00 00').matches(/^\+?3?8?(0\d{9})$/),
];

exports.validateUsers = validateUsers;
