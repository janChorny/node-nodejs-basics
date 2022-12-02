const parseEnv = () => {
    const userObj = process.env;
    for (let key in userObj){
      if (key.includes('RSS_')){
        console.log(`${key} = ${userObj[key]};`);
      }
    }
};

parseEnv();
