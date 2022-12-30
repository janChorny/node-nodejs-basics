const parseArgs = () => {
    const args = process.argv.slice(2);
    const res = [];
    args.forEach((e,i,array) => {
      if(e.includes('--')){
        res.push(`${e.replace('--', '')} is ${array[i + 1]}`)
      }
    });
    console.log(res.join(', '))
};

parseArgs();
