const express = require("express");

const StatusController = require("./controllers/StatusController");
const BoyController = require("./controllers/BoyController");
const routes = express.Router();


routes.get("/status", StatusController.index);
routes.post("/status", StatusController.store);
routes.get("/status/:id", StatusController.show);
routes.put("/status/:id", StatusController.update);
routes.delete("/status/:id", StatusController.destroy);

routes.get("/boys", BoyController.index);
routes.post("/status/:id/boys", BoyController.store);
routes.get("/boys/:id", BoyController.show);
routes.put("/boys/:id", BoyController.update);
routes.delete("/boys/:id", BoyController.destroy);

module.exports = routes;