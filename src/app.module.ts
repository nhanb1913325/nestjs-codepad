import { Module } from '@nestjs/common';
import { MathController } from './algorithms/math/math.controller';
import { CryptographyController } from './algorithms/cryptography/cryptography.controller';
import { GraphController } from './algorithms/graph/graph.controller';
import { ImageProcessingController } from './algorithms/image-processing/image-processing.controller';
import { LinkedListController } from './algorithms/linked-list/linked-list.controller';

@Module({
  controllers: [
    MathController,
    CryptographyController,
    GraphController,
    ImageProcessingController,
    LinkedListController,
  ],
})
export class AppModule {}
