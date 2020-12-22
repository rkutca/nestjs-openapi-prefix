import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CatsModule } from './cats.module';

async function bootstrap(): Promise<void> {
  const PREFIX = '/nest/global/prefix';

  // create nest app
  const app = await NestFactory.create<NestFastifyApplication>(
    CatsModule,
    new FastifyAdapter({
      trustProxy: true,
    }),
  );

  // set global prefix
  // note this prefix is dependend on
  // the API gateway prefix
  app.setGlobalPrefix(PREFIX);

  const options = new DocumentBuilder()
      .setTitle('NestJS Swagger Nginx')
      .setDescription('Using NestJS behind a reverse proxy.')
      .setVersion('1.0')
      .build();

  // initialize swagger docs
  const document = SwaggerModule.createDocument(app, options, {
    ignoreGlobalPrefix: false,
  });

  // only expose swagger docs
  // on development
  SwaggerModule.setup(`${PREFIX}/docs`, app, document, {});

  // listen on port 3000
  await app.listen(3000, '0.0.0.0');
}

void bootstrap();
