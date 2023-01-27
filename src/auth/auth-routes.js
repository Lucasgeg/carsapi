module.exports = app => {
    const auth = require('./auth-controller');
    const router = require('express').Router();
    const jwtMiddleware = require('./jwt-middleware');

    router.post("/register", auth.register);

    router.post("/sign-in", auth.signIn);

    router.get("/me", jwtMiddleware.checkJwtTokenMiddleware, auth.getCurrentUser)

    // -- To declare the prefix path of your API service
    app.use("/carsapi/api/v1", router);
}