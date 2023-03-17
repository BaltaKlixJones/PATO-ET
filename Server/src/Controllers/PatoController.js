const Pato = require("../Models/Pato");



const getPatoController = async () => {
    const pato = await Pato.findAll();
    return pato;
  };

  const getIDPatoController = async (id) => {
    const patoID = await Pato.findByPk(id);
    return patoID;
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
    const professional = await Pato.create({
      name,
      lastName,
      description,
      image,
      profession,
      email,
    phone
    });
    return professional;
  };

  const putPatoController = async (
    id,{
        name,
        lastName,
        profession,
        description,
        image,
        email,
        phone
    
    }) => {
    const patoUpdate = await Pato.findByPk(id);
    !patoUpdate
      ? res.status(400).json({ error: "Pato not found" })
      : patoUpdate.update({
        name,
        lastName,
        profession,
        description,
        image,
        email,
        phone
        });
    return patoUpdate;
  };

  module.exports = {
    getPatoController,
    getIDPatoController,
    postPatoController,
    putPatoController
    };

