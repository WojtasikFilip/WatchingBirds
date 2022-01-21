const birds = require('./birds.json');

const getBirds = () => birds;

const patchAnzahl = (id, body) => {
  const bird = birds.find((el) => el.id === Number(id));
  bird.count = body.count;
  bird.observer.push(body.observerName);
};

module.exports = { getBirds, patchAnzahl };
