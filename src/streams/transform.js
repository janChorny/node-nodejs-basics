import { Transform } from 'stream';
import { stdin, stdout } from 'process';

const myTransform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().split("").reverse().join(""))
  }
});

const transform = async () => {
  try {
    stdin.pipe(myTransform).pipe(stdout);
  } catch (error) {
    console.log(error.message)
  }
};

await transform();
