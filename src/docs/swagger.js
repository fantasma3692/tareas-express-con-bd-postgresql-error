const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de gestion de tareas",
      version: "1.0.0",
      description: "API para gestionar tareas en una aplicación Express",
    },
    servers: [
      {
        url: "https://servidor-tareas-express.onrender.com/tasks",
      },
    ],
    components: {
      schemas: {
        Task: {
          type: "object",
          required: ["title"],
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            title: {
              type: "string",
              example: "Mi Tarea",
            },
            description: {
              type: "string",
              example: "Descripción de la tarea",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
const setupSwaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(
    "Swagger docs disponible en la ruta https://servidor-tareas-express.onrender.com/api-docs"
  );
};
module.exports = setupSwaggerDocs;
