import * as fs from 'fs/promises';

const remove = async () => {
    try {
      const path = 'src/fs/files/fileToRemove.txt';

      await fs.unlink(path);
    } catch (error) {
      throw new Error('FS operation failed');
    }
};

await remove();
