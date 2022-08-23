import { Test, TestingModule } from '@nestjs/testing';
import { OficinaService } from './oficina.service';

describe('OficinaService', () => {
  let service: OficinaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OficinaService],
    }).compile();

    service = module.get<OficinaService>(OficinaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
