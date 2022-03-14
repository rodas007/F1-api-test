
const express = require('express');
const dotenv = require("dotenv");
const {connect} = require('./utils/db')


connect();
dotenv.config();


const PORT = process.env.PORT;
const server = express();

const Escuderias = require('./models/Escuderias');

const router = express.Router();

router.get('/escuderias', async (req, res) => {
	try {
		const escuderias = await Escuderias.find();
		return res.status(200).json(escuderias)
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('/escuderias/equipo/:equipo', async (req, res) => {
	const equipo = req.params.equipo;
	try {
		const escuderias = await Escuderias.find({equipo});
		if (escuderias) {
			return res.status(200).json(escuderias);
		} else {
			return res.status(404).json('No equipo found ');
		}
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('/escuderias/id/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const escuderiaId = await Escuderias.findById(id);
		if (escuderiaId) {
			return res.status(200).json(escuderiaId);
		} else {
			return res.status(404).json('No escuderia found by this id');
		}
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('/escuderias/base/:base', async (req, res) => {
	const {base} = req.params;

	try {
		const escuByBase = await Escuderias.find({ base });
		return res.status(200).json(escuByBase);
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('/escuderias/pais/:pais', async (req, res) => {
	const {pais} = req.params;

	try {
		const equipByPais = await Escuderias.find({ pais });
		return res.status(200).json(equipByPais);
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('/escuderias/year/:year', async (req, res) => {
	const {year} = req.params;

	try {
		const equipByYear = await Escuderias.find({ year: {$gte:year} });
		return res.status(200).json(equipByYear);
	} catch (err) {
		return res.status(500).json(err);
	}
});
router.get('/escuderias/director/:director', async (req, res) => {
	const {director} = req.params;

	try {
		const equipByDirector = await Escuderias.find({director});
		return res.status(200).json(equipByDirector);
	} catch (err) {
		return res.status(500).json(err);
	}
});
router.get('/escuderias/motor/:motor', async (req, res) => {
	const {motor} = req.params;

	try {
		const equipByMotor = await Escuderias.find( {motor} );
		return res.status(200).json(equipByMotor);
	} catch (err) {
		return res.status(500).json(err);
	}
});

server.use('/', router);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});

