//Глобальные переменные
let startButton = document.querySelector("#welcomeForm button")


//События

document.querySelector("#welcomeForm input").addEventListener("input", check)
document.getElementById("welcomeForm").addEventListener("submit", start)


//Проверка ввода имени игрока
function check() {
    //1 способ
    /*if (this.value != "")
        startButton.disabled = false
    else
        startButton.disabled = true*/

    //2 способ
    /*if (this.value)
        startButton.disabled = false
    else
        startButton.disabled = true*/

    //3 способ
    startButton.disabled = !this.value
}

//Запуск игры
function start(event){
    event.preventDefault()
}