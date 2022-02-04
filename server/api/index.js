const express = require("express");
const router_user = express.Router();
const defaultHeaders = require("./middlewares/headers")

module.exports = (app) => {

    // middlewares
    app.use(defaultHeaders)

    const baseRoutesPath = "./modules";
    // routes, [route, route of project folder]
    const routes = [
        ["/files", "/files/routes"]
    ]


    routes.map(([path, ...args]) => {
        const routeArgs = args.map(
          arg =>
            typeof arg === "function" ? arg : require(baseRoutesPath + arg)(router_user)
        );
        router_user.use(path, ...routeArgs);
      });

    app.use("/", router_user)
}