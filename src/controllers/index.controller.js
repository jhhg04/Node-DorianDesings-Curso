const controller = {};
const connection = require('../dbConnection/connection');
const PokeModel = require('../models/pokemon.model');

controller.index = async (req, res) => {
  // res.send('La conexión ha sido correcta desde index.controller');
  try {
    const title = 'INDEX DESDE EL SERVIDOR CON PUG Y DESDE UNA VARIABLE';
    await connection();
    const allPokemos = await PokeModel.find();
    console.log(allPokemos);
    res.render('index', { title });
  } catch (error) {
    console.log(error);
  }
};

module.exports = controller;
