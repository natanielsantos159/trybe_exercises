const fs = require('fs');

module.exports = (req, res, next) => {
  const { id } = req.body;

  const simpsonJson = fs.readFileSync('../simpsons.json', 'utf8')
  const simpsons = JSON.parse(simpsonJson);
  if (simpsons.some((obj) => +(obj.id) === +(id))) {
    return res.status(500).json({ message: 'Não é possível cadastrar esse simpson!'})
  }
  next();
}