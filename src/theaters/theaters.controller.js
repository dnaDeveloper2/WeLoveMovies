const theatersService = require('./theaters.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function listTheaters(req, res, next) {
  try {
    const theaters = await theatersService.listTheaters();
    res.json({ data: theaters });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listTheaters: asyncErrorBoundary(listTheaters),
};
