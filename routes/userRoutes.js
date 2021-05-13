const { Router } = require('express');
const UserService = require('../services/userService');
const { validateUsers } = require('../helpers/user.validation');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.get('', (req, res, next) => {
  try {
    const users = UserService.getUsers();

    res.data = users;
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.get('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const user = UserService.getUser(id);

    res.data = user;
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.post('', validateUsers(), createUserValid, (req, res, next) => {
  try {
    const { body } = req;
    const user = UserService.createUser(body);

    res.data = user;
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.put('/:id', validateUsers(), updateUserValid, (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const user = UserService.updateUser(id, updatedData);

    res.data = user;
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.delete('/:id', (req, res, next) => {
  try {
    const { id } = req.params;

    UserService.deleteUser(id);
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

module.exports = router;
