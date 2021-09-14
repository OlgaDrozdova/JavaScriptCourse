//TO BOOL
console.log("10", Boolean("10")) //10 true
console.log(10, Boolean(10)) //10 true
console.log([10,2,3], Boolean([10, 2,3])) //[10, 2, 3] true
console.log(Infinity, Boolean(Infinity)) //Infinity true
console.log(NaN, Boolean(NaN)) //NaN false
console.log(undefined, Boolean(undefined)) //undefined false
console.log(null, Boolean(null)) //null false
console.log({num: 10, str: "10"}, Boolean({num: 10, str: "10"})) //{num: 10, str: "10"} true
console.log(true, Boolean(true)) //true true
console.log(Symbol(), Boolean(Symbol())) //Symbol() true

//TO STRING
console.log("10", String("10")) //10 10
console.log(10, String(10)) //10 "10"
console.log([10,2,3], String([10, 2,3])) //[10, 2, 3] "10,2,3"
console.log(Infinity, String(Infinity)) //Infinity "Infinity"
console.log(NaN, String(NaN)) //NaN "NaN"
console.log(undefined, String(undefined)) //undefined "undefined"
console.log(null, String(null)) //null "null"
console.log({num: 10, str: "10"}, String({num: 10, str: "10"})) //{num: 10, str: "10"} "[object Object]"
console.log(true, String(true)) //true "true"
console.log(Symbol(), String(Symbol())) //Symbol() "Symbol()"

//TO NUM
console.log("10", Number("10")) //10 10
console.log(10, Number(10)) //10 10
console.log([10,2,3], Number([10, 2,3])) //[10, 2, 3] NaN
console.log(Infinity, Number(Infinity)) //Infinity Infinity
console.log(NaN, Number(NaN)) //NaN NaN
console.log(undefined, Number(undefined)) //undefined NaN
console.log(null, Number(null)) //null 0
console.log({num: 10, str: "10"}, Number({num: 10, str: "10"})) //{num: 10, str: "10"} NaN
console.log(true, Number(true)) //true 1
console.log(Symbol(), Number(Symbol())) //Error


// пример замыкания//
function getCounter() {
    let counter = 0;
    return function() {
      return counter++;
    }
  }
  let count = getCounter();
  console.log(count());  // 0
  console.log(count());  // 1
  console.log(count());  // 2
  //////////////////////////

  //самовызывающаяся функция
  (function (a, b) {
    return a+b;
    }(2, 3));
  //


let count = 0;
function makeCounter() {
    return count++;
}

//Задание 1
/*Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice*/

function duplicateCount(text){
    var result = {};
    var chars = text.toLowerCase().split("");
    for(var i = 0;i < chars.length;i++){
        var count = result[chars[i]]? result[chars[i]] : 0;
        result[chars[i]] = count + 1;
    }
    return result;
  }


  function duplicateCount(text){
    let result = 0,
        soltingObject = {};
    text.toLowerCase().split('').map(str => {
        if (!soltingObject.hasOwnProperty(str)) {
          soltingObject[str] = 0;
        } else {
          if (soltingObject[str] === 0) {
            result += 1;
          }
          soltingObject[str] = soltingObject[str] + 1;
        }
    });
    return result;
  }

//Задание 2
  function openOrSenior(data){
    return data.map(([age,hand]) => age >= 55 && hand > 7 ? 'Senior': 'Open');
  }

//Задание 3

  function validatePIN (pin) {
    return pin.match(/^\d+$/) != null && (pin.length == 4 || pin.length == 6) ? true : false;
  }

  //Задание 4

  function isTriangle(a,b,c)
  {
     return ((a < b+c) && (b < a+c) && (c < a+b)) ? true : false;
  }

  //Задание 5

  String.prototype.toJadenCase = function () {
    return (this.split(' ').map(str => str[0].toUpperCase() + str.substring(1))).join(' ');
  };




 (function (a, b) {
  return a+b;
  }(2, 3));

 setInterval(function() {
	console.log('text');
}, 1000);

alert ("hello it's me");



function solution(number){
  if (number < 0)
    return 0;
  else {
    var sum = 0;
    for(var i = 3; i < number; i++){
      if(i % 3 == 0 || i % 5 == 0)
        sum += i;
    }
    return sum;
  }
}


function bouncingBall(h,  bounce,  window) {
  if (h > 0 && 0 < bounce && bounce < 1 && window < h){
    var i = 0;
    while(h*bounce > window){
      h *= bounce;
      console.log(bounce);
      console.log(i);
      i++;
    }
    return i*2+1;
  }
  else return -1;
}



function arrayDiff(a, b) {
  return a.filter(el => !b.includes(el));
}


var arr = [9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0];
var moveZeros = function (arr) {
  for (var i=0; i < arr.length-1; i--){
    if (arr[i]===0){
      arr.splice(i,1);
      arr.push(0);
    }
  }
  return arr;
}
moveZeros(arr)




function longestConsec(strarr, k) {
  var n = strarr.length;
  var maxstr = "";
  if (n == 0 || k > n || k <= 0) return "";
  for (var i = 0; i <= n - k; i++){
    arr = strarr.slice(i, i + k).join("");
    if (maxstr.length < arr.length)
      maxstr = arr;
  }
  return maxstr;
}

function findUniq(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++){
    !(arr[i] in obj) ? obj[arr[i]] = 1 : obj[arr[i]] += 1;
  }
  return Number(Object.keys(obj).filter(k=>obj[k] === 1));
}

function pigIt(str){
  var a = str.split(" ");
  for (var i = 0; i < a.length; i++){
    if (a[i].match(/[a-zA-Z]/) != null)
    a[i] = String(a[i]).slice(1)+String(a[i])[0]+"ay";
  }
  return a.join(" ");
}

function humanReadable(seconds) {
  var hours = String(Math.floor(seconds / 60 / 60));
  var minutes = String(Math.floor(seconds / 60) - (hours * 60));
  var seconds = String(seconds % 60);
  if (hours.length == 1) hours = "0" + hours;
  if (minutes.length == 1) minutes = "0" + minutes;
  if (seconds.length == 1) seconds = "0" + seconds;
  return hours + ':' + minutes + ':' + seconds;
}


function isPangram(string){
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < alphabet.length; i++){
    if(string.toLowerCase().indexOf(alphabet[i]) === -1 && string[i].match(/[a-zA-Z]/) != null)
      return false;
  }
  return true;
}

function towerBuilder(nFloors) {
  var i = 1;
  var arr = [];
  while (i <= nFloors){
    i != 1 ? arr.push("*".repeat(i+i-1)) : arr.push("*".repeat(i));
    i++;
  }
  for (var j = 0; j < arr.length - 1; j++)
    arr[j] = " ".repeat(arr.length - 1 - j) + arr[j] + " ".repeat(arr.length - 1 - j);
  return arr;
}

function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}

function solution(input, markers) {
  var arr = [];
  for (var i = 0; i < input.split('').length; i++){
    if(markers.indexOf(input[i]) !== -1 && input[i] === "\n"){
      arr.push(input[i]);
    }
  }
  return arr;
};

function solution(input, markers) {
  let arr = [];
  let inp = input.split('');
  for (let i = 0; i < inp.length; i++) {
    if (markers.includes(inp[i])) 
      if(inp[i] === "\n")
        arr.push(inp[i]);
  }
  return arr.join("").trim();
}


function rot13(message){
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var arr = [];
  for (var i = 0; i < message.length; i++){
    var index = alphabet.indexOf(message[i]);
    index > 14 ? arr.push(alphabet[alphabet.indexOf(message[i]) - 13]) : arr.push(alphabet[alphabet.indexOf(message[i]) + 13]);
  }
  return arr.join("");
}


// change context method
({
  method: function() {
      var that = this;
      ( 
          function() {
              console.log(that);
          }
      )();
  }
}).method();

//Parameter
function counter(a){
  if(!counter.x)
      counter.x = a;
  return counter.x++;
}


//Range
function rangeIterator(stop, start = 0, step = 1){
  return {
    next (){
      if (start < stop) return start += step;
    }
  }
}

var rangeIterator = {
  start : 0,
  stop : 15,
  step : 5,
  [Symbol.iterator]() {
    this.current = this.start;
    return this;
  },
  next() {
    if (this.current < this.stop) {
      return { done: false, value: this.current += this.step};
    } else {
      return { done: true};
    }
  }
};

for (let num of rangeIterator) {
  alert(num); 
}

//Range Generator
function* rangeGenerator(stop, start = 0, step = 1) {
  yield start;
  if (start == stop) return;
  yield* rangeGenerator(stop, start += step, step = 1);
}


function rot13(message){
  var arr = [];
  for (var i = 0; i < message.length; i++){
    var index = message.charCodeAt(i);
    ((index >= 78 && index <= 90) || (index >= 110 && index <= 122)) ? arr.push(String.fromCharCode(index - 13)) : (index > 31 && index < 64 ? arr.push(message[i]) : arr.push(String.fromCharCode(index + 13)));
  }
  return arr.join("");
}

var recoverSecret = function(triplets) {
  var str = [...new Set(triplets.reduce((acc, val) => acc.concat(val), []))];
  function replace (arr, a, b){
    if(arr.indexOf(a) > arr.indexOf(b)){
      arr.splice(arr.indexOf(a), 1);
      arr.splice(arr.indexOf(b), 0, a);
    }
  }
  for (var i = 0; i < triplets.length; i++){
    replace(str, triplets[i][1], triplets[i][2]);
    replace(str, triplets[i][0], triplets[i][1]);
  }
  for (var i = 0; i < triplets.length; i++){
    replace(str, triplets[i][1], triplets[i][2]);
    replace(str, triplets[i][0], triplets[i][1]);
  }
  return str.join("");
}


function incrementString (string) {
  var a = /\d+/g.exec(string);
  var zeros = '';
  for(var i = 0; i < a[0].length; i++) {
    zeros += '0';
  }
  return a != null ? string.substr(0, a.index) + zeros.substr(0, zeros.length - String(+a + 1).length) + String(+a + 1) : string + 1;
}

 var User = {
  rank : -8,
  progress : 0,
  incProgress : "q"
}