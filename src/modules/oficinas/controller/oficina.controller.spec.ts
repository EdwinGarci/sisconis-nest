import { Test, TestingModule } from '@nestjs/testing';
import { OficinaController } from './oficina.controller';

describe('OficinaController', () => {
  let controller: OficinaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OficinaController],
    }).compile();

    controller = module.get<OficinaController>(OficinaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
