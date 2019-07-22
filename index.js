const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Enter Question number: `, (qno) => {
  const runQ = require(`./p${qno}.js`);
  readline.close();
})

