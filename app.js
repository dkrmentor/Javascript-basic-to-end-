// --------------------class 1--------------------- (ch 1 to 8)

// alert("hello world");

// var a = 5;
// var b = 10;
// var c =a+b;
// alert(c);

// var a = 5;
// var b = 10;
// var c =a+b;
// console.log(c);

// var x = 5;
// var y = "ali";
// var z = y+x;
// alert(z);

// var x = "ghous";
// var y = "ali";
// var z = y+x;
// alert(z);

// var f = 20;
// var g = "10";
// var h = f+g;
// alert(h);

// var f = 20;
// var g = "2";
// var h = f*g;
// alert(h);

// var a = 3;
// var b = 5;
// var c = 7;
// var d = b - a * c;
// alert(d);

// var a = 3;
// var b = 5;
// var c = 7;
// var d = (b - a) * c;
// alert(d);

// var a = 5;
// var b = a++;
// alert(b);
// alert(a);

// var a = 5;
// var b = ++a;
// alert(b);
// alert(a);

// var x = 10;
// var y = x++ + ++x -x + x++ - ++x + x;
// alert(y)

// x = 5;
// var y = x++ + ++x + x + --x + x-- - x;
// console.log(y) 


// --------------------class 2--------------------- (ch 9 to 17)

// var a = prompt("Enter Your Age","Your age is: ");
// alert(a);

// var a = prompt("Enter Your value","Your value is: ");
// var b = a + 10;
// console.log("The output is " + b);

// var a = +prompt("Enter Your value","Your value is: ");
// var b = a + 10;
// console.log("The output is " + b);

// var x = "Enter Value";
// var y = "Your Value is:";
// var a = +prompt(x,y);
// var b = a+10;
// document.write("The output is " + b);

// var age = 22;
// if ( age >= 18){
//     alert("you can vote");
// }
// else{
//    alert(" you can not vote");
// }

// var age = +prompt("Enter your age");
// if ( age > 18){
//     alert("you can vote");
// }
// else if(age == 18){
//     alert("yes now you are eligible to vote")
// }
// else if( age == 17){
//     alert("you can vote after 1 year")

// }
// else{
//    alert(" you are too small to vote ! you cannot vote");
// }

// var age = +prompt("Enter your age");
// var gender = prompt("Enter your gender");
// if (age > 18 && gender == "male"){
//     alert("you are allowed to ride");
// }

// else{
//    alert(" you are not allowed to ride");
// }

// var age = +prompt("Enter your age");
// var gender = prompt("Enter your gender");
// if (age > 18 || gender == "male"){
//     alert("you are allowed to ride");
// }

// else{
//    alert(" you are not allowed to ride");
// }

// var a = "5";
// if (a === 5){
//     alert("True")
// }
// else {
//     alert("false")
// }

// var x = 5;
// var y = 10;
// var a = 30;
// var b = 15;
// if(x+y === a-b){
//     alert("correct")
// }
// else{
//     alert("incorrect")
// }

// var a = 10;
// if(a !== 15){
//     document.write("correct")
// }
// else{
//     document.write("incorrect")
// }

// var per = +prompt("Enter your percentage")
// if( per >= 80 && per <= 100 ){
//     alert("A+")
// }
// else if( per >= 70 && per <= 80 ){
//     alert("A")
// }
// else if( per >= 60 && per <= 70 ){
//     alert("B")
// }
// else if( per >= 50 && per <= 60 ){
//     alert("C")
// }
// else if( per >= 40 && per <= 50 ){
//     alert("D")
// }
// else if( per >= 33 && per <= 40 ){
//     alert("E")
// }
// else if( per >= 0 && per <= 33 ){
//     alert("F")
// }
// else{
//     alert("wrong value entered")
// }

// var a = +prompt("enter value of a")
// var b = +prompt("enter value of b")
// var c = +prompt("enter value of c")
// var d = +prompt("enter value of d")

// if ( a === b){
//     if(b === c){
//         alert( "a=b=c")
//     }
//     else if(b===d){
//         alert("a=b=d")
//     }
//     else{
//         alert("a is only equal to b ")
//     }
// }
// else{
//     alert("a is not equal to b so we wont check further")
// }

// var name = "dhara";
// var name1 = "areeba";
// var name2 = "ali";
// console.log(name)
// console.log(name1)
// console.log(name2)

// var names = ["dhara","areeba","ali"]
// console.log(names)
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])

// var names = ["dhara","areeba","ali",123]
// alert("welcome "+names[2]);

// var names = [];
// names[0]= "dhara";
// names[1]= "areeba";
// console.log(names)

// var names = ["dhara","areeba","ali",123]
// console.log("delete the last value which is:" +names.pop());
// console.log("after deleting one value the remaining values are: "+names);
// names.push("eena","meena","tina");
// console.log("after adding 3 values at last now remaining values are: "+names)
// console.log("deleting the first value which is:" +names.shift());
// console.log("after deleting the first value remaining values are: :" +names);
// names.unshift("imama","laiba");
// console.log("after adding 2 values at first now remaining values are: "+names)
// names.splice(0,3,"deleted 3 values")
// console.log("after deleting the 3 value remaining from 0 index values are: :" +names);
// var copynames = names.slice(1,3);
// console.log(copynames);

// --------------------class 2--------------------- (ch 18 to 20)

// Revsion
// var f = 5 % 3;
// alert(f);

// var z = 10;
// var y = z++ + ++z - z--
// alert(y);

// var s = prompt("Enter Value","The value is: ")
// alert(s);

// var arr = ["cat","dog","tiger","lion"];
// console.log(arr[2]);
// arr[5] = "elephant";
// console.log(arr);

// var arr1 = new Array("ali","ghous","basit");
// console.log(arr1);

//push add at end
//pop del from end
//shift del from start
//unshift add at start]
// var a = ["dhara","faizan","abc",916]
// a.splice(1,2,"hello");
// document.write(a);
// var a = ["Pizza","Hut"];
// a.splice(0,1,"Tu");
// document.write(a);
//splice (location , how many , add)
//splice (location , how many) --> for delete
//slice do copy (start , end)
// var a = ["dhara","faizan","abc",916]
// var d = a.slice(1,3)
// document.write(d)

//New Work
// var x;
// for(x = 1; x <= 10; x++){
//     document.write(x + "<br>");
// }

// var x;
// for(x = 1; x <= 10; x= x+2 ){
//     document.write(x + "<br>");
// }

// for( var i = 0 ; i < 5 ; i++){
//     alert("hello world")
// }

// document.write("2" + "x" + "1" + "=" + 2 * 1 + "<br>" )
// document.write("2" + "x" + "2" + "=" + 2 * 2 + "<br>" )
// document.write("2" + "x" + "3" + "=" + 2 * 3 + "<br>" )
// document.write("2" + "x" + "4" + "=" + 2 * 4 + "<br>" )
// document.write("2" + "x" + "5" + "=" + 2 * 5 )

// for (var i = 1; i <= 10; i++) {
//     document.write("2" + "x" + i + "=" + 2 * i + "<br>")
// }

// var names = ["ghous", "basit", "ali"];
// document.write(names[0]  + "<br>" );
// document.write(names[1]  + "<br>" );
// document.write(names[2]  + "<br>" );

// var names = ["ghous", "basit", "ali"];
// for (var i = 0; i < names.length; i++) {
//     document.write(names[i] + "<br>");
// }

// var cities = ["karachi", "lahore", "Islamabad", "Faisalabad"];
// for (var i = 0; i < cities.length; i++) {
//     alert(cities[i] + " is the cleanest city")
// }

// var cities = ["karachi", "lahore", "Islamabad", "Faisalabad"];
// for (var i = 0; i < cities.length; i++){
//     if(cities[i] === "karachi"){
//         alert(cities[i] + " is the cleanest city")
//     }
// }

// for (var i = 1; i > 0; i++) {
//     if(i === 10){
//         break;
//     }    
//     document.write("hello <br>");
// }


// for (var i = 1; i > 0; i++) {
//     if(i === 10){
//         break;
//     }    
//     document.write("hello <br>");

// }

// for (var i =0; i<10 ; i++){
//     if(i===5){
//         break;
//     }
//     document.write("hello <br>");
// }

// var cities = ["karachi", "lahore", "Islamabad", "Faisalabad"];
// for (var i = 0; i < cities.length; i++){
//     if(cities[i] === "karachi"){
//         alert(cities[i] + " is the cleanest city");
//         break;
//     }
// }

// for (var i = 0; i < 5; i++) {
//     for (j = 0; j < 3; j++) {
//         document.write("Pakistan Zindabad <br>")
//     }
// }

// var fname = ["ghous", "basit", "fahad"]
// var lname = ["ahmed"]
// for (var i = 0; i < fname.length; i++) {
//     for (var x = 0; x < lname.length; x++) {
//         console.log(fname[i] + " " + lname[x]);
//     }
// }

// var fname = ["ghous", "basit", "fahad"]
// var lname = ["ahmed", "khan"]
// for (var i = 0; i < fname.length; i++) {
//     for (var x = 0; x < lname.length; x++) {
//         console.log(fname[i] + " " + lname[x]);
//     }
// }

// for (var i = 0; i < 10; i++) {
//     for (j = 0; j < i; j++) {
//         document.write("*");
//     }
//     document.write("<br>")
// }

// var name ="dhara";
// document.write(name[0] + "<br>" );
// document.write(name[1] + "<br>" );
// document.write(name[2] + "<br>" );

// var word = prompt("Enter Word?");
// var check="";
// for (var i = word.length-1; i >= 0; i--) {
//     check = check + word[i];
// }
// if(check === word){
//     alert(word + " is a palindrone word");
// }

// var name = "Ghous IS a bOy";
// document.write(name.toLowerCase() + "<br>");
// document.write(name.toUpperCase()+ "<br>");
// document.write(name.indexOf("O")+ "<br>");

// -------------------- CALCULATOR ---------------------

// var val1 = +prompt("Enter 1st value");
// var sign = prompt("Enter operator ");
// var val2 = +prompt("Enter 2nd value");
// console.log(val1 + sign + val2)
// if (sign === '+') {
//     alert(val1 + val2)
// }
// else if (sign === '-') {
//     alert(val1 - val2)
// }
// else if (sign === '*') {
//     alert(val1 * val2)
// }
// else if (sign === '/') {
//     alert(val1 / val2)
// }
// else if (sign === '%') {
//     alert(val1 / val2 * 100 + "%")
// }
// else {
//     alert("Wrong Sign")
// }

// var equ = prompt("Enter your equation");
// for(var i =0; i<equ.length ; i++){
//     if(equ.slice(i,i+1) === '+' || equ.slice(i,i+1) === '-' || equ.slice(i,i+1) === '*'  || equ.slice(i,i+1) === '/'  ){
//         alert("sign has been found")
//     }
// }

// --------------------class 3--------------------- (ch 21 to 30)
// //Revision
// for (var i =1; i<=100 ; i=i+10){
//     for(var j = i ; j<= i+9; j++){
//         document.write(j+ "  ")
//     }
//     document.write("<br>")
// }
// //new work
// var city = prompt("Enter you city name")
// city = city.toLowerCase()
// var arr = ["karachi", "lahore", "islamabad"]
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === city) {
//         alert("city is found")
//         break;
//     }}
//     if (arr[i] !== city) {
//         alert("city not found")

// }

// var city = prompt("Enter you city name")
// city = city.toUpperCase()
// var arr = ["KARACHI", "LAHORE", "ISLAMABAD"]
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === city) {
//         alert("city is found")
//         break;
//     }}
//     if (arr[i] !== city) {
//         alert("city not found")

// }

// var city = prompt("Enter you city name")
// var fc = city.slice(0,1).toUpperCase()
// var sc = city.slice(1).toLowerCase()
// city = fc+sc;
// console.log(city)
// var arr = ["Karachi", "Lahore", "Islamabad"]
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === city) {
//         alert("city is found")
//         break;
//     }}
//     if (arr[i] !== city) {
//         alert("city not found")

// }

// var str = prompt("Enter some text")
// for (var i =0 ; i<str.length ; i++){
//     if(str.slice(i,i+2) === "  "){
//         alert("double space found!");
//         break;
//     }
// }
//firstmethod to replace
// var text = "A prefix with many meanings, including: alongside of, beside, near, resembling, beyond, apart from, and abnormal."
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 6) === "prefix") {
//         text = text.slice(0, i) + "sufix " + text.slice(i + 6)
//         document.write(text)
//     }
// }
//second method to replace
// var text = "A prefix with many meanings, including: alongside of, beside, near, resembling, beyond, apart from, and abnormal."
// var i = text.indexOf("prefix")
// text = text.slice(0, i) + "sufix " + text.slice(i + 6)
// document.write(text)

// var text = "A prefix with many meanings, including: alongside of beside, near, resembling, beyond, apart from, and of abnormal."
// var i = text.lastIndexOf("of")
// text = text.slice(0, i) + "" + text.slice(i+2)
// document.write(text)

//third method to replace
// var text = "A prefix with many meanings, including: alongside of, beside, near, resembling, beyond, apart from, and abnormal."
// document.write(text.replace("prefix","sufix"))

// var text = "A prefix with many meanings, including: alongside of beside, near, resembling, beyond, apart from, and of abnormal."
// document.write(text.replace(/of/g,"hey"))

// var a = "Dhara";
// document.write(a.charAt(0))
// document.write(a.charAt(3))

// var num = 1.2;
// var num1 = 1.5;
// var num2 = 1.7;
// document.write(" numbers are 1.2 , 1.5 , 1.7 " + Math.round(num), Math.round(num1), Math.round(num2) + "<br>")
// document.write(" numbers are 1.2 , 1.5 , 1.7 " + Math.floor(num), Math.floor(num1), Math.floor(num2) + "<br>")
// document.write(" numbers are 1.2 , 1.5 , 1.7 " + Math.ceil(num), Math.ceil(num1), Math.ceil(num2) + "<br>")

// document.write( Math.random() )
// document.write("<br>" + Math.random() *2 )

// var heads = prompt("heads username: ")
// var tails = prompt("tails username: ")
// var toss = Math.random()*2 ;
// var floor = Math.floor(toss)
// document.write(floor)
// if (floor === 0 ){
//     alert("heads "+ heads + " win toss")
// }
// else{
//     alert("tails "+ tails + " win toss")

// }

//string to num
// var num="101"
// document.write(Number(num))
// document.write(parseInt(num))
//  num to string
// var num=101
// document.write(num.toString())

// var num = 10.246212;
// document.write(num.toFixed(2))

// --------------------class 4--------------------- (ch 31 to 40)
// var d =  new Date();
// document.write(d+"<br>")
// document.write(d.toString()+"<br>")
// document.write(d.toString().slice(0,3) +"<br>")
// document.write("day"+ d.getDay()+"<br>")
// document.write("month"+d.getMonth()+"<br>")
// document.write("date"+d.getDate()+"<br>")
// document.write("year"+d.getFullYear()+"<br>")
// document.write("minute"+d.getMinutes()+"<br>")
// document.write("sec"+d.getSeconds()+"<br>")
// document.write("m-sec"+d.getMilliseconds()+"<br>")
// document.write("m-sec from 1st jan "+d.getTime()+"<br>")

// var d = new Date("Jan 15, 1999");
// var t = new Date();
// var diff = t.getTime() - d.getTime();
// document.write(Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12)) + "<br>")

// var d = new Date( prompt("Enter your date of birth (Jan 15, 1999)"))
// var t = new Date();
// var diff = t.getTime() - d.getTime();
// document.write(Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12)) + "<br>")

// var d =  new Date();
// document.write(d+"<br>")
// d.setFullYear("2001")
// document.write(d+"<br>")


// function greeting(){
//     alert("hello ")
// }
// greeting();

// function greeting(greet){
//     alert(greet)
// }
// greeting("Hey");

// function greeting(a,b,c){
//     alert(a+b+c)
// }
// greeting(5,8,11);

// function greeting(a, b, c) {
//     var z = a + b + c;
//     return z;
// }
// alert(greeting(5, 8, 11));

// var f = 15
// function greeting(a, b, c) {
//     alert(f)
//     var z = a + b + c + f;
//     return z;
// }
// alert(greeting(5, 8, 11));


// function ageCalc(){
//     var d = new Date( prompt("Enter your date of birth (Jan 15, 1999)"))
//     var t = new Date();
//     var diff = t.getTime() - d.getTime();
//     document.write(Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12)) + "<br>")
// }
// ageCalc()

// function first() {
//     alert("hie to world")
// }
// first();
// first(); 
// first(); 
// first(); 
// first();

// function first(greet) {
//     alert(greet)
// }
// first("hieeeee");

// function first(a,b) {
//     alert(a+b)
// }
// first(9,5);

// function first(a,b) {
//   return a+b;

// }
// alert(first(9,5));
// alert(first(9,4));

// function first(a,b) {
//     return "a+b";

//   }
//   alert(first(9,5));

// var a = "hello";
// function foo(){
//   a = "dhara";
// }
// foo();
// alert(a);

// function calc (num1,op,num2){
//     if ( op === '+'){
//         return num1 +num2;
//     }
//     else  if ( op === '-'){
//         return num1 - num2;
//     }
//     else if ( op === '*'){
//         return num1 * num2;
//     }
//     else  if ( op === '/'){
//         return num1 / num2;
//     }
//     else{
//         return "wrong operator"
//     }

// }
// alert(calc(4,"+",55))
// alert(calc(4,"-",5))
// alert(calc(4,"*",5))
// alert(calc(4,"6",5))

// function first(a,b=3) {
//     return a+b;

//   }
//   alert(first(1,5));

// var name = "dhara";
// switch (name) {
//     case "dhara":
//         alert("hello pretty")
//         break;
//     case "hello":
//         alert("hello ")  
//         break;
//     case "hie":
//         alert("hie")  
//         break;
//     case "hmmm":
//         alert("hmmm")
//         break;
//     default:
//         alert("default")
// }

// --------------------class 5--------------------- (ch 41 to 50)
// for (var i=0 ;i <10 ;i++){
//     document.write(i)
// }
// var i=0
// while(i<10){
//     document.write(i)
//     i++;
// }
// var i =0;
// do{
//     document.write(i)
//     i++
// }
// while(i<10)
//for html calling
// function hello(){
//     alert("heyyyyyy")
// }
// function mat(){
//     var a = 2+2;
//     alert(a)
// }
// function func(greet){
//     alert(greet)
// }
// function clickBtn(){
//     alert("click")
// }
// function getName() {
//     var name = document.getElementById("name")
//     alert(name.value)
// }
// function getName() {
//     var name = document.getElementById("name")
//     console.log(name.value)
//     name.value = " "
// }
// function setName() {
//     var name = document.getElementById("name")
//     name.value = "dhara "
//     var para = document.getElementById("para")
//     para.innerHTML = "hello this is an example";
// }
// setName()

// -------------------- CALCULATOR (windows) ---------------------
// function getNum(num){
//     var result = document.getElementById("result")
//     result.value += num;
// }
// function clearResult(){
//     var result = document.getElementById("result")
//     result.value = " ";
// }
// function getResult(){
//     var result = document.getElementById("result")

//     result.value = eval(result.value);
// }

// --------------------class 6--------------------- (ch 51 to 57)
// function readmore(){
// var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, obcaecati recusandae praesentium sapiente suscipit tempora nesciunt, quod quam reprehenderit fuga quisquam possimus fugit nam voluptatem, optio magni labore rem quia?"
// var peragraph = document.getElementById('pera')
// peragraph.innerHTML = text;
// }
// function readmore(){
//     var text = document.getElementById('text');
//     var peragraph = document.getElementById('pera');
//     peragraph.innerHTML = text.innerHTML;
//     }
// function readmore(){
//     var text = "<ul><li>l1</li><li>l1</li><li>l1</li><li>l1</li></ul>";
//     var peragraph = document.getElementById('pera');
//     peragraph.innerHTML = text;
//     }
//add new class
// function makeBig(){
//     var img = document.getElementById('car')
//     img.className = 'hidden';
// }
//add new class and remove old one
// function makeBig(){
//     var img = document.getElementById('car')
//     img.className += ' hidden';
// }
// function changeImg1(){
//     var carImg = document.getElementById('img');
//     carImg.src = '2.jpg'
// }
// function changeImg2(){
//     var carImg = document.getElementById('img');
//     carImg.src = '1.jpeg'
// }
// function changeImg(src){
//     var carImg = document.getElementById('img');
//     carImg.src = src;
// }
// function changeImg(id,src){
//     var carImg = document.getElementById(id);
//     carImg.src = src
// }
// function changeImg(){
//     var img = document.getElementById('img');
//     img.style.width = "100%";
// }
// function changeFont(){
//     var text = document.getElementById('pera');
//     text.style.fontSize = "2em";
// }
//when u use float u have to use cssFloat


// var pera = document.getElementsByTagName('p')
// // pera[0].style.color = 'red';
// // pera[2].style.color = 'blue';
// // pera[4].style.color = 'orange';
// for(var i = 0; i < pera.length; i++ ){
//     pera[i].style.color = 'green';
// }

// var parent = document.getElementById('parent')
// var pera = parent.getElementsByTagName('p')
// for(var i = 0; i < pera.length; i++ ){
//     pera[i].style.color = 'green';
// }

// --------------------class 6.1(practice)--------------------- (ch 51 to 57)

// function setName(){
//     var name = document.getElementById('name');
//     name.value = "dhara";
// }
//inner text only for text add
// function setValue(){
//     var pera = document.getElementById('pera');
//     pera.innerHTML = "hello dhara";
// } 
// function bigImage(){
//     var image = document.getElementById('img')
//     image.className = "big";
// }
// function smallImage(){
//     var image = document.getElementById('img')
//     image.className = "small";
// }
// function onbulb(){
//     var bulb = document.getElementById('bulb');
//     bulb.src = "bulbon.jpg";
// }
// function offbulb(){
//     var bulb = document.getElementById('bulb');
//     bulb.src = "bulboff.jpg";
// }
//if the bulb image is in images folder then write image/bulb.jpg 

// function addClass() {
//     var para = document.getElementById('para')
//     para.className = "bold";
// }
// function addClass() {
//     var para = document.getElementById('para')
//     para.className += "bold blue";
// }

// function getElements(){
//     var element = document.getElementsByTagName('p')
// }
// getElements()

// --------------------class 7--------------------- 
// function timer(){
//     console.log("abc")
// }
// setInterval(timer,1000)

// function timing(){
//     console.log("abc")
// }
// setTimeout(timing,1000)

// var count=0 ;
// function timer(){
//     count++;
//     console.log(count)
// }
// var interval = setInterval(timer,1000)
// function timerStop(){
//     clearInterval(interval)
// }
// setTimeout(timerStop,5000)

// -------------------- Stop Watch (windows) ---------------------
// var min = 0;
// var sec = 0;
// var msec = 0;
// var minHeading = document.getElementById("min")
// var secHeading = document.getElementById("sec")
// var msecHeading = document.getElementById("msec")
// function timer() {
//     msec++;
//     msecHeading.innerHTML = msec;
//     if (msec >= 100) {
//         sec++;
//         secHeading.innerHTML = sec;
//         msec = 0;
//     } else if (sec >= 60) {
//         min++;
//         minHeading.innerHTML = min;
//         sec = 0;
//     }
// }
// document.getElementById("stop").disabled = true;
// document.getElementById("reset").disabled = true;
// var interval;
// function start() {
//     interval = setInterval(timer, 10);
//     document.getElementById("start").disabled = true;
//     document.getElementById("stop").disabled = false;
//     document.getElementById("reset").disabled = false
// }
// function stop() {
//     clearInterval(interval)
//     document.getElementById("start").disabled = false;
//     document.getElementById("stop").disabled = true;
//     document.getElementById("reset").disabled = false;

// }
// function reset() {
//     min = 0;
//     sec = 0;
//     msec = 0;
//     minHeading.innerHTML = min;
//     secHeading.innerHTML = sec;
//     msecHeading.innerHTML = msec;
//     stop()
//     document.getElementById("start").disabled = false;
//     document.getElementById("stop").disabled = true;
//     document.getElementById("reset").disabled = true;
// }

// --------------------class 8--------------------- (ch 58 to 63)
// console.log(document.childNodes[0]) //<!DOCTYPE html>
// console.log(document.childNodes[1]) //<html> .... </html>
// console.log(document.childNodes[1].childNodes[0]) //<head> .... </head>
// console.log(document.childNodes[1].childNodes[1]) // #text -------------- if u want <body> ... </body> tag at 1st index u have to remove every space b/w head & body in html file
// console.log(document.childNodes[1].childNodes[2]) // <body> ... </body>
// console.log(document.childNodes[1].childNodes[2].childNodes[0])  // #text -------------- if u want first tag of body at 0 index u have to remove every space b/w body & tag in html file
// console.log(document.childNodes[1].childNodes[2].childNodes[1])  // first tag of body

// var a = document.getElementById('father')
// console.log(a.childNodes[0]) //text
// console.log(a.childNodes[1]) //first tag of father

//html space minify
// var a = document.getElementById('father')
// console.log(a.firstChild) //fs
// console.log(a.lastChild) //ts
// var a = document.getElementById('fs')
// console.log(a.nextSibling) //ss
// var a = document.getElementById('ss')
// console.log(a.nextSibling) //ts
// console.log(a.parentNode) //father div

//type 1 = element and type 3 = junk
// var a = document.getElementById('father')
// console.log(a.childNodes[0].nodeType) //3 = junk
// console.log(a.childNodes[1].nodeType) //1 = element

// var a = document.getElementById('father')
// console.log(a.nodeName) //DIV

// var a = document.getElementById('father')
// console.log(a.childNodes[0]) // " ...  abcde  ... "-> junk text
// console.log(a.childNodes[0].nodeValue) // abcde-> junk text

// var a = document.getElementById('father')
// console.log(a.childNodes) //for all childs

// --------------------class 9-------------------- (ch 58 to 63 -> revision)
//practice
// function disablebtn(){
//     var ex = document.getElementById('eg')
//     ex.disabled = true;
// }
// function enablebtn(){
//     var ex = document.getElementById('eg')
//     ex.disabled = false;
// }
// function get(){
//     var p = document.getElementsByTagName('p')
//     console.log(p)
// }
// function get(){
//     console.log(document.childNodes)
// }
// function get(){
//     console.log(document.childNodes[0])
// }
// function get(){
//     console.log(document.childNodes[1])
// }
// function get() {
//     console.log(document.childNodes[1].childNodes)
// }
// function addToCart(){
//     var img = document.getElementById('img')
//     var name = document.getElementById('name')
//     var cost = document.getElementById('cost')
//     var cart_img = document.getElementById('cart-img')
//     var cart_name = document.getElementById('cart-name')
//     var cart_cost = document.getElementById('cart-cost')

//     cart_img.src =  img.src
//     cart_name.innerHTML =name.innerHTML
//     cart_cost.innerHTML =cost.innerHTML
// }
// --------------------class 9-------------------- (ch 64 to 68)

// var list = document.getElementsByTagName('li')
// console.log(list.length)

// var target = document.getElementById('p1')
// if(target.hasAttribute('class')){
// alert("available")
// }
// else{
//     alert("not avaialable")
// }

// var target = document.getElementById('p1')
// console.log(target.getAttribute('class'))


// var target = document.getElementById('p1')
// target.setAttribute('class' , 'blue')
// console.log(target.getAttribute('class'))

// var target = document.getElementById('p1')
// console.log(target.attributes)
// console.log(target.attributes[1].nodeName)
// console.log(target.attributes[1].nodeValue)

// var p = document.createElement('p')
// console.log(p)

// var h = document.createElement('h1')
// console.log(h)


// var i = document.createElement('img')
// console.log(i)

// var p = document.createElement('p')
// var text = document.createTextNode('hello world')
// p.appendChild(text)
// var main = document.getElementById('main');
// main.appendChild(p)

// function msg(){
//     var val = document.getElementById('val')
//     var p = document.createElement('p')
//     var text = document.createTextNode(val.value)
//     p.appendChild(text)
//     var message = document.getElementById('msg')
//     message.appendChild(p)
//     val.value = "";
// }
// --------------------class 10-------------------- (to do app)


// var list = document.getElementById('list')
// function addItem(){
//     var item = document.getElementById("todo-item")

//     var li = document.createElement('li')
//     var liText = document.createTextNode(item.value)
//     li.appendChild(liText)


//     var delBtn = document.createElement('button')
//     var delText = document.createTextNode('DELETE')
//     delBtn.appendChild(delText)
//     delBtn.setAttribute('onclick','delItem(this)')



//     var editBtn = document.createElement('button')
//     var editText = document.createTextNode('EDIT')
//     editBtn.appendChild(editText)
//     editBtn.setAttribute('onclick','editItem(this)')


//     li.appendChild(delBtn)
//     li.appendChild(editBtn)
//     list.appendChild(li)

//     item.value = "";

// }
// function delItem(e){
//    e.parentNode.remove()  
// }





// function editItem(e){

//     var editVal = prompt("enter value", e.parentNode.firstChild.nodeValue)
//     e.parentNode.firstChild.nodeValue = editVal

//  }
// function delAllItem(){
//     list.innerHTML = "";
// }

// --------------------class 10-------------------- (ch 69 to 72)
// var courseArray = ["Ali", "ghous", "basit"]
// console.log(courseArray) 

//object
// var course = {
//     t1 : "Ali",
//     t2 : "ghous",
//     t3 : "basit"
// }
// console.log(course)
// course.t4 = "Nadia";

// course.class = [18,19]

// course.t5 = undefined;
// console.log(course)

// var course2 = {}
// course2.name = "web";
// console.log(course2)

// var abc = "t4" in course;
// console.log(abc)

//just 4 concept
// var myQuestions = [
//     {
//         question :  "What is Your Name?",
//         answer : {
//             a : "ghous",
//             b : "ali",
//             c : "dhara"
//         },
//         correctAnswer : "c"
//     },
//     {
//         question :  "What is Your Age?",
//         answer : {
//             a : "18",
//             b : "21",
//             c : "23"
//         },
//         correctAnswer : "b"
//     },
// ]


//1st method
// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7]
// };
// function calcAnnual() {
//     var bestPrice = plan1.price;
//     var currDate = new Date();
//     var thisMo = currDate.getMonth();
//     for (var i = 0; i < plan1.discountMonths.length; i++) {
//         if (plan1.discountMonths[i] === thisMo) {
//             bestPrice = plan1.price * 0.8;
//             break;
//         }
//     }
//     return bestPrice * 12;
// }
// document.write(calcAnnual())

// //2nd method ->disocunt varry
// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7]
// };
// function calcAnnual(per) {
//     var bestPrice = plan1.price;
//     var currDate = new Date();
//     var thisMo = currDate.getMonth();
//     for (var i = 0; i < plan1.discountMonths.length; i++) {
//         if (plan1.discountMonths[i] === thisMo) {
//             bestPrice = plan1.price * per;
//             break;
//         }
//     }
//     return bestPrice * 12;
// }
// document.write(calcAnnual(0.8))

// //3rd method ->disocunt varry -> flexible
// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7],
//     calcAnnual: function (per) {
//         var bestPrice = plan1.price;
//         var currDate = new Date();
//         var thisMo = currDate.getMonth();
//         for (var i = 0; i < plan1.discountMonths.length; i++) {
//             if (plan1.discountMonths[i] === thisMo) {
//                 bestPrice = plan1.price * per;
//                 break;
//             }
//         }
//         return bestPrice * 12;
//     }
// };
// document.write(plan1.calcAnnual(0.8))

//3rd method ->disocunt varry -> more flexible
// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7],
//     calcAnnual: function (per) {
//         var bestPrice = this.price;
//         var currDate = new Date();
//         var thisMo = currDate.getMonth();
//         for (var i = 0; i < this.discountMonths.length; i++) {
//             if (this.discountMonths[i] === thisMo) {
//                 bestPrice = this.price * per;
//                 break;
//             }
//         }
//         return bestPrice * 12;
//     }
// };
// document.write(plan1.calcAnnual(0.8))

//construtor function

// function Course (t1, t2 ,t3){
//     this.t1 = t1;
//     this.t2 = t2;
//     this.t3 = t3;

// }
// var xyz = new Course("ali","ghous","basit");
// console.log(xyz)

// function Course2 (t1, t2 ,t3){
//     this.a = t1;
//     this.b = t2;
//     this.c = t3;
// }
// var def = new Course2("ali","ghous","basit");
// console.log(def)

// --------------------class 10-------------------- (QUIZ APP )
// quiz app 1
// function check(){
//     var score = 0;
//     var right_q1Answer_1 = document.getElementById('q1-a1')
//     var q1Answer_2 = document.getElementById('q1-a2')
//     var q1Answer_3 = document.getElementById('q1-a3')
//     var q1Answer_4 = document.getElementById('q1-a4')
//     if(right_q1Answer_1.checked == true){
//         score++;
//         alert("q1 answer right")
//     }
//     else{
//         alert("q1 answer wrong")
//     }

//     var q2Answer_1 = document.getElementById('q2-a1')
//     var q2Answer_2 = document.getElementById('q2-a2')
//     var q2Answer_3 = document.getElementById('q2-a3')
//     var right_q2Answer_4 = document.getElementById('q2-a4')
//     if(right_q2Answer_4.checked == true){
//         score++;
//         alert("q2 answer right")
//     }
//     else{
//         alert("q2 answer wrong")
//     }

//     var q3Answer_1 = document.getElementById('q3-a1')
//     var q3Answer_2 = document.getElementById('q3-a2')
//     var right_q3Answer_3 = document.getElementById('q3-a3')
//     var q3Answer_4 = document.getElementById('q3-a4')
//     if(right_q3Answer_3.checked == true){
//         score++;
//         alert("q3 answer right")
//     }
//     else{
//         alert("q3 answer wrong")
//     }
// alert("your score is " +score + "/3")

// }

// quiz app 2 (incomplete)
// var questionArray = [
//     {
//         question: " Q1 : What is 2 + 2 ?",
//         answer: "4",
//         option: [
//             "5",
//             "6",
//             "4",
//             "8",
//         ]
//     },
//     {
//         question: " Q2 : What is 4 - 2 ?",
//         answer: "2",
//         option: [
//             "5",
//             "2",
//             "4",
//             "8",
//         ]
//     },
//     {
//         question: " Q3 : What is 2 * 2 ?",
//         answer: "4",
//         option: [
//             "5",
//             "2",
//             "4",
//             "8",
//         ]
//     },
//     {
//         question: " Q4 : What is 4 / 2 ?",
//         answer: "2",
//         option: [
//             "5",
//             "2",
//             "4",
//             "8",
//         ]
//     },
//     {
//         question: " Q5 : What is 4 % 2 ?",
//         answer: "0",
//         option: [
//             "5",
//             "8",
//             "4",
//             "0",
//         ]
//     },

// ];

// function showQuestion(e) {
//     //show q
//     var question = document.getElementById('question');
//     question.innerHTML = questionArray[e].question;
//     //show op option
//     var option = document.getElementsByClassName('option');
//     for (var i = 0; i < questionArray.length; i++) {
//         option[i].innerHTML = questionArray[e].option[i];
//     }

// }
// var questionCount = 0;

// function nextQuestion() {
//     // var next = document.getElementById('next')
//     questionCount++;
//     validate(questionCount);
//     removeActive();
//     showQuestion(questionCount);




// }

// function activeClass(e) {
//     removeActive();
//     e.classList.add("active");
// }

// function removeActive() {
//     var active = document.getElementsByClassName("active");
//     for (var i = 0; i < active.length; i++) {
//         active[i].classList.remove("active");

//     }
// }
// function validate(e) {
//     var active = document.getElementsByClassName("active")
//     if (active[0].innerHTML == questionArray[e].answer) {
//         score += 10
//     }

// }


// --------------------class 12-------------------- (ch 72 to 75 )
// var s1 = {
//     name:"Dhara",
//     roll:123
// }
// var s2 = {
//     name:"aeaasd",
//     roll:223
// }

//constructor
// function Student(name,roll){
//     this.name=name;
//     this.roll=roll;
//     this.getName = function(){
//         return this.name;
//     }
// }
// var stu1 = new Student("dhara",123);
// var stu2 = new Student("ara",223);
// console/console.log((stu1.getName()));
// console/console.log((stu2.getName()));

//prototype use for avoid repeation in the function which we have create within constructor
// function Student(name,roll){
//     this.name=name;
//     this.roll=roll;
//     Student.prototype.getName = function(){
//         return this.name;
//     }
// }
// var stu1 = new Student("dhara",123);
// var stu2 = new Student("ara",223);
// console/console.log((stu1.getName()));
// console/console.log((stu2.getName()));


// var s2 = {
//     name:"aeaasd",
//     roll:223
// }
// console.log("roll" in s2)
// console.log("age" in s2)

// var s2 = {
//     name:"RADHA",
//     roll:223,
//     age:21,    
// }
// console.log('roll' in s2)
// console.log(s2.hasOwnProperty("roll"))

// var s2 = {
//     name:"RADHA",
//     roll:223,
//     age:21,
    
// }
// for(var prop in s2){
//     console.log(prop)
// }
// for(var prop in s2){
//     console.log(s2[prop])
// }

// for(var prop in s2){
//     console.log(prop,s2[prop])
// }


