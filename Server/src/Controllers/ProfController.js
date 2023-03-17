const { Professional } = require("../db.js");

const getProfessionalController = async () => {
    const allProfessionals = await Professional.findAll();
    return allProfessionals;
  };

  const getIDProfessionalController = async (id) => {
    const professionalID = await Professional.findByPk(id);
    return professionalID;
  };

  const deleteProfessionalController = async (id) => {
    const professionalDelete = await Professional.findByPk(id);
    if (!professionalDelete) {
      return res.status(400).json({ error: "Professional not found" });
    }
    return professionalDelete.destroy();
  };


module.exports = {
    getProfessionalController,
    getIDProfessionalController,
    deleteProfessionalController
}