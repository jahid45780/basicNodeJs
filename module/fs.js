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

readStream.on('data',(data)=>{
     console.log(data);

     witeStream.write(data, (err)=>{
          if(err){
             throw Error('error!!', err)
          }
     })
})

readStream.on('error',(err)=>{
    throw Error('error.', err)
})

readStream.on('end',()=>{
     console.log('reading end');
     witeStream.end()
})

witeStream.on('finish', ()=>{
     console.log('wite  now finished');
})
