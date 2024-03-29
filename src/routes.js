const express = require('express');

const UserController = require('./controller/UserController');
const AddressController = require('./controller/AddressController');
const TechController = require('./controller/TechController');
const ReportController = require('./controller/ReportController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/users/:user_id/addresses', AddressController.store);
routes.get('/users/:user_id/addresses', AddressController.index);

routes.post('/users/:user_id/techs', TechController.store);
routes.get('/users/:user_id/techs', TechController.index);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/reports', ReportController.show);
module.exports = routes;