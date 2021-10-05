const mongoose = require('mongoose');

const password = '';
const dbname = '';
const uri = ``;

/* Esto  es lo mismo que abajo pero en mas lines
const connection = () =>{
  mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true})
}
module.exports = connection
*/

module.exports = () =>
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
