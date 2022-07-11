alert("Угадай число от 1 до 10!И выиграй миллион!")

let min = 1
let max = 10

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num = getRandomInRange(min, max)

while (1) {
    if (prompt("Введите число") == num) {
        alert("Верно.Вы выиграли миллион")
        prompt("Введите номер вашей карты")
        alert("С вашей карты списали 10000 рублей")
        break
    }else {
        alert("Вы проиграли. Попробуйте снова")
        alert("Угадай число от 1 до 10!И выиграй миллион!")
    }
}
