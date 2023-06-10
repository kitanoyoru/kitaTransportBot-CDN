import * as config from 'config';

import { ExpressConfig } from "@/middleware/base";
import { logger } from '@/utils/logger';


export class Application {

  server: any;
  express: ExpressConfig;

  constructor() { 
    this.express = new ExpressConfig();

    const port      = config.get('express.port');

    this.server = this.express.app.listen(port, () => {
      logger.info(`
      -------------------------------------------------
      Server Started! Express: http://localhost:${port}
      Health: http://localhost:${port}/ping
      -------------------------------------------------
      `)
    })
  }
}
