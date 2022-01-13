const fs = require('fs');

module.exports = (req, res) => {
  const content = fs.readFileSync('../simpsons.json', 'utf8')
  res.status(200).json(JSON.parse(content));
}