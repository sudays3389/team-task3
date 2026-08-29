console.log("\ntask 1");
let age1 = 10

if (age1 < 7) {
    console.log("Дошкольник");
}
else if (age1 < 13) {
    console.log("Ребёнок");
}
else if (age1 < 18) {
    console.log("Подросток");
}
else {
    console.log("Взрослый");
}


console.log("\ntask 2");
let score2 = 85

if (score2 >= 90) {
    console.log("A");
}
else if (score2 >= 75) {
    console.log("B");
}
else if (score2 >= 60) {
    console.log("C");
}
else if (score2 >= 50) {
    console.log("D");
}
else {
    console.log("F");
}


console.log("\ntask 3");
let temperature3 = 30

if (temperature3 > 35) {
    console.log("Очень жарко");
}
else if (temperature3 > 25) {
    console.log("Жарко");
}
else if (temperature3 > 15) {
    console.log("Тепло");
}
else if (temperature3 > 5) {
    console.log("Прохладно");
}
else {
    console.log("Холодно");
}


console.log("\ntask 4");
let number4 = 16
let sqrt4 = Math.sqrt(number4)

if (Number.isInteger(sqrt4)) {
    console.log("Идеальный квадрат");
}
else {
    console.log("Не идеальный квадрат");
}


console.log("\ntask 5");
let a5 = 10
let b5 = 20
let c5 = 15

console.log("Максимум:", Math.max(a5, b5, c5));
console.log("Минимум:", Math.min(a5, b5, c5));


console.log("\ntask 6");
let number6 = 25
let sqrt6 = Math.sqrt(number6)

console.log(Number.isInteger(sqrt6));


console.log("\ntask 7");
let base7 = 3
let exponent7 = 4

console.log(Math.pow(base7, exponent7));


console.log("\ntask 8");
let number8 = 7
let isPrime8 = true

if (number8 <= 1) {
    isPrime8 = false
}
else {
    for (let i8 = 2; i8 < number8; i8++) {
        if (number8 % i8 == 0) {
            isPrime8 = false
        }
    }
}

if (isPrime8) {
    console.log("Простое");
}
else {
    console.log("Составное");
}


console.log("\ntask 9");
let a9 = 12
let b9 = 8
let c9 = 15

if (a9 > b9) {
    if (a9 > c9) {
        console.log("Самое большое:", a9);
    }
    else {
        console.log("Самое большое:", c9);
    }
}
else {
    if (b9 > c9) {
        console.log("Самое большое:", b9);
    }
    else {
        console.log("Самое большое:", c9);
    }
}


console.log("\ntask 10");
let number10 = 2

if (Math.pow(2, 1) == number10 || Math.pow(2, 2) == number10 || Math.pow(2, 3) == number10 || Math.pow(2, 4) == number10 || Math.pow(2, 5) == number10) {
    console.log("Степень двойки");
}
else {
    console.log("Не степень двойки");
}


console.log("\ntask 11");
let number11 = -5

if (number11 > 0) {
    console.log("Положительное");
}
else if (number11 < 0) {
    console.log("Отрицательное");
}
else {
    console.log("Ноль");
}


console.log("\ntask 12");
let year12 = 2024

if (year12 % 4 == 0 && year12 % 100 != 0 || year12 % 400 == 0) {
    console.log("Високосный");
}
else {
    console.log("Не високосный");
}


console.log("\ntask 13");
let x1_13 = 2
let y1_13 = 3
let x2_13 = 5
let y2_13 = 7

let distance13 = Math.sqrt(
    Math.pow(x2_13 - x1_13, 2) + Math.pow(y2_13 - y1_13, 2)
)

console.log("Расстояние:", distance13);


console.log("\ntask 14");
let number14 = 3.7

console.log("Math.floor:", Math.floor(number14));
console.log("Math.ceil:", Math.ceil(number14));
console.log("Math.round:", Math.round(number14));


console.log("\ntask 15");
let age15 = 25

if (age15 >= 0 && age15 <= 12) {
    console.log("Ребёнок");
}
else if (age15 >= 13 && age15 <= 19) {
    console.log("Подросток");
}
else if (age15 >= 20 && age15 <= 59) {
    console.log("Взрослый");
}
else if (age15 >= 60) {
    console.log("Пожилой");
}


console.log("\ntask 16");
let height16 = 170

if (height16 > 180) {
    console.log("Очень высокий");
}
else if (height16 > 160) {
    console.log("Высокий");
}
else if (height16 > 150) {
    console.log("Средний");
}
else {
    console.log("Низкий");
}


console.log("\ntask 17");
let a17 = 15
let b17 = 15

if (a17 == b17) {
    console.log("Равны");
}
else {
    console.log("Не равны");
}


console.log("\ntask 18");
let number18 = 0
let result18 = false

if (number18 % 2 == 0) {
    if (number18 > 0) {
        result18 = true
    }
}

console.log("Чётное и положительное:", result18);


console.log("\ntask 19");
let number19 = 8

if (number19 % 2 == 0 && number19 % 3 == 0) {
    console.log("Делится на 2 и 3");
}
else {
    console.log("Не делится");
}


console.log("\ntask 20");
let length20 = 10
let width20 = 5

let area20 = length20 * width20
let perimeter20 = 2 * (length20 + width20)

console.log("Площадь:", area20);
console.log("Периметр:", perimeter20);

if (area20 > perimeter20) {
    console.log("Площадь > Периметр:", true);
}
else {
    console.log("Площадь > Периметр:", false);
}
