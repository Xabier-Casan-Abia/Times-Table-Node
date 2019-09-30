const fs = require("fs");
const colors = require("colors/safe");
let data = "";

let listTable = (base, limit = 10) => {
  console.log(
    colors.bold(
      colors.rainbow(
        `\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n                   `
      )
    ),
    colors.bold(colors.cyan(colors.underline(`${base} TIMES TABLE`))),
    colors.bold(
      colors.rainbow(`\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n`)
    )
  );

  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`The value entered is not a number: ${base}`);
    } else {
      for (i = 1; i <= limit; i++) {
        let result = i * base;
        data += `${base} x ${i} = ${result}\n`;
      }
      resolve(data);
    }
  });
};

let createFile = (base, limit = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`The value entered is not a number: ${base}`);
    } else {
      for (i = 1; i <= limit; i++) {
        let result = i * base;
        data += `${base} x ${i} = ${result}\n`;
      }
      fs.writeFile(
        `tables/${base}-times-table-up-to-${limit}.txt`,
        data,
        error => {
          if (error) reject(error);
          else resolve(`${base}-times-table-up-to-${limit}`);
        }
      );
    }
  });
};

module.exports = { listTable, createFile };
