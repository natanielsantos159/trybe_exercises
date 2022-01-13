const fs = require("fs");

module.exports = (req, res) => {
  const { id, name } = req.body;

  if (!id || !name)
    return res.status(404).json({ message: "Informe um nome e um id" });

  const simpsonJson = fs.readFileSync("../simpsons.json", "utf8");
  const simpsons = JSON.parse(simpsonJson);

  simpsons.push({ id, name });
  fs.writeFileSync("../simpsons.json", JSON.stringify(simpsons));
  return res.status(200).json({ message: 'Simpson criado com sucesso!'});
};
