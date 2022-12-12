import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypegooseModule.forRoot(
      'mongodb+srv://user:password@cmongoDbHost/database?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: false,
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
