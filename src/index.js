import { setupService } from "./server.js";
import { innitMongoDBConnection } from "./db/innitMongoDBConnection.js";

async function bootstrap() {
    await innitMongoDBConnection();
    await setupService();
}

bootstrap()
