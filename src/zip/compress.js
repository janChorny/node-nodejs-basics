import {createGzip} from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
  try {
    const gzip = createGzip();
    const inp = createReadStream('src/zip/files/fileToCompress.txt');
    const out = createWriteStream('src/zip/files/fileToCompress.txt.gz');
    inp.pipe(gzip).pipe(out);
  } catch (error) {
    console.log(error.message);
  }
};

await compress();
