console.log("\ntask 1");
let num = 10
if (num % 2 == 0) {
    if (num > 0) {
        console.log("Чётное и положительное");
        
    }
    else {
        console.log("Чётное но не положительное");
        
    }
}
else {
    console.log("Нечётное и не положительное");
    
}

console.log("\ntask 2");
let num2 = 81 
if (Number.isInteger(Math.sqrt(81))) {
    console.log("Yes");
    
}
else {
    console.log("No");
    
}

console.log("\ntask 3");
let a = 10
let b = 20
let c = 15
let max = + Math.max(a,b,c)
let min = Math.min(a,b,c)
if (a !== max && a !== min) {
    console.log("Среднее число это a");
    
}
else {
    console.log("Среднее число это не a");
    
}
