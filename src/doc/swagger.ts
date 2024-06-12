import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
export function swagger(app:INestApplication, environment: string) {
   if (environment === 'production') {
    return;
   }

const config = new DocumentBuilder()
.setTitle('API LOJA ONLINE')
.setVersion('1.0')
.addTag('E-Commerce')
.build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
}