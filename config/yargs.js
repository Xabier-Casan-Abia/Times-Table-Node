const opts = {
  base: {
    demand: true,
    alias: "b"
  },
  limit: {
    default: 10,
    alias: "l"
  }
};

const argv = require("yargs")
  .command("list", "Print a times table on the screen", opts)
  .command("create", "Create a times table file", opts)
  .help().argv;

module.exports = { argv };
