//intermediate 1


let array = [76, 85, 65, 93, 81];
var sum = 0;

for (let i = 0; i < array.length; i++) {
    let number = array[i];
    var sum = sum + array[i];

    if (number < 60) {
        console.log("< 60 F");
    } else if (number < 70) {
        console.log("< 70 D");
    } else if (number < 80) {
        console.log("< 80 C");
    } else if (number < 90) {
        console.log("< 90 B");
    } else {
        console.log("< 100 A");
    }
}


console.log(sum);

let avg = `Avalage is ` + sum / array.length;
console.log(avg);

if (avg < 60) {
    console.log("< 60 F");
} else if (avg < 70) {
    console.log("< 70 D");
} else if (avg < 80) {
    console.log("< 80 C");
} else if (avg < 90) {
    console.log("< 90 B");
} else {
    console.log("< 100 A");
}


//intermediate 2


for ( var i = 1 ; i < 101; i ++) {
    
    if (i % 15 == 0) {
        console.log("FizBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//FizzBuzz Henry:


for (let i = 1; i < 101; i++) {
    if (i % (3 * 5) == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else
        console.log(i);
} 

//intermediate 3

