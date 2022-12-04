import * as fs from 'fs/promises';
import * as path from 'path';

const copy = async () => {
  const copyFrom = ('src/fs/files');
  const copyTo = ('src/fs/files_copy');

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
