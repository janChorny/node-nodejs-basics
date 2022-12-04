import * as fs from 'fs/promises';

const list = async () => {
    try {
      const path = 'src/fs/files/fileses';
      const files = await fs.readdir(path);
      console.log(files);
    } catch (error) {
      throw new Error('FS operation failed');
    }
};

await list();
