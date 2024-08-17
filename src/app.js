const express = require("express");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/taskRoutes");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorHandler");
const { default: helmet } = require("helmet");
const setupSwaggerDocs = require('./docs/swagger');

dotenv.config();
const app = express();

const PORT = process.env.DB_PORT || 3000;
 
app.use(helmet());//Use Helmet!
app.use(bodyParser.json());
app.use("/tasks", taskRoutes);//asignacion de rutas
setupSwaggerDocs(app)// Configurar Swagger
app.use(errorHandler)//controlador de errores
app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});
