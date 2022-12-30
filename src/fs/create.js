import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { access } from 'fs/promises';

const file = fileURLToPath(import.meta.url);
const __dirname = path.dirname(file);
const filePath = path.join(__dirname, 'files', 'fresh.txt');
const message = `I am fresh and young`;
const color = {
  red: "\x1b[31m",
  green: "\x1b[32m",
};
const isPathExist = async (path) => {
  try {
    await access(path);

    return true;
  } catch {
    return false;
  }
};

const create = async () => {  
  try {
    const isPath = await isPathExist(filePath);

    if (isPath) {
      throw new Error('FS operation failed');
    }

    await fs.writeFile(filePath, message, { flag: "wx" });
    console.log(`${color.green}File created`);
  } catch (err) {
    console.log(`${color.red}${err}`);
  }

};

await create();
