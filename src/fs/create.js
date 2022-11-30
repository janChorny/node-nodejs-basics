import {readFile} from "node:fs/promises";

const create = async () => {
    try {
      const text = await readFile("./src/fs/files/fresh.txt", {encoding: "utf8"});
      console.log(text);
    } catch (err) {
      console.log(err.message)
    }
};

await create();
