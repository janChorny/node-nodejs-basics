import * as fs from 'fs/promises';


const rename = async () => {
    try {
      const oldPath = `src/fs/files/wrongFilename.txt`;
      const newPath = `src/fs/files/properFilename.md`;

      await fs.rename(oldPath, newPath);
      
    } catch (error) {
      console.log('FS operation failed');
    }
};

await rename();
