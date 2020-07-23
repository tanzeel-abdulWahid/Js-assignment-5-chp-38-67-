// Chapter 38-42

// TASK 1

// function power(a,b){
//     var c = a**b
//     return c
// }
// var ans = power(5,2)
// alert (ans)


// TASK 2

// function leapyear(year){
//     if (year%4==0){
//         if (year%100==0){
//             if (year%400==0){
//                 alert("it's a leap year")
//             }
//             else{
//                 alert("It's not a leap year!")
//             }
//         }
//         else{
//             alert("it's a leap year!")
//         }
//     }
//     else{
//         alert("it's not a leap year")
//     }
// }
// leapyear(parseInt(prompt("Enter a year : ")));


// TASK 3

// function area(){
//     var a = parseInt(prompt("Enter side a : "))
//     var b = parseInt(prompt("Enter side b : "))
//     var c = parseInt(prompt("Enter side c : "))
//     var s = (a+b+c)/2
//     var totalAns = s*(s-a)*(s-b)*(s-c)
//     return totalAns
// }
// var ans = area()
// alert (ans);


// TASK 4

// function totalMarks(subj1, subj2, subj3){
//     function avg(){
//         var g = (subj1+subj2+subj3)/3
//         alert ("The average of three subjects is " + g)
//     }
//     avg();
//     function percent(){
//         var k = ((subj1+subj2+subj3)/300)*100
//         alert ("The percentage of three subjects is " + k)
//     }
//     percent();
// }
// var m = totalMarks(parseInt(prompt("Enter subject 1 marks : ")), parseInt(prompt("Enter subject 2 marks : ")), parseInt(prompt("Enter subject 2 marks : ")))


// TASK 5

// function findindex(text){
//     for(var i = 0; i<text.length; i++){
//         if (text.slice(i, i+9) === "excellent"){
//             text = text.slice(0,i) + "brilliant" + text.slice(i+9)
//         }
//     }
//        alert(text)
// }
// findindex("Saylani is doing excellent job")


// TASK 6

// function cutVowels(text){
//     var ans = text.replace(/["a","e","i","o","u"]/g,"")

//     alert("Sentence with vowels : "+  text +  "\nSentence without vowels : "+  ans)
// }
// cutVowels("saylani is the best.".toLowerCase())


// TASK 7

// function twoVowels(text){
//     count = 0;
//     for (var i=0; i<text.length ; i++){
//         switch (text[i]){
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 switch(text[i+1]){
//                     case "a":
//                     case "e":
//                     case "i":
//                     case "o":
//                     case "u":
//                         count++
//                 }
//         }
//     }
//     alert("No. of two consecutive occurences of a vowel in a sentence is : \n" + count)
// }
// twoVowels("Pleases read this application and give me gratuity")


// TASK 8

// var distance = parseInt(prompt("Enter the distance in kilometers : "));
// function meters(){
//     var ans = distance*1000
//     document.write("Distance measured in meters is " + ans )
// }

// function feet(){
//     var ans = distance*3280.84
//     document.write("Distance measured in feets is " + ans)
// }

// function inches(){
//     var ans = distance*39370.1
//     document.write("Distance measured in inches is " + ans)
// }

// function centiM(){
//     var ans = distance*100000
//     document.write("Distance measured in centimetres is " + ans)
// }
// meters(); feet(); inches(); centiM()


// TASK 9 

// function overpay(hours){
// if (hours <= 40){
//     var hourSalary = 15*40; //total salary 15 rs per hour
//     var overtime = 0;
//     var salary = hourSalary;
//     alert("Your salary is : " + salary)
// }
// else if(hours > 40){
//     var hourSalary = 15*40;
//     var extratime = hours - 40
//     var overtime = (extratime * 12) + hourSalary
//     var salary = overtime 
//     alert("Your salary including overpay is : " + salary)
// }
// }
// overpay(parseFloat(prompt("Enter total hours of work u have done")))


// TASK 10

// var amount = parseInt(prompt("Enter your amount : "))
// var hundred = parseInt(amount/100);
// document.write("you have " + hundred + " hundred notes \n");
// if (amount%100 != 0){
//     var fifty = (amount%100);
//     var fiftyAns = parseInt(fifty/50)
//     document.write ("you have " + fiftyAns + " fifty notes \n");
//     var tens = (fifty%50);
//     var tenAns = parseInt(tens/10);
//     document.write ("you have " + tenAns + " tens notes \n");
// }




// CHAPTER  43-48

// TASK 1

// function message(){
//     alert("Hello Saylani")
// }


// TASK 2

// function msg(){
//     alert("Thanks for purchasing a phone from us")
// }

// TASK 3

// function dlt(){
//     document.getElementById("row").innerHTML = ""
// }
// function dlt1(){
//     document.getElementById("row1").innerHTML = ""
// }
// function dlt2(){
//     document.getElementById("row2").innerHTML = ""
// }
// function dlt3(){
//     document.getElementById("row3").innerHTML = ""
// }


// TASK 5

// function countUp(){
//    document.getElementById("counter").value++;
// }
// function countDown(){
//     document.getElementById("counter").value--;
// }



// CHAPTER 49-52

// TASK 1

// function details(){
//     document.write("name is : "+document.getElementById("name").value 
//     + "  Number is : " + document.getElementById("num").value
//     + " Email is : "+ document.getElementById("mail").value)  
// }


// TASK 2

// function readmore(){
//     var text = "American tech giant Apple recently unveiled the iPhone 11 at a starting price of Rs 64,900. At this price, the iPhone 11 is the most ‘affordable’ of the three new iPhones launched by Apple, the other two being iPhone 11 Pro and iPhone 11 Pro Max. It will be available in India starting September 27.The iPhone 11 will come in six colour variants: Purple, Yellow, Green, Black, White and Product RED."
//     document.getElementById("review").innerHTML = text
// }

// TASK 3

// function details(){
//     var table = document.getElementById("mytable");
//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2)
//     cell1.innerHTML = "NAME "
//     cell2.innerHTML = document.getElementById("name").value
//     cell3.innerHTML = ("Delete");
//     cell3.onclick = function(){
//         cell1.remove()
//         cell2.remove()
//         cell3.remove()
//     }
    

//     var row = table.insertRow(1);
//     var cellB = row.insertCell(0);
//     var cellB2 = row.insertCell(1);
//     var cellB3 = row.insertCell(2);
//     cellB.innerHTML = "Number"
//     cellB2.innerHTML = document.getElementById("num").value
//     cellB3.innerHTML = "Delete"
//     cellB3.onclick = function(){
//         cellB.remove()
//         cellB2.remove()
//         cellB3.remove()
//     }
    

//     var row = table.insertRow(2);
//     var cellC = row.insertCell(0);
//     var cellC2 = row.insertCell(1);
//     var cellC3 = row.insertCell(2);
//     cellC.innerHTML = "Email"
//     cellC2.innerHTML = document.getElementById("mail").value
//     cellC3.innerHTML = "Delete"
//     cellC3.onclick = function(){
//         cellC.remove()
//         cellC2.remove()
//         cellC3.remove()
//     }
    
// }


// CHAPTER 52-57

// Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal
// var img = document.getElementById("myImg");
// var img2 = document.getElementById("myImg2");
// var img3 = document.getElementById("myImg3");
// var img4 = document.getElementById("myImg4");
// var modalImg = document.getElementById("img01");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = "1.jpg";
  
// }

// img2.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = "4.png";
//   }
// img3.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = "6.jpg";
//   }
// img4.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = "9.jpg";
//   }

// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // zoom functions

// function zoomin(){
//     var zoom = document.getElementById("myImg01");
//     zoom.src = "1.jpg";
//     var current = zoom.clientWidth;
//     zoom.style.width = (current + 10) + "px";}



// CHAPTER 58-67

// TASK 1

// var a = document.getElementById("main-content")
// console.log(a.childNodes)

// var b = document.getElementsByClassName("render");
// console.log(b)

// document.getElementById("first-name").value = "Tanzeel"
// document.getElementById("last-name").value = "Abdul Wahid"
// document.getElementById("email").value = "tanzeel@yahoo.com"

// TASK 2

// var x = document.getElementById("form-content")
// console.log(x.nodeType)

// var n = document.getElementById("lastName")
// console.log(n.nodeType)
// console.log(n.childNodes[0])

// var h = document.getElementById("lastName");
// var update = "Last name : Tanzeel"
// h.firstChild.nodeValue = update

// var i = document.getElementById("main-content")
// console.log(i.firstChild)
// console.log(i.lastChild)

// var o = document.getElementById("lastName")
// console.log(o.nextSibling)
// console.log(o.previousSibling)

// var q = document.getElementById("email")
// console.log(q.parentNode)
// console.log(q.nodeType)