const Pato = require("../Models/Pato");



const getPatoController = async () => {
    const pato = await Pato.findAll();
    return pato;
  };

  const getIDPatoController = async (id) => {
    const patoID = await Pato.findByPk(id);
    return patoID;
  };

