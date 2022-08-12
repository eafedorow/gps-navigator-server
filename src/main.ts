import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('REST API навигационной системы')
        .setDescription("Документация REST API навигационной системы для ОАО \"СЕВЕРСТАЛЬ-МЕТИЗ\"")
        .setVersion('1.0.0')
        .addTag('Навигационная система')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => {
        console.log(`SERVER STARTED ON PORT ${PORT}`)
    })
}

start();