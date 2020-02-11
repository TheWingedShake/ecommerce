import { Test, TestingModule } from '@nestjs/testing';
import { ProductDetailItemService } from './product-detail-item.service';

describe('ProductDetailItemService', () => {
  let service: ProductDetailItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductDetailItemService],
    }).compile();

    service = module.get<ProductDetailItemService>(ProductDetailItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
