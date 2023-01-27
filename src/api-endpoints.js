module.exports = function (app) {
  // require("./users/users.routes")(app);
  require("./auth/auth-routes")(app);

  app.get("/users/:id", (req, res) => {
    // To describe API endpoint with swagger inside service, put sharp following by swagger parameter
    // #swagger.tags = ['User']
    // #swagger.description = 'API endpoint to get user by id'
    // #swagger.parameters['id'] = { description: 'User id' }

    /* #swagger.parameters['filters'] = {
	       in: 'query',
               description: 'definition of filters',
               type: 'string'
        } */

    const filters = req.query.filters;

    if (false) {
      return res.status(404).send(false);
    }

    /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/User" },
               description: 'Model of user response' 
    } */
    // return res.status(200).send(data);
    return res.send({
      welcome: "Hello, welcome to our node js and express API :)",
    });
  });

  app.post("/users", (req, res) => {
    /* #swagger.tags = ['User']
           #swagger.description = 'API Endpoint to add new user' */

    /* #swagger.parameters['newUser'] = {
               in: 'body',
               description: 'User informations',
               required: true,
               schema: { $ref: "#/definitions/AddUser" }
        } */

    const newUser = req.body;

    if (true) {
      // #swagger.responses[201] = { description: 'User registered with success !!!' }
      return res.status(201).send(data);
    }
    return res.status(500); // #swagger.responses[500]
  });
};
