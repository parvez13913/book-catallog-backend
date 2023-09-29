/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Server } from 'http';
import app from './app';
import config from './config';

async function bootstrap() {
  try {
    const server: Server = app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (error) {
    console.log('Fail to connect Database', error);
  }
}

bootstrap();
