import { createReadStream } from 'fs';
import { stdout } from 'process';
import * as path from 'path';
import { fileURLToPath } from 'url';

const file = fileURLToPath(import.meta.url);
const __dirname = path.dirname(file);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const readStream = createReadStream(filePath, 'utf-8');
    readStream.on('data', (chunk) => stdout.write(chunk));
  } catch (error) {
    console.log(error.message)
  }
};

await read();
