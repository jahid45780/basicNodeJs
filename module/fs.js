const fs = require("fs")
const text = "hello ai plz help me "
 fs.writeFileSync("./hello.txt", text)
const data = fs.readFileSync("./hello.txt", {encoding: "utf8"} )

console.log(data);