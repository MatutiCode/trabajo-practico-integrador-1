import dotenv from "dotenv";
import app from "./app.js";
import { connectDB, sequelize } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();
  await sequelize.sync();

  app.listen(PORT, () => {
    console.log(`Servidor corriento en http://localhost:${PORT}`);
  });
};

startServer();
