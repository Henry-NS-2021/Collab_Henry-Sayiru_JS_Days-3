//basic 1
//solution1

var randomNum = Math.floor(Math.random() * 31 - 5);
document.write(randomNum);

if (randomNum <= 10) {
    console.log("The weather is cold");
} else {
    console.log("The weather is moderate");
}

//solution 2
var randomNum = Math.floor(Math.random() * 31 - 5);
document.write(randomNum);

if (randomNum > 10) {
    console.log("The weather is moderate");
} else {
    console.log("The weather is cold");
}



//BASIC2

//Solution 1
// var myArray = [1, 7, -3, 9];
// document.write(
//     myArray.sort(function(a, b) { return a - b })[3]
// );
// //Solution 2
// var myArray = [1, 7, -3, 9];
// console.log(
//     myArray.sort(function(a, b) { return a - b }).reverse()[0]
// );
// //Solution 3
// var myArray = [1, 7, -3, 9];
// var newArray = myArray.sort(function(a, b) { return a - b });
// console.log(newArray[newArray.length - 1]);


//solution4
var number = [1, 13, -3, 9];
var max = number[0];

for (i = 0; i < number.length; i++) {

    var max1 = number[i + 1];

    if (max < max1) {
        var max = max1;
    }
}

console.log(max);



// ----------------   FROM HENRY   ----------------
// --- BASIC 2
// Solution 1
var myArray = [1, 7, -3, 9];
document.write(myArray.sort(function(a, b) { return a - b })[3] +
    "<br>");

//Solution 2
var myArray = [1, 7, -3, 9];
var newArray = myArray.sort(function(a, b) { return a - b });
console.log(newArray[newArray.length - 1]);

//Solution 3
var myArray = [1, 7, -3, 9];
console.log(
    myArray.sort(function(a, b) { return a - b }).reverse()[0]
);

//not allowed :D
var myArray = [1, 7, -3, 9];
let x = Math.max.apply(null, myArray);;
document.write(x);


// --- BASIC 3
var randomNumber = Math.floor(Math.random() * 71 - 35);
document.write(
    // if (randomNumber < -5) {
    //     document.getElementById("freezing").innerHTML = `<img src="
    //     img/freeze.jpg" style="width:50%"> <br>
    //     <p style="font-size: auto">Gosh, it is freezing!</p> `;
    // console.log("Gosh, it is freezing!");

);
if (randomNumber < -5) {
    document.getElementsByClassName("img")[0].src = "img/freeze-1.png";
    document.getElementsByClassName("text")[0].innerHTML = "Gosh, it is <strong>freezing</strong>!";
} else if (randomNumber < 10) {
    document.getElementsByClassName("img")[0].src = "img/cold.jpg";
    document.getElementsByClassName("text")[0].innerHTML = "The weather is <strong>cold</strong>"
} else if (randomNumber <= 25) {
    document.getElementsByClassName("img")[0].src = "img/moderate.jpg";
    document.getElementsByClassName("text")[0].innerHTML = "The weather is <strong>moderate</strong>";
} else if (randomNumber < 32) {
    document.getElementsByClassName("img")[0].src = "img/warm.jpg";
    document.getElementsByClassName("text")[0].innerHTML = "Yey! The weather is <strong>warm</strong>";
} else {
    document.getElementsByClassName("img")[0].src = "img/hot.jpg";
    document.getElementsByClassName("text")[0].innerHTML = "Daaaamn! The weather is <strong>Hot</strong>.";
}

// ----------------   FROM HENRY (END)  ----------------


//BASIC3

var randomNum = Math.floor(Math.random() * 31 - 5);
console.log(randomNum);

if (randomNum < 15) {
    document.getElementsByClassName("document")[0].innerHTML = "It's cold!";
} else if (randomNum >= 15, randomNum < 20) {
    document.getElementsByClassName("document")[0].innerHTML = "It's warm";
} else {
    document.getElementsByClassName("document")[0].innerHTML = "It's hot!";
}