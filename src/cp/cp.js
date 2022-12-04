import { spawn } from 'child_process';
import { stdin, stdout } from "process";

const spawnChildProcess = async (args) => {
    try {
      const path = 'src/cp/files/script.js';
      const childProcess = spawn('node',[path, ...args]);
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
