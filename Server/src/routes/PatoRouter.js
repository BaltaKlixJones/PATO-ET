const { Router } = require("express");
const {
    getPatoHandler,
    postPatoHandler,
    putPatoHandler
} = require("../handlers/PatoHandler");
const professionalRouter = Router();

professionalRouter.get("/", getPatoHandler);
professionalRouter.post("/", postPatoHandler);
professionalRouter.put("/:id", putPatoHandler);

module.exports = professionalRouter;
