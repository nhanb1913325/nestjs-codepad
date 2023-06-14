import { Controller, Get, Param, Res } from '@nestjs/common';
import { readFileSync } from 'fs';
import * as path from 'path';

@Controller('image-processing')
export class ImageProcessingController {
  @Get(':folderName')
  getMarkdownFile(@Param('folderName') folderName: string, @Res() res): void {
    //path thu muc goc chua file markdown
    const parentDir = path.join(process.cwd(), 'md-file');
    //path toi thu muc con can tim trong image-processing
    const folderPath = path.join(
      parentDir,
      'algorithms',
      'image-processing',
      folderName,
    );
    try {
      const filePath = path.join(folderPath, 'README.md');
      //read file
      const content = readFileSync(filePath, 'utf8');
      //send noi dung file markdown
      res.status(200).send(content);
    } catch (error) {
      //hien thi loi va thong bao
      //console.error(error);
      res.status(404).json({ message: 'File not found' });
    }
  }
}
