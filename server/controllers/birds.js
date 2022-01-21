const birdFunctions = require('../model/birds.js');

const getBirds = async (req, res) => res.status(200).json(await birdFunctions.getBirds());

const patchAnzahl = (req, res) => {
  console.log(req.body);
  res.status(200).json(birdFunctions.patchAnzahl(req.params.id, req.body));
};

module.exports = { getBirds, patchAnzahl };
