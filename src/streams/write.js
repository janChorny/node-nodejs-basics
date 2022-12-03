import { createWriteStream } from 'fs';
import { stdin } from 'process';

const write = async () => {
    try {
      const greetingMessage = `Hello, write something here!\nAnd press Ctrl + C to exit.`;
      console.log(greetingMessage);
      const filePath = 'src/streams/files/fileToWrite.txt';
      const writeStream = createWriteStream(filePath);
      stdin.pipe(writeStream);
    } catch (error) {
      console.log(error.message)
    }
};

await write();
