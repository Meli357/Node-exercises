import * as fs from "node:fs";

fs.readFile("greet.txt", { encoding: "utf-8" }, function (error, data) {
  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
});
