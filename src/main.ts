import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // How To Enable CORS in NestJS (2022)
  // https://blog.bitsrc.io/how-to-enable-cors-in-nest-js-90c1b6316289
  await app.listen(process.env.PORT || 3000);
  console.log("app is runing at port 3000")
}
bootstrap();
