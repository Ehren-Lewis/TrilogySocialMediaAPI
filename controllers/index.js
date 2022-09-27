const router = require("express").router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use(( req, res ) => res.send("Wrong route!"))