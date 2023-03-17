const {Pato} = require("../db.js");

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
    const pato = await Pato.create({
        name,
        lastName,
        description,
        image,
        profession,
        email,
        phone
    });
    
    console.log(pato.__proto__);
    
    return pato;
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
    
    }, res) => {
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

