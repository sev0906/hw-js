let PriceDelivery = prompt(`Страна доставки`);

switch (`PriceDelivery`[0].toLowerCase()) {
    case `китай`:
        console.log(`Доставка в Китай будет стоить 150 кредитов`);
        break;
    case `чили`:
        console.log(`Доставка в Чили будет стоить 250 кредитов`);
        break;
    case `австралия`:
        console.log(`Доставка в Австралию будет стоить 165 кредитов`);
        break;
    case `индия`:
        console.log(`Доставка в Индию будет стоить 90 кредитов`);
        break;
    case `ямайка`:
        console.log(`Доставка в Ямайку будет стоить 130 кредитов`);
        break;
    default:
        alert(`В вашей стране доставка не доступна`);
        break;
}
// 6-я задача пока не решена. У меня перестал работать live server (консоль не работает)