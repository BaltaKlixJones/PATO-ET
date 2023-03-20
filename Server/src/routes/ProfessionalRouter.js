const { Router } = require("express");
const {
  getProfessionalHandler,
  getIDProfessionalHandler,
  deleteProfessionalHandler,
  postProfessionalHandler,
  putProfessionalHandler,
} = require("../handlers/ProfHandler");
const professionalRouter = Router();

professionalRouter.get("/", getProfessionalHandler);
professionalRouter.get("/:id", getIDProfessionalHandler);
professionalRouter.delete("/:id", deleteProfessionalHandler);
professionalRouter.post("/", postProfessionalHandler);
professionalRouter.put("/:id", putProfessionalHandler);

module.exports = professionalRouter;
