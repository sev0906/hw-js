let credits = 35500;
let pricePerDroid = 3000;
let HowManyDroidsToBuy = Number(prompt("Сколько хотите купить дроидов?"));
let totalPrice = HowManyDroidsToBuy * pricePerDroid;
if (!HowManyDroidsToBuy) {
    console.log("Отменено пользователем!");
} else {
    console.log(totalPrice);
}
if (totalPrice > credits) {
    console.log("Недостаточно средств на счету");
} else {
    console.log(
        `Вы купили ${HowManyDroidsToBuy} дроидов, на счету осталось ${
            credits - totalPrice
        }`,
    );
}
