import * as fs from 'fs/promises';

const read = async () => {
    try {
      const path = 'src/fs/files/fileToRead.twt';
      const fileData = await fs.readFile(path, 'utf8');
      console.log(fileData);
    } catch (error) {
      throw new Error('FS operation failed');
    }
};

await read();
