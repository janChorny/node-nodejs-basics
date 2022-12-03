import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
  try {
    const unzip = createUnzip();
    const inp = createReadStream('src/zip/files/fileToCompress.txt.gz');
    const out = createWriteStream('src/zip/files/fileToCompress1.txt');
    inp.pipe(unzip).pipe(out);
  } catch (error) {
    console.log(error.message);
  }
};

await decompress();
