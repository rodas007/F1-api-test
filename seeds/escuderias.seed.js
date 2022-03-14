const mongoose = require('mongoose');
const Escuderias = require('../models/Escuderias');
const dotenv = require('dotenv');

dotenv.config;
const urlDb = process.env.MONGO_DB;

const escuderias = [
  {
    equipo: 'Mercedes',
    base: 'Brackley, Reino Unido',
    pais: 'Alemania',
    year: 1970,
    director: 'Toto Wolff',
    motor: 'Mercedes',

  },
  {
    equipo: 'Alpine',
    base: 'Enstone, Reino Unido',
    pais: 'Reino Unido',
    year: 1986,
    director: 'Otmar Szafnauer',
    motor: 'Renault',
  },
  {
    equipo: 'Hass',
    base: 'Kannapolis, Estados Unidos',
    pais: 'Estados Unidos',
    year: 2016,
    director: 'Guenther Steiner',
    motor: 'Ferrari',
  },
  {
    equipo: 'Red Bull',
    base: 'Milton Keynes, Reino Unido',
    pais: 'Austria',
    year: 1997,
    director: 'Christian Horner',
    motor: 'Red Bull Powertrains',
  },
  {
    equipo: 'Ferrari',
    base: 'Maranello',
    pais: 'Italia',
    year: 1950,
    director: 'Enrico Cardile',
    motor: 'Ferrari',
  },
  {
    equipo: 'Mclaren',
    base: 'Woking, Reino Unido',
    pais: 'Reino Unido',
    year: 1966,
    director: 'Andreas Seidl',
    motor: 'Mercedes',
  },
];
const escuderiasDocuments = escuderias.map(escuderias => new Escuderias(escuderias));
mongoose


  .connect(urlDb, {

//Este string puede ser el de MONGOATLAS
//mongodb+srv://nombre_usuario:<password>@cluster0.gmzuc.mongodb.net/elnombredemibasededatos?retryWrites=true&w=majority
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allEscuderias = await Escuderias.find();
    if (allEscuderias.length) {
      await Escuderias.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		await Escuderias.insertMany(escuderiasDocuments);
    console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());