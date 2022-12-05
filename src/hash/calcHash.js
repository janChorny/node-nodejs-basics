import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  try {
    const file = await readFile(filePath);
    const res = createHash('sha256').update(file).digest('hex');
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
};

await calculateHash();
