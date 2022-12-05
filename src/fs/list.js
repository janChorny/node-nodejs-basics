import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const file = fileURLToPath(import.meta.url);
const __dirname = path.dirname(file);
const filePath = path.join(__dirname, 'files');

const list = async () => {
    try {
      const files = await fs.readdir(filePath);
      console.log(files);
    } catch (error) {
      throw new Error('FS operation failed');
    }
};

await list();
