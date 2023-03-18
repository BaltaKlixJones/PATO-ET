const { Router } = require("express");

const router = Router();

const serviceRouter = require("./ServiceRouter.js");
const professionalRouter = require("./ProfessionalRouter.js");
const patoRouter = require("./PatoRouter.js");



router.use("/service", serviceRouter);
router.use("/profesionales", professionalRouter);
router.use("/pato", patoRouter);



module.exports = router;