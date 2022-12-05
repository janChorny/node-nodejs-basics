import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const file = fileURLToPath(import.meta.url);
const __dirname = path.dirname(file);
const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newPath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    try {
      await fs.rename(oldPath, newPath);
      
    } catch (error) {
      throw new Error('FS operation failed');
    }
};

await rename();
