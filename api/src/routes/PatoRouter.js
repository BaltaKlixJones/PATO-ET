const { Router } = require("express");
const {
    getPatoHandler,
    postPatoHandler,
    putPatoHandler
} = require("../Handlers/PatoHandler");
const professionalRouter = Router();

professionalRouter.get("/", getPatoHandler);
professionalRouter.post("/", postPatoHandler);
professionalRouter.put("/:id", putPatoHandler);

module.exports = professionalRouter;
