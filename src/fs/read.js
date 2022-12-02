import * as fs from 'fs/promises';

const read = async () => {
    try {
      const path = 'src/fs/files/fileToRead.txt';
      const fileData = await fs.readFile(path, 'utf8');
      console.log(fileData);
    } catch (error) {
      console.log('FS operation failed');
    }
};

await read();
