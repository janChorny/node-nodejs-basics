import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const calculateHash = async () => {
  const path = 'src/hash/files/fileToCalculateHashFor.txt';
  try {
    const file = await readFile(path);
    const res = createHash('sha256').update(file).digest('hex');
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
};

await calculateHash();
