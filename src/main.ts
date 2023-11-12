import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.modul';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  await app.listen(4000);
}
bootstrap();
