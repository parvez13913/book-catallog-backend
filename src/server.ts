import app from "./app";
import { Server } from "http";
import config from "./config";

async function bootstrap() {
  try {
    const server: Server = app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (error) {
    console.log("Fail to connect Database", error);
  }
}

bootstrap();
