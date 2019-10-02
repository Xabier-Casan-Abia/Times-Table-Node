const { argv } = require("./config/yargs");
const colors = require("colors");

const { listTable, createFile } = require("./multiply/multiply");

let command = argv._[0];

switch (command) {
  case "list":
    listTable(argv.base, argv.limit)
      .then(data => console.log(data))
      .catch(error => console.log(error));
    break;
  case "create":
    createFile(argv.base, argv.limit)
      .then(
        archivo => console.log("The file", colors.bold(colors.green(archivo))),
        "has been created."
      )
      .catch(error => console.log(error));
    break;
  default:
    console.log(`Command not recognised, please run  "node app help"`);
}
