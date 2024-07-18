// 1-savol

// let num = +prompt("Iltimos son kiriting");

// if (num > 0) {
//     num += 1
// }

// console.log(num);
// document.write(num)

// 2-savol

// let num = +prompt("Iltimos son kiriting");

// if (num > 0) {
//     num += 1
// }else{
//     num -= 2
// }

// console.log(num);
// document.write(num)


// 3-salom

// let num = +prompt("Iltimos son kiriting");

// if (num > 0) {
//     num += 1
// }else if (num === 0){
//     num += 10
// }
// else{
//     num -= 2
// }

// console.log(num);
// document.write(num)


// 4-savol

// let num1 = +prompt("iltimos 1 son kiriting");
// let num2 = +prompt("iltimos 2 son kiriting");
// let num3 = +prompt("iltimos 3 son kiriting");

// let musbat = 0;

// if (num1 > 0) {
//     musbat++
// }
// if (num2 > 0) {
//     musbat++
// }
// if (num3 > 0) {
//     musbat++
// }

// console.log(musbat);
// document.write(musbat)

// 5-savol


// let num1 = +prompt("iltimos 1 son kiriting");
// let num2 = +prompt("iltimos 2 son kiriting");
// let num3 = +prompt("iltimos 3 son kiriting");
// let musbat = 0;
// let manfiy = 0;

// if (num1 > 0) {
//     musbat++
// } else {
//     manfiy++
// }
// if (num2 > 0) {
//     musbat++
// } else {
//     manfiy++
// }
// if (num3 > 0) {
//     musbat++
// } else {
//     manfiy++
// }




// console.log("Kiritgan soniz orasida musbatlar soni   " + musbat);
// document.write("Kiritgan soniz orasida musbatlar soni   " + musbat);
// console.log("Kiritgan sonlariz orasida manfi sonlar " + manfiy);
// document.write("Kiritgan sonlariz orasida manfi sonlar " + manfiy)


// 6-savol

// let num1 = +prompt("Iltimos 1 soni kiriting");
// let num2 = +prompt("Iltimos 2 soni kiriting");


// if (num1 > num2) {
//     console.log(num1);
//     document.write(num1)
// }else{
//     console.log(num2);
//     document.write(num2)
// }



// 7-savol

// let num1 = +prompt("1-soni kiriting");
// let num3 = +prompt("2-soni kiriting");

// if (num1 < num3) {
//     console.log("1-son eng kichigi");
// }else{
//     console.log("2-son eng kotasi");
// }


// 8-savol

// let num1 = +prompt("Iltimos 1 soni kiriting");
// let num2 = +prompt("Iltimos 2 soni kiriting");
// let max;
// let min;

// if (num1 > num2) {
//     max = num1;
//     min = num2;
// } else if (num1 < num2) {
//     max = num2;
//     min = num1;
// } else {
//     max = num1; 
//     min = num1;
// }

// console.log("Max:", max);
// console.log("Min:", min);


// 9-savol


// let A = +prompt("Iltimos 1-soni kiriting");
// let B = +prompt("Iltimos 2-soni kiriting");

// if (A > B) {
//     let temp = A;
//     A = B;
//     B = temp;
// }

// console.log("A:", A);
// console.log("B:", B);


// 10-savol


// let A = +prompt("Iltimos 1-soni kiriting");
// let B = +prompt("Iltimos 2-soni kiriting");

// if (A !== B) {
//     A = A + B;
//     B = A;
// } else {
//     A = 0;
//     B = 0;
// }

// console.log("A:", A);
// console.log("B:", B);

// 11-savol


// let A = +prompt("Iltimos 1-soni kiriting");
// let B = +prompt("Iltimos 2-soni kiriting");

// if (A !== B) {
//     if (A > B) {
//         B = A;
//     } else {
//         A = B;
//     }
// } else {
//     A = 0;
//     B = 0;
// }

// console.log("A:", A);
// console.log("B:", B);


// 12-savol

// let A = +prompt("Iltimos 1-soni kiriting");
// let B = +prompt("Iltimos 2-soni kiriting");
// let C = +prompt("Iltimos 3-soni kiriting");


// if (B < min) {
//     min = B;
// }

// if (C < min) {
//     min = C;
// }

// console.log("Eng kichik son " + min);


// 13-savol

// let A = +prompt("Iltimos 1-soni kiriting");
// let B = +prompt("Iltimos 2-soni kiriting");
// let C = +prompt("Iltimos 3-soni kiriting");

// let sum;

// if ((A > B && A < C) || (A > C && A < B)) {
//     sum = A;
// }
// else if ((B > A && B < C) || (B > C && B < A)) {
//     sum = B;
// }
// else {
//     sum = C;
// }

// console.log("O'rta son "+ sum);

// 14-savol

// let A = +prompt("Iltimos 1-soni kiriting");
// let B = +prompt("Iltimos 2-soni kiriting");
// let C = +prompt("Iltimos 3-soni kiriting");

// let min ;
// let max;

// if (A <= B && A <= C) {
//     min = A;
// } else if (B <= A && B <= C) {
//     min = B;
// } else {
//     min = C;
// }

// if (A >= B && A >= C) {
//     max = A;
// } else if (B >= A && B >= C) {
//     max = B;
// } else {
//     max = C;
// }

// console.log("Eng kichik son:", min);
// console.log("Eng katta son:", max);

// 15-savol


// let A = +prompt("Iltimos 1-soni kiriting");
// let B = +prompt("Iltimos 2-soni kiriting");
// let C = +prompt("Iltimos 3-soni kiriting");

// let sum1 = A + B;
// let sum2 = A + C;
// let sum3 = B + C;

// let maxSum;
// let num1, num2;

// if (sum1 >= sum2 && sum1 >= sum3) {
//     maxSum = sum1;
//     num1 = A;
//     num2 = B;
// } else if (sum2 >= sum1 && sum2 >= sum3) {
//     maxSum = sum2;
//     num1 = A;
//     num2 = C;
// } else {
//     maxSum = sum3;
//     num1 = B;
//     num2 = C;
// }

// console.log("Eng katta yig'indi beradigan sonlar" + num1, num2);



// 16-savol

// let A = +prompt("Iltimos son kiriting");

// if (A > 0) {
//     console.log("A soni musbat");
// } else {
//     console.log("A soni musbat emas yoki 0 ga teng");
// }


// 17-savol

// let A = +prompt("Iltimos son kiriting");

// if (A > 0) {
//     console.log("A soni musbat");
// } else if (A < 0) {
//     console.log("A soni manfiy");
// } else {
//     console.log("A soni nolga teng");
// }



// 18-savol

// let A = +prompt("Iltimos son kiriting");

// if (A % 2 === 0) {
//     console.log("A soni juft son");
// } else {
//     console.log("A soni toq son");
// }

// 19-savol



// let A = +prompt("Iltimos 1-soni kiriting");
// let B = +prompt("Iltimos 2-soni kiriting");

// if (A > 2 && B <= 3) {
//     console.log("rost");
// } else {
//     console.log("rost emas");
// }


// 20-savol

// let A = +prompt("Iltimos 1-soni kiriting");
// let B = +prompt("Iltimos 2-soni kiriting");

// if (A >= 0 || B < -2) {
//     console.log("rost");
// } else {
//     console.log("rost emas");
// }

// 21-savol

// let A = +prompt("Iltimos 1-soni kiriting");
// let B = +prompt("Iltimos 2-soni kiriting");
// let C = +prompt("Iltimos 3-soni kiriting");

// if (A <= B && B <= C) {
//     console.log("rost");
// } else {
//     console.log("rost emas");
// }



// 22-savol

// let A = +prompt("Iltimos 1-soni kiriting");
// let B = +prompt("Iltimos 2-soni kiriting");
// let C = +prompt("Iltimos 3-soni kiriting");

// if ((A <= B && B <= C) || (C <= B && B <= A)) {
//     console.log("rost");
// } else {
//     console.log("rost emas");
// }


// 23-savol

// let A = +prompt("Iltimos 1-soni kiriting");
// let B = +prompt("Iltimos 2-soni kiriting");

// if (A % 2 !== 0 && B % 2 !== 0) {
//     console.log("A va B sonlari toq sonlar");
// } else {
//     console.log("A va B sonlari toq sonlar emas");
// }


// 24-savol

// let A = +prompt("Iltimos 1-soni kiriting");
// let B = +prompt("Iltimos 2-soni kiriting");

// if ((A % 2 !== 0 || B % 2 !== 0) && (A % 2 === 0 || B % 2 === 0)) {
//     console.log("bittasi toq son");
// } else {
//     console.log("bittasi toq son emas");
// }


// 25-savol

// let A = +prompt("Iltimos 1-soni kiriting");
// let B = +prompt("Iltimos 2-soni kiriting");

// if ((A % 2 !== 0 && B % 2 === 0) || (A % 2 === 0 && B % 2 !== 0)) {
//     console.log("bittasi toq son");
// } else {
//     console.log("bittasi toq son emas");
// }





