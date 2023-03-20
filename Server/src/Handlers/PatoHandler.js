
const Pato = require("../models/Pato");


const {
  getPatoController,
  getIDPatoController,
  postPatoController,
  putPatoController,
} = require("../controllers/PatoController.js");

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

const postPatoHandler = async (req, res) => {
  const { name, lastName, profession, description, image, email, phone } =
    req.body;

  try {
    const newProfessional = await postPatoController(
      name,
      lastName,
      profession,
      description,
      image,
      email,
      phone
    );
    !newProfessional
      ? res.status(400).json({ error: "Professional not created" })
      : res.status(200).json(newProfessional);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
  postPatoHandler,
  putPatoHandler,
};
