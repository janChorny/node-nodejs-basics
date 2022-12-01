import * as fs from 'fs/promises';

const create = async () => {
  const path = 'src/fs/files/fresh.txt';
  const message = `I am fresh and young`;
  try {
    await fs.writeFile(path, message, {flag: "wx"})
  } catch (error) {
    console.log('FS operation failed');
  }
};

await create();
