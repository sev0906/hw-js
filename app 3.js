let message = prompt("ADMIN_PASSWORD");
const ADMIN_PASSWORD = "adminpass";

if (!message) {
    message = "Отменено пользователем!";
} else if (message === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
} else {
    message = "Доступ запрещён, неверный пароль!";
}

alert(message);
