const Pato = require("../Models/Pato");

const {
  getPatoController,
  getIDPatoController,
  postPatoController,
  putPatoController
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
    image,
    email,
    phone
  ) => {
    if ((!name || !lastName, !profession, !description)) {
      throw Error("Missing data");
    }
    const pato = await Pato.create({
      name,
      lastName,
      profession,
      description,
      image,
      email,
      phone
    });
    return pato;
  };

  const putPatoHandler = async (req, res) => {
    const { id } = req.params;
  
    try {
      await putPatoController(id, req.body);
      return res.status(200).json({ message: "Professional updated" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

  module.exports = {
    getPatoHandler,
    postPatoController,
    putPatoHandler
};