import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const file = fileURLToPath(import.meta.url);
const __dirname = path.dirname(file);
const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
      await fs.unlink(filePath);
    } catch (error) {
      throw new Error('FS operation failed');
    }
};

await remove();
