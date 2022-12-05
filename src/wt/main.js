import { cpus } from 'os';
import { Worker } from 'worker_threads';
import * as path from "path";
import { fileURLToPath } from "url";

const file = fileURLToPath(import.meta.url);
const __dirname = path.dirname(file);
const workerPath = path.join(__dirname, "worker.js");

const getWorker = (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, {
      workerData
    });
    worker.on('message', resolve);
    worker.on('error', reject);
  });
}

const getArrayOfWorkers = async () => {
  let result = [];
  const cores = cpus();
  for (let i = 0; i < cores.length; i++) {
    let res = await getWorker(10 + i)
      .then(data => ({ status: 'resolved', data }))
      .catch(err => ({ status: 'error', data: null }));
    result.push(res);
  }
  return result;
}

const performCalculations = async () => {
    const output = await getArrayOfWorkers();
    console.log(output);
};

await performCalculations();
