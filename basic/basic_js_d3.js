//--- BASIC 1
//solution1

var randomN = Math.floor(Math.random() * 31 - 5);
document.write(randomN);

if (randomN <= 10) {
    console.log("The weather is cold");
} else {
    console.log("The weather is moderate");
}

// //solution 2
var randomN = Math.floor(Math.random() * 31 - 5);
document.write(randomN);

if (randomN > 10) {
    console.log("The weather is moderate");
} else {
    console.log("The weather is cold");
}


//--- BASIC2
// Solution 1
var myArray = [1, 7, -3, 9];
document.write(myArray.sort(function(a, b) { return a - b })[3] +
    "<br>");

//Solution 2
var myArray_2 = [1, 7, -3, 9];
var newArray = myArray_2.sort(function(a, b) { return a - b });
console.log(newArray[newArray.length - 1]);

//Solution 3
var myArray_3 = [1, 7, -3, 9];
console.log(
    myArray_3.sort(function(a, b) { return a - b }).reverse()[0]
);

// Solution 4
var number = [1, 7, -3, 9];
var max = 0;

for (i = 0; i < number.length; i++) {

     var max1 = number[i + 1];

     if (max < max1) {
         var max = max1;
     }
 }
 console.log(max);

// //not allowed :D
var myArray_4 = [1, 7, -3, 9];
let x = Math.max.apply(null, myArray_4);;
console.log(x);


// ----------------   FROM HENRY   ----------------
// --- BASIC 3
var randomNumber = Math.floor(Math.random() * 71 - 35);

if (randomNumber < -5) {
    document.getElementsByClassName("img")[0].src = "img/freeze-1.png";
    document.getElementsByClassName("text")[0].innerHTML = `<p style="color:white; background: black; padding: 1%; text-align: center; font-size: 5vh; width: 48%; margin: 0px;">${randomNumber}° degree(s)? <br> Gosh, it is <strong>freezing</strong>!</p>`;
} else if (randomNumber < 10) {
    document.getElementsByClassName("img")[0].src = "img/cold.jpg";
    document.getElementsByClassName("text")[0].innerHTML = `<p style="color:white; background: black; padding: 1%; text-align: center; font-size: 5vh; width: 48%; margin: 0px;">${randomNumber}° degree(s)? <br>The weather is <strong>cold</strong>.</p>`
} else if (randomNumber <= 25) {
    document.getElementsByClassName("img")[0].src = "img/moderate.jpg";
    document.getElementsByClassName("text")[0].innerHTML = `<p style="color:white; background: black; padding: 1%; text-align: center; font-size: 5vh; width: 48%; margin: 0px;">${randomNumber}° degree(s)? <br> The weather is <strong>moderate</strong></p>`;
} else if (randomNumber < 32) {
    document.getElementsByClassName("img")[0].src = "img/warm.jpg";
    document.getElementsByClassName("text")[0].innerHTML = `<p style="color:white; background: black; padding: 1%; text-align: center; font-size: 5vh; width: 48%; margin: 0px;">${randomNumber}° degree(s)? <br> Yey! The weather is <strong>warm</strong>.</p>`;
} else {
    document.getElementsByClassName("img")[0].src = "img/hot.jpg";
    document.getElementsByClassName("text")[0].innerHTML = `<p style="color:white; background: black; padding: 1%; text-align: center; font-size: 5vh; width: 48%; margin: 0px;">${randomNumber}° degree(s)? <br> Daaaamn! The weather is <strong>Hot</strong>.</p>`;
}
// ----------------   FROM HENRY (END)  ----------------


//BASIC3
var randomNbr = Math.floor(Math.random() * 31 - 5);
console.log(randomNbr);

if (randomNbr < 15) {
    document.getElementsByClassName("document")[0].innerHTML = "It's cold!";
} else if (randomNbr >= 15, randomNbr < 20) {
    document.getElementsByClassName("document")[0].innerHTML = "It's warm";
} else {
    document.getElementsByClassName("document")[0].innerHTML = "It's hot!";
}