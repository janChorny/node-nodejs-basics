import {createGzip} from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const file = fileURLToPath(import.meta.url);
const __dirname = path.dirname(file);
const fileInput = path.join(__dirname, 'files', 'fileToCompress.txt');
const fileOutput = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  try {
    const gzip = createGzip();
    const inp = createReadStream(fileInput);
    const out = createWriteStream(fileOutput);
    inp.pipe(gzip).pipe(out);
  } catch (error) {
    console.log(error.message);
  }
};

await compress();
