const { Router } = require("express");

const router = Router();

const serviceRouter = require("./ServiceRouter.js");
const professionalRouter = require("./ProfessionalRouter.js");
const patoRouter = require("./PatoRouter.js");
const blogRouter = require("./BlogRouter.js");



router.use("/service", serviceRouter);
router.use("/profesionales", professionalRouter);
router.use("/pato", patoRouter);
router.use("/blog", blogRouter);



module.exports = router;