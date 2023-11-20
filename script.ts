let num1, num2, num3: number;


num1 = Math.floor(Math.random() * 100);
num2 = Math.floor(Math.random() * 100);
num3 = Math.floor(Math.random() * 100);

console.log(num1, num2, num3);

if (num1 === num3) {
    console.log("Il vincitore è " + num1);
} else if (num2 === num3) {
    console.log("Il vincitore è " + num2);
} else {
    let diff1 = Math.abs(num3 - num1);
    let diff2 = Math.abs(num3 - num2);
    if (diff1 < diff2) {
        console.log("Il giocatore numero 1 si è avvicinato di più")
    } else {
        console.log("Il giocatore numero 2 si è avvicinato di più")
    }
}