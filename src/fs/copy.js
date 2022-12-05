import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const file = fileURLToPath(import.meta.url);
const __dirname = path.dirname(file);
const copyFrom = path.join(__dirname, 'files');
const copyTo = path.join(__dirname, 'files_copy');

const copy = async () => {
  try {
    const files = await fs.readdir(copyFrom);
    await fs.mkdir(copyTo);

    for (let file of files) {
      await fs.copyFile(path.join(copyFrom, file), path.join(copyTo, file));
    };

  } catch (error) {
    throw new Error('FS operation failed');
  }
};

copy();
