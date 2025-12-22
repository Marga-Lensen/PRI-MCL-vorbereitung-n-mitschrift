
// Create a new Date object
const currentDate: Date = new Date();
console.log("current date now: ", currentDate);

// Create a new Date object with a specific date and time
const specificDateTime: Date = new Date("2021-12-31T23:59:59");
console.log("some date in past: ", specificDateTime)

// Get the current date and time in a string format
const currentDateTime: string = currentDate.toString();
console.log("Current Datetime (string format):", currentDateTime);

// Get the current date and time in ISO format
// This uses the ISO-8601 standard format
const currentDateTimeISO: string = currentDate.toISOString();
console.log("Current Datetime (ISO format):", currentDateTimeISO);

// Read https://simple.wikipedia.org/wiki/ISO_8601


// What is UTC?

// Get the individual components of the date
const year: number = currentDate.getFullYear();
const month: number = currentDate.getMonth() + 1; // Note: month is zero-based
const day: number = currentDate.getDate();
console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", day);

// Get the current time
const hours: number = currentDate.getHours();
const minutes: number = currentDate.getMinutes();
const seconds: number = currentDate.getSeconds();
console.log("Time:", hours + ":" + minutes + ":" + seconds);
