const controller = {};

controller.index = (req, res) => {
  res.send('La conexión ha sido correcta desde index.controller');
};

module.exports = controller;
