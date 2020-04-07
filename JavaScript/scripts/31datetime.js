rightnow = new Date();
console.log("Date Object;", rightnow);

var dateString = rightnow.toString();
console.log("Date String:", dateString);

var theDay = rightnow.getDay();
// var theStringDay = dateString.getDay(); **TypeError on string
console.log("getDay() returns number 0-6 as sun-sat:", theDay);

// to get day name 
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
theDay = now.getDay();
var dayName = dayNames[theDay];
console.log("by using array index we get day as:", dayName);

//32: Extracting parts of the date and time
var d = new Date();

var month = d.getMonth();// it will return you a number from 0 to 11 as jan to dec
var date = d.getDate();// it will return you a number of current date
var year = d.getFullYear();// it will return you a number of current year
var hrs = d.getHours();// it will return you a number of current hour since midnight from 0 to 23
var mins = d.getMinutes();// it will return you a number of minutes since last hour from 0 to 59
var sec = d.getSeconds();// it will return you a number of seconds since last minute from 0 to 59
var millsec = d.getMilliseconds();// it will return you a number of milliseconds since last second from 0 t0 999
var millsSince = d.getTime();// it will gives you the number of milliseconds that have elapsed since midnight, Jan. 1, 1970.
console.log(millsSince);
console.log(typeof(millsSince));

//33: Specifying a date and time
var today = new Date();
var graduationDay = new Date("January 01, 2021 13:25:00"); // to assign any date
console.log("Graduation date:", graduationDay);
var msToday = today.getTime();
console.log("extracting remaining time in millisecs from now...");
var msDiff = new Date("January 1, 2021").getTime() - new Date().getTime(); 
console.log("extracted time in ms:", msDiff);
console.log("extracting remaining time in days from now...");
var daysDiff = Math.floor(msDiff / (1000*60*60*24));
console.log("extracted time in days:", daysDiff);

// 34: Changing elements of a date and time You can
var d = new Date();
d.setFullYear(2001);
d.setMonth(11);
d.setDate(2);
d.setHours(13);
d.setMinutes(05);
d.setSeconds(55);
console.log(d);
