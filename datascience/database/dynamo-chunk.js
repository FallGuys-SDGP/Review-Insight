const fs = require("fs");
const shell = require("shelljs");

function processFile(filename, table) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.log("Cannot parse", err);
      process.exit(1);
    }

    const items = JSON.parse(data);

    let counter = 0;
    let req = {};
    let str = "";

    req[table] = [];

    items[table].forEach((item) => {
      counter++;
      req[table].push(item);

      if (counter % 25 === 0) {
        str = JSON.stringify(req);
        fs.writeFileSync("./tmp.json", str);

        console.log(`Write ${counter / 25}th 25 items.`);

        const exec =
          "aws dynamodb batch-write-item --request-items file://tmp.json";
        shell.exec(exec);

        req[table] = [];
      }
    });

    if (counter % 25 > 0) {
      str = JSON.stringify(req);
      fs.writeFileSync("./tmp.json", str);

      console.log(`Write ${counter % 25} rest items.`);

      const exec =
        "aws dynamodb batch-write-item --request-items file://tmp.json";
      shell.exec(exec);

      req[table] = [];
    }
  });
}

if (!process.argv[2] || !process.argv[3]) {
  console.log("Missing arguments");
  console.log("Usage: node dynamo-chunk.js file tableName");

  process.exit(1);
}

processFile(process.argv[2], process.argv[3]);