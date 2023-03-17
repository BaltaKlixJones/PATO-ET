const { Router } = require("express");
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// const turnRouter = require("./TurnRouter.js");
const serviceRouter = require("./ServiceRouter.js");
const professionalRouter = require("./ProfessionalRouter.js");
const patoRouter = require("./PatoRouter.js");
// const paymentRouter = require("./PaymentRouter.js");
// const reviewRouter = require("./ReviewRouter.js")


// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);

// router.use("/turn", turnRouter);
router.use("/service", serviceRouter);
router.use("/profesionales", professionalRouter);
 router.use("/pato", patoRouter);
// router.use("/payment", paymentRouter);
// router.use("/review", reviewRouter)


module.exports = router;