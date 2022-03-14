const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const escuderiasSchema = new Schema(
  {
    equipo: { type: String, required: true },
    base: { type: String, required: true },
    pais: { type: String, required: true },
    year: { type: Number },
    director: { type: String, required: true },
    motor: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Escuderias = mongoose.model('Escuderias', escuderiasSchema);
module.exports = Escuderias;