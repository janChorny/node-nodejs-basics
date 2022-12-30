import { spawn } from 'child_process';
import { stdin, stdout } from 'process';
import * as path from 'path';
import { fileURLToPath } from 'url';

const file = fileURLToPath(import.meta.url);
const __dirname = path.dirname(file);
const filePath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    try {
      const childProcess = spawn('node', [filePath, ...args]);
      stdin.on('data', (data) => {
      childProcess.stdin.write(data);
      });
      childProcess.stdout.on('data', (data) => {
      stdout.write(data);
      });
    } catch (error) {
      console.log(error.message);
    }
};

spawnChildProcess(['one', 'two', 'three', 'four', 'five']);
