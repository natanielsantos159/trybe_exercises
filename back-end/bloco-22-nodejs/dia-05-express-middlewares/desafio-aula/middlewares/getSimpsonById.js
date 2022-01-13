const fs = require('fs');

module.exports = (req, res) => {
  const { id } = req.params;
  const simpsonData = fs.readFileSync('../simpsons.json')
  const arraySimpsons = JSON.parse(simpsonData);

  const simpson = arraySimpsons.find((obj) => +(obj.id) === +(id));
  if (simpson) return res.status(200).json(simpson);
  return res.status(404).json({ message: 'Simpson not found!'})
}