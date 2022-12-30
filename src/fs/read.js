import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const file = fileURLToPath(import.meta.url);
const __dirname = path.dirname(file);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
      const fileData = await fs.readFile(filePath, 'utf8');
      console.log(fileData);
    } catch (error) {
      throw new Error('FS operation failed');
    }
};

await read();
