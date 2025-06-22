// const fs = require("fs")
// const text = "hello ai plz help me "
//  fs.writeFileSync("./hello.txt", text)
// const data = fs.readFileSync("./hello.txt", {encoding: "utf8"} )

// console.log(data);


const fs = require('fs');
let text = "how are you developer"

// fs.writeFile("./hello.txt", text, 'utf8',(err)=>{
//       if(err){
//          console.log("something vul", err);
//          return
//       }

//       console.log("writeing suceesfully ");
// })

// fs.readFile('./hello.txt', 'utf8', (err, data) =>{
//      if(err){
//         console.log("something vul", err);
//         return
//      }
//      text = data
//      console.log(text, "yes you done");
// });
// fs.writeFile("./hello.txt", text, 'utf8', (err) => {
//     if (err) {
//         console.log("something vul", err);
//         return;
//     }

//     console.log("writing successfully");

//     fs.readFile('./hello.txt', 'utf8', (err, data) => {
//         if (err) {
//             console.log("something vul", err);
//             return;
//         }
//         text = data;
//         console.log(text, "yes you done");
//     });
// });



const readStream = fs.createReadStream('./hello.txt',{ encoding: 'utf8'})
const witeStream = fs.createWriteStream ('./hello_word.txt', {encoding: 'utf-8'})


