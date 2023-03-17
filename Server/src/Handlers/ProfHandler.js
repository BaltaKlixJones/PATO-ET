const {
  getProfessionalController,
} = require("../Controllers/ProfController.js");
const Professionals = require("../Models/Professionals.js");

const getProfessionalHandler = async (req, res) => {
  try {
    const professional = await getProfessionalController();
    professional.length === 0
      ? res.status(400).send("No hay profesionales registrados")
      : res.status(200).json(professional);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postProfessionalController = async (
  name,
  lastName,
  profession,
  description,
  image
) => {
  if ((!name || !lastName, !profession, !description)) {
    throw Error("Missing data");
  }
  const professional = await Professionals.create({
    name,
    lastName,
    description,
    image,
  });
  return professional;
};


module.exports = {
  getProfessionalHandler,
  postProfessionalController
};
