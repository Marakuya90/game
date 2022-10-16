//Глобальные переменные
let startButton = document.querySelector('#welcomeForm button');
let userName;
let cells = document.querySelector('.field').children;
const ROWS = 10;
const COLS = 20;
let player = {
    row:0,
    col:0
};
let hudHearts = document.querySelector('#hudHearts');
let heart = 0;

//События
document.querySelector('#welcomeForm input').addEventListener('input', check);
document.getElementById('welcomeForm').addEventListener('submit', start);

//Проверка имени ввода игрока
function check() {
    startButton.disabled = !this.value;
    userName = this.value;
}
//Запуск игры
function start(event) {
    event.preventDefault();
    //Скрываем форму входа
    document.querySelector('.box-wrapper').classList.remove('active');
    document.getElementById('hudUsername').innerText = userName;
    fill();
    window.addEventListener('keydown', move);
}
//Функция для заполнения игрового поля
function fill() {
//Помещаем игрока
    cells[0].className = 'cell player';
//Размещаем камни на игровом поле
    let stonesCount = 0;
    while (stonesCount < 10) {
        let num = Math.floor(Math.random() * ROWS * COLS);
        if (cells[num].classList.conteins = 'ground') {
            cells[num].className = 'cell stone';
            stonesCount++; 
        }
    }
//Размещаем сердца на игровом поле
    let heartCount = 0;
    while (heartCount < 10) {
        let num = Math.floor(Math.random() * 200);
        if (cells[num].classList.conteins = 'ground') {
            cells[num].className = 'cell heart';
            heartCount++;}
        }
    }
//Движение игрока
function move(event) {
    switch(event.keyCode){
        case 37:left(); break;
        case 38:up(); break;
        case 39:right(); break;
        case 40:down(); break;
    }
}
//Движение влево
function left(){
    if(player.col > 0) {
        let currentCell = getCell(player.row, player.col);
        let nextCell = getCell(player.row, player.col - 1);
        if(nextCell.className!='cell stone'){ 
            if(nextCell.classList.contains('heart')){
                hudHearts.innerText = `${++heart}/10`;
            }
        currentCell.className = 'cell';
        nextCell.className = 'cell player';
        player.col--;
        }
    }
};
//Движение вверх
function up(){
    if(player.row > 0) {
        let currentCell = getCell(player.row, player.col);
        let nextCell = getCell(player.row - 1, player.col);
        if(nextCell.className!='cell stone'){ 
            if(nextCell.classList.contains('heart')){
                hudHearts.innerText = `${++heart}/10`;
            }
        currentCell.className = 'cell';
        nextCell.className = 'cell player';
        player.row--;
        }
    }
};
//Движение вправо
function right(){
    if(player.col < COLS - 1) {
        let currentCell = getCell(player.row, player.col);
        let nextCell = getCell(player.row, player.col + 1);
        if(nextCell.className!='cell stone'){
            if(nextCell.classList.contains('heart')){
                hudHearts.innerText = `${++heart}/10`;
            }
        currentCell.className = 'cell';
        nextCell.className = 'cell player';
        player.col++;
        }
    }
};
//Движение вниз
function down(){
    if(player.row < ROWS - 1) {
        let currentCell = getCell(player.row, player.col);
        let nextCell = getCell(player.row + 1, player.col);
        if(nextCell.className!='cell stone'){ 
            if(nextCell.classList.contains('heart')){
                hudHearts.innerText = `${++heart}/10`;
            }
        currentCell.className = 'cell';
        nextCell.className = 'cell player';
        player.row++;
        }
    }
}
//Получение положения игрока
function getCell(row, col){
    return cells[row * COLS + col];
}