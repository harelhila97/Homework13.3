// console.log("============================================")
// //Write a function that receive 2 numbers and return the sum between the numbers
// var num1 = +prompt("enter number");
// var num2 = +prompt("enter number");
// console.log(sum(num1, num2))

// function sum(num1, num2) {
//     return num1 + num2;
// }

// console.log("============================================")
// // Write a function that receive 2 numbers and return the max between the numbers
// var num1 = +prompt("enter number");
// var num2 = +prompt("enter number");
// console.log(max(num1, num2))

// function max(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }

// console.log("============================================")
// // Write a function that receive 3 numbers and return the min between the numbers
// var num1 = +prompt("enter number");
// var num2 = +prompt("enter number");
// var num3 = +prompt("enter number");
// console.log(min(num1, num2,num3))

// function min(num1, num2, num3) {
//     if (num1 > num2) {
//         if (num2 > num3) {
//             return num3;
//         } else {
//             return num2;
//         }
//     } else {
//         if (num1 > num3) {
//             return num3;
//         } else {
//             return num1;
//         }
//     }
// }

// console.log("============================================")
// //Write a function that receive 2 names of products and return true if one of the products is "apple" otherwise the function will return false
// var product1 = prompt("enter product 1 name:");
// var product2 = prompt("enter product 2 name:");

// console.log(apple(product1, product2))

// function apple(product1, product2) {
//     if (product1 == "apple" || product2 == "apple") {
//         return "apple";
//     } else {
//         return "false";
//     }
// }


// console.log("============================================")
//page 35 - ex. 7
// קלוט נתון N. הדפס שתי סדרות נפרדות.
// א. הדפס את סדרת המספרים מ- 1 עד N.
// ב. בהמשך להדפסה הקודמת הדפס סידרה נוספת שבה כל מספר מהסדרה הקודמת
// מוכפל ב- .
// var num = +prompt("enter number");
// for (var index = 0; index < num; index++) {
//     console.log(index)
// }
// for (var index = 0; index < num; index++) {
//     console.log(index * 2)
// }


// console.log("============================================")
//page 35 - ex. 8
// קלוט נתון למשתנה N.
// סכם את כל המספרים עד N המתחלקים ב- 4 ואת כל המתחלקים ב- ,7 לסכום
// אחד. הדפס את התוצאה )
// var num = +prompt("enter number");
// var sum = 0;

// for (var index = 0; index < num; index++) {
//     if (index % 4 == 0 || index % 7 == 0) {
//         sum = sum + index;
//     }
// }
// console.log(sum)

// console.log("============================================")
// //page 35 - ex. 15
// var studentname;
// var grade;
// var sum = 0;
// var count = 0;
// var avr = 0;

// for (var index = 0; index < 5; index++) {
//     studentname = prompt("enter name");
//     grade = +prompt("enter grade");
//     if (grade => 70) {
//         console.log(studentname)
//         sum = sum + grade;
//         count = count + 1;
//     }
// }
// if (count == 0) {
//     console.log("no student pass")
// } else {
//     console.log("the averge grade is: " + sum / count);
// }

// console.log("============================================")
//page 37 - ex. 17
// קלוט מספר טבעי count, ועוד count נתונים.
// הצג את הערך הגדול ביותר בתוך count הנתונים, המספר הסידורי של המופע הראשון
// של אותו ערך בקלט ואת מספר המופעים הנוספים של אותו הערך.
// var count = +prompt("enter number");
// var maxnum = 0;
// var maxnumindex = 0;
// var totalmaxnumindex = 1;

// for (var index = 1; index <= count; index++) {
//     var num = +prompt("enter number");
//     if (num == maxnum) {
//         totalmaxnumindex = totalmaxnumindex + 1;
//     }
//     if (num > maxnum) {
//         maxnum = num;
//         maxnumindex = index;
//         totalmaxnumindex = 1;
//     }
// }
// console.log("the max num is: " + maxnum + " ,was enter in index: " + maxnumindex + " ,the number of shows is: " + totalmaxnumindex)

// console.log("============================================")
//page 37 - ex. 18
// קלוט מספר טבעי amount, ועוד amount נתונים.
// הצג את הערך השני בגודלו מבין amount הנתונים ואת המספר הסידורי של המופע
// האחרון של אותו ערך בקלט

// var amount = +prompt("enter number");
// var maxnum = 0;
// var maxnumindex = 0;
// var midnumindex = 1;
// var minnum = 0;
// var midnum = 0;

// for (var index = 1; index < amount; index++) {
//     var num = +prompt("enter number");
//     if (num == midnum) {
//         midnumindex = index;
//     }
//     if (num > maxnum) {
//         midnum = maxnum;
//         midnumindex = index;
//         maxnum = num;
//     } else {
//         if (num > midnum) {
//             midnum = num;
//             midnumindex = index;
//         }
//     }
// }

// console.log(midnum + ", " + midnumindex)

console.log("============================================")
//page 48 - ex. 1
// בתור הקלט תוצאות שלושת משחקיה של מכבי ת"א באליפות אירופה.
// כל תוצאה היא זוג שלמים: הראשון הוא מספר הסלים לזכותה של מכבי והשני הוא
// מספר הסלים לחובתה. ניצחון במשחק מעניק שתי נקודות ותיקו )שוויון( מעניק נקודה.
// הצג את מספר הנקודות שצברה מכבי ת"א.

var formaccabi1 = +prompt("enter first score [for maccabi]:");
var forothers1 = +prompt("enter first score [for second team]:");
var formaccabi2 = +prompt("enter first score [for maccabi]:");
var forothers2 = +prompt("enter first score [for second team]:");
var formaccabi3 = +prompt("enter first score [for maccabi]:");
var forothers3 = +prompt("enter first score [for second team]:");
var totalscore = 0;
var gamescore = 0;

totalscore = score(formaccabi1, forothers1) + score(formaccabi2, forothers2) + score(formaccabi3, forothers3);
console.log(totalscore);

function score(maccabi, others) {
    gamescore = 0;
    if (maccabi > others) {
        gamescore = gamescore + 2;
    }
    if (maccabi == others) {
        gamescore = gamescore + 1;
    }
    return gamescore;
}