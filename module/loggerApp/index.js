// const path = require('path')
// const fs = require('fs')
// const inputAgu = process.argv.slice(2)
// const text = inputAgu.join(' ').concat('\n')
// const timestamp = new Date().toISOString()
// const message = `${text} ${timestamp} \n`

// if(!message){
//    console.log("plz provied a add the log");
//    console.log("ex node index.js hello word ");
//    process.exit(1)
// }

// const pathName = path.join(__dirname, 'log.txt')

// fs.appendFile(pathName, message, {encoding:'utf-8'}, () =>{
//      console.log('hello word iam study node js');
// })

// console.log(pathName);


const path = require('path');
const fs = require('fs');

// ১. command line থেকে ইনপুট নিই
const inputAgu = process.argv.slice(2);  // index.js এর পরের ইনপুট
const text = inputAgu.join(' ').concat('\n'); // ইনপুটগুলো একত্র করে newline যোগ

// ২. টাইমস্ট্যাম্প যোগ করি
const timestamp = new Date().toISOString();
const message = `${text.trim()} - ${timestamp}\n`;  // চূড়ান্ত লগ মেসেজ

// ৩. যদি ইনপুট না দেওয়া হয়, তাহলে ইউজারকে মেসেজ দেখাও এবং প্রোগ্রাম থামাও
if (inputAgu.length === 0) {
   console.log("❌ Plz provide a log message");
   console.log("✅ Example: node index.js Hello world");
   process.exit(1);
}

// ৪. লগ ফাইলের পাথ বানাও
const pathName = path.join(__dirname, 'log.txt');

// ৫. ফাইলে মেসেজ লিখো
fs.appendFile(pathName, message, { encoding: 'utf-8' }, (err) => {
    if (err) {
        console.log("❌ কিছু একটা সমস্যা হয়েছে:", err);
        return;
    }
    console.log("✅ Log লেখা হয়েছে: ", message.trim());
});

// ৬. লগ ফাইলের পাথ দেখাও
console.log("📄 File saved at:", pathName);
 
