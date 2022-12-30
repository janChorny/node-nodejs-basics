import { createWriteStream } from 'fs';
import { stdin } from 'process'; 
import * as path from 'path';
import { fileURLToPath } from 'url';

const file = fileURLToPath(import.meta.url);
const __dirname = path.dirname(file);
const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
const greetingMessage = `Hello, write something here!\nAnd press Ctrl + C to exit.`;

const write = async () => {
    try {
      console.log(greetingMessage);
      const writeStream = createWriteStream(filePath);
      stdin.pipe(writeStream);
    } catch (error) {
      console.log(error.message)
    }
};

await write();
