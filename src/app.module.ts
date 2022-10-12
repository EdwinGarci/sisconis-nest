import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './config/database/database.module';
import { CampamentosModule } from './modules/campamentos/campamentos.module';
import { OficinasModule } from './modules/oficinas/oficinas.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    CampamentosModule,
    OficinasModule,
  ],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT');
  }
}
