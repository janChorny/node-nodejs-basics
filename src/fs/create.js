import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const file = fileURLToPath(import.meta.url);
const __dirname = path.dirname(file);
const filePath = path.join(__dirname, 'files', 'fresh.txt');
const message = `I am fresh and young`;

const create = async () => {  
  try {
    await fs.writeFile(filePath, message, {flag: "wx"});
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();
