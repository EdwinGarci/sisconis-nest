import { Test, TestingModule } from '@nestjs/testing';
import { CampamentoController } from './campamento.controller';

describe('CampamentoController', () => {
  let controller: CampamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampamentoController],
    }).compile();

    controller = module.get<CampamentoController>(CampamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
