import { Test, TestingModule } from '@nestjs/testing';
import { LinkedListController } from './linked-list.controller';

describe('LinkedListController', () => {
  let controller: LinkedListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinkedListController],
    }).compile();

    controller = module.get<LinkedListController>(LinkedListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
