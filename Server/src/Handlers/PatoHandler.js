const Pato = require("../Models/Pato");

const {
    getPatoController,
  } = require("../Controllers/PatoController.js");
  


const getPatoHandler = async (req, res) => {
    try {
      const professional = await getPatoController();
      professional.length === 0
        ? res.status(400).send("No hay profesionales registrados")
        : res.status(200).json(professional);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const postPatoController = async (
    name,
    lastName,
    profession,
    description,
    image
  ) => {
    if ((!name || !lastName, !profession, !description)) {
      throw Error("Missing data");
    }
    const professional = await Pato.create({
      name,
      lastName,
      description,
      image,
    });
    return professional;
  };
  

  module.exports = {
    getPatoHandler,
    postPatoController
};