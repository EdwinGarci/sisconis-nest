import { Test, TestingModule } from '@nestjs/testing';
import { CampamentoService } from './campamento.service';

describe('CampamentoService', () => {
  let service: CampamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampamentoService],
    }).compile();

    service = module.get<CampamentoService>(CampamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
