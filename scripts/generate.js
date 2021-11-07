const input = require("fs").readFileSync("/dev/stdin", "utf-8");

const data = Object.fromEntries(
  input
    .split(/\r?\n/)
    .map((line) => line.split(","))
    .filter(([date, _]) => !isNaN(new Date(date)))
    .map(([date, name]) => [new Date(date).toISOString().replace(/T.*$/, ""), name])
);

console.log(JSON.stringify(data, null, 2));
