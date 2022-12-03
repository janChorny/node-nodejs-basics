import { createReadStream } from "fs";
import { stdout } from "process";

const read = async () => {
  try {
    const filePath = 'src/streams/files/fileToRead.txt';
    const readStream = createReadStream(filePath, 'utf-8');
    readStream.on('data', (chunk) => stdout.write(chunk));
  } catch (error) {
    console.log(error.message)
  }
};

await read();
