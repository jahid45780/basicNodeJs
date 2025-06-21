const EventEmitter = require('node:events');

// ক্লাসের নাম Capital Letter দিয়ে
class SchoolBell extends EventEmitter {}

// অবজেক্ট তৈরি করা
const schoolBell = new SchoolBell();

// ইভেন্ট লিসেনার সেট করা
schoolBell.on("ring", () => {
     console.log("yes class today end");
});

schoolBell.on("ring", () => {
     console.log("last on class");
});

schoolBell.on("broken", () => {
     console.log("ohh no my ring stop");
});

// ইভেন্ট ট্রিগার করা
schoolBell.emit("ring");
schoolBell.emit("broken");
