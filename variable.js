// Using Let
let name = "Dayvon";
let age = 19;
let isStudent = true;

document.getElementById("demo1").innerHTML = 
"Name: " + name + "<br>Age: " + age + "<br>Student: " + isStudent;

var city = "Brooklyn";		// Function-scoped
let state = "NY";		// Block-scoped
const country = "USA";		// Cannot be reassigned


document.getElementById("demo2").innerHTML = 
	"Location: " + city + ", " + state + ", " + country;