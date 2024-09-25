console.log("Cohort De09");
var b = 5;
var c = 2;
var e = "Hello";
var f = "World";
var g;
var h; //any
//* Arrays
var nums = [1, 2, 3]; // string ifade pushlanırsa hata verir typescriptte
var usernames = ["Kemal", "Mustafa"];
usernames.push("Ayşe");
// usernames.push(5)    //number olduğu için hata veriyor ts'de
usernames = [];
var surnames = [];
// bu şekilde boş bir atama da yapılabilir, hala string'dir
surnames.push("Harold");
surnames.push("25");
//type declaration 2.yol
var nums2 = [5, 6];
// console.log(surnames );
//* Tuples
var myTuple = [5, "merhaba", false];
console.log(myTuple);
