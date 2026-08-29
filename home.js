console.log("\ntask 21");
let number21 = 49
let sqrt = Math.sqrt(number21)

if (Number.isInteger(sqrt)) {
    console.log(true);
}
else {
    console.log(false);
}


console.log("\ntask 22");
let number22 = 8

if (Math.pow(3, 1) == number22 || Math.pow(3, 2) == number22 || Math.pow(3, 3) == number22 || Math.pow(3, 4) == number22) {
    console.log("Степень тройки");
}
else {
    console.log("Не степень тройки");
}


console.log("\ntask 23");
let number23 = 3.2

console.log("Math.floor:", Math.floor(number23));
console.log("Math.ceil:", Math.ceil(number23));
console.log("Math.round:", Math.round(number23));


console.log("\ntask 24");
let a24 = 10
let b24 = 25
let c24 = 15

console.log("Максимум:", Math.max(a24, b24, c24));
console.log("Минимум:", Math.min(a24, b24, c24));


console.log("\ntask 25");
let number25 = 6

if (number25 > 1 && (number25 % 2 != 0 || number25 == 2) && (number25 % 3 != 0 || number25 == 3)) {
    console.log("Простое");
}
else {
    console.log("Составное");
}


console.log("\ntask 26");
let number26 = 4

if (number26 % 2 == 0) {
    if (number26 % 4 == 0) {
        console.log("Чётное и делится на 4");
    }
    else {
        console.log("Чётное, но не делится на 4");
    }
}
else {
    console.log("Нечётное");
}


console.log("\ntask 27");
let x1 = 1
let y1 = 2
let x2 = 4
let y2 = 6

let distance = Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
)

console.log("Расстояние:", distance);


console.log("\ntask 28");
let age = 65

if (age >= 0 && age <= 12) {
    console.log("Ребёнок");
}
else if (age >= 13 && age <= 19) {
    console.log("Подросток");
}
else if (age >= 20 && age <= 59) {
    console.log("Взрослый");
}
else if (age >= 60) {
    console.log("Пожилой");
}


console.log("\ntask 29");
let a29 = 10
let b29 = 20
let c29 = 30

if (a29 < b29) {
    if (a29 < c29) {
        console.log("Самое маленькое:", a29);
    }
    else {
        console.log("Самое маленькое:", c29);
    }
}
else {
    if (b29 < c29) {
        console.log("Самое маленькое:", b29);
    }
    else {
        console.log("Самое маленькое:", c29);
    }
}


console.log("\ntask 30");
let number30 = 100

if (number30 > 50 && number30 < 150) {
    console.log("В диапазоне");
}
else {
    console.log("Вне диапазона");
}

console.log("\ntask 31");
let number31 = -3

if (number31 > 0) {
    console.log("Положительное");
}
else if (number31 < 0) {
    console.log("Отрицательное");
}
else {
    console.log("Ноль");
}


console.log("\ntask 32");
let year32 = 1900

if (year32 % 400 == 0) {
    console.log("Високосный");
}
else if (year32 % 100 == 0) {
    console.log("Не високосный");
}
else if (year32 % 4 == 0) {
    console.log("Високосный");
}
else {
    console.log("Не високосный");
}


console.log("\ntask 33");
let number33 = 12

if (number33 % 3 == 0 && number33 % 4 == 0) {
    console.log("Делится на 3 и 4");
}
else {
    console.log("Не делится на 3 и 4");
}


console.log("\ntask 34");
let number34 = 3.5

console.log("Math.floor:", Math.floor(number34));
console.log("Math.ceil:", Math.ceil(number34));
console.log("Math.round:", Math.round(number34));


console.log("\ntask 35");
let number35 = 16
let sqrt35 = Math.sqrt(number35)

if (Number.isInteger(sqrt35)) {
    if (number35 % 2 == 0) {
        console.log("Идеальный квадрат и чётное");
    }
    else {
        console.log("Идеальный квадрат, но нечётное");
    }
}
else {
    console.log("Не идеальный квадрат");
}


console.log("\ntask 36");
let height36 = 155

if (height36 > 180) {
    console.log("Очень высокий");
}
else if (height36 > 160) {
    console.log("Высокий");
}
else if (height36 > 150) {
    console.log("Средний");
}
else {
    console.log("Низкий");
}


console.log("\ntask 37");
let number37 = 2

if (number37 == Math.pow(2, 1) || number37 == Math.pow(2, 2) || number37 == Math.pow(2, 3) || number37 == Math.pow(2, 4) || number37 == Math.pow(2, 5)) {
    console.log("Степень двойки");
}
else {
    console.log("Не степень двойки");
}


console.log("\ntask 38");
let a38 = 5
let b38 = 12
let c38 = 9

if (a38 < b38) {
    if (a38 > c38) {
        console.log("Среднее число:", a38);
    }
    else {
        if (b38 < c38) {
            console.log("Среднее число:", b38);
        }
        else {
            console.log("Среднее число:", c38);
        }
    }
}
else {
    if (b38 > c38) {
        console.log("Среднее число:", b38);
    }
    else {
        if (a38 < c38) {
            console.log("Среднее число:", a38);
        }
        else {
            console.log("Среднее число:", c38);
        }
    }
}


console.log("\ntask 39");
let number39 = 27

if (number39 == Math.pow(3, 1) || number39 == Math.pow(3, 2) || number39 == Math.pow(3, 3) || number39 == Math.pow(3, 4)) {
    console.log("Куб числа 3");
}
else {
    console.log("Не куб");
}


console.log("\ntask 40");
let age40 = 10

console.log("Возраст:", age40);

if (age40 < 0) {
    console.log("Ошибка!");
}
else if (age40 < 7) {
    console.log("Иди в детский сад");
}
else if (age40 < 13) {
    console.log("Иди в школу");
}
else if (age40 < 18) {
    console.log("Иди в колледж");
}
else if (age40 < 23) {
    console.log("Иди в университет");
}
else {
    console.log("Работай!");
}
