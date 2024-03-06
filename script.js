let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
let answerNumber;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

let answerText ='';
let sign = '';
let hundredsNumber = 0;
let hundredsText = '';
let decadesNumber = 0;
let decadesText = '';
let unitsNumber = 0;
let unitsText = '';

checkInput(minValue, maxValue);
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
calculateAnswer ();
let orderNumber = 1;
let gameRun = true;
transformIntoText ();
printResult();

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));   
    checkInput();
    calculateAnswer ();
    orderNumber = 1;
    transformIntoText ();
    printResult();
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    gameRun = true;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue ) {
            errorAnswer();
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            calculateAnswer ();
            orderNumber++;
            transformIntoText ();
            printResult ();
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (maxValue === minValue || 
            answerNumber - 1 < minValue) {
            errorAnswer();
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            calculateAnswer ();
            orderNumber++;
            transformIntoText ();
            printResult ();
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const phraseRandom = Math.round( Math.random() * 2);
        const answerPhrase = [`Это было слишком просто`, `Я всегда побеждаю`, `Потому что я знаю всё`];
        answerField.innerText = answerPhrase[phraseRandom];
        gameRun = false;
    }
})

//функция расчет ответа:
function calculateAnswer() { 
    answerNumber = Math.floor((minValue + maxValue) / 2);
    console.log(minValue, maxValue)
}

//вывод сообщений об оконочании игры в случае ошибки:
function errorAnswer() { 
    const phraseRandom = Math.round( Math.random() * 2);
    const answerPhrase = [`Давай попробуем еще раз..`, `Не пытайтесь меня обмануть!`, `Я сдаюсь..`];
    answerField.innerText = answerPhrase[phraseRandom];
}

// если пользователь указал некорректный диапозон:
function checkInput() {
    if (isNaN(minValue) || isNaN(maxValue)) {
        minValue = 0;
        maxValue = 100;
    } else if (minValue === 'string' || maxValue === 'string') {
        minValue = 0;
        maxValue = 100;
    } 
    if (minValue > maxValue) {
        minValue = minValue + maxValue;
        maxValue = minValue - maxValue;
        minValue = minValue - maxValue;
    } 
    if (minValue < -999) {
        minValue = -999; 
    } else if (minValue > 999) {
        minValue = 0;
    }
    if (maxValue > 999) {
        maxValue = 999; 
    } else if (maxValue < -999) {
        maxValue = 0;
    }
}

//функция формирования текстового представления числа:
function transformIntoText () {
     if (answerNumber !== 0) {

         if (answerNumber < 0) {
            sign = 'минус';
         } else {
            sign = '';
         }
        
         hundredsNumber = Math.floor(Math.abs(answerNumber)/100);        
            switch (hundredsNumber) {
                case 0:
                    hundredsText = ''  
                    break;
                case 1:
                    hundredsText = ' сто'  
                    break;
                case 2:
                    hundredsText = ' двести'  
                    break;
                case 3:
                    hundredsText = ' триста'  
                    break;     
                case 4:
                    hundredsText = ' четыреста'  
                    break;  
                case 5:
                    hundredsText = ' пятьсот'  
                    break;
                case 6:
                    hundredsText = ' шестьсот'  
                    break;
                case 7:
                    hundredsText = ' семьсот'  
                    break; 
                case 8:
                    hundredsText = ' восемьсот'  
                    break; 
                case 9:
                    hundredsText = ' девятьсот'  
                    break;                                              
            }  
        
        if (Math.floor(Math.abs(answerNumber)%100) > 10 && Math.floor(Math.abs(answerNumber)%100) < 20) {
            decadesNumber = Math.floor(Math.abs(answerNumber)%100);
            unitsText = '';
            switch (decadesNumber) {
                case 11:
                    decadesText = ' одиннадцать'  
                    break;
                case 12:
                    decadesText = ' двенадцать'  
                    break;
                case 13:
                    decadesText = ' тринадцать'  
                    break;     
                case 14:
                    decadesText = ' четырнадцать'  
                    break;  
                case 15:
                    decadesText = ' пятнадцать'  
                    break;
                case 16:
                    decadesText = ' шестнадцать'  
                    break;
                case 17:
                    decadesText = ' семнадцать'  
                    break; 
                case 18:
                    decadesText = ' восемнадцать'  
                    break; 
                case 19:
                    decadesText = ' девятнадцать'  
                    break;                                             
            }
        } else {
            decadesNumber = Math.floor((Math.abs(answerNumber%100)/10));
            unitsNumber = Math.floor(Math.abs(answerNumber)%10);

            switch (decadesNumber) {    
                case 0:
                    decadesText = ''  
                    break;              
                case 1:
                    decadesText = ' десять'  
                    break;
                case 2:
                    decadesText = ' двадцать'  
                    break;
                case 3:
                    decadesText = ' тридцать'  
                    break;     
                case 4:
                    decadesText = ' сорок'  
                    break;  
                case 5:
                    decadesText = ' пятьдесят'  
                    break;
                case 6:
                    decadesText = ' шестьдесят'  
                    break;
                case 7:
                    decadesText = ' семьдесят'  
                    break; 
                case 8:
                    decadesText = ' восемьдесят'  
                    break; 
                case 9:
                    decadesText = ' девяносто'  
                    break;
            }  

            switch (unitsNumber) {    
            case 0:
                unitsText = ''  
                break;                             
            case 1:
                unitsText = ' один'  
                break;
            case 2:
                unitsText= ' два'  
                break;
            case 3:
                unitsText = ' три'  
                break;     
            case 4:
                unitsText = ' четыре'  
                break;  
            case 5:
                unitsText = ' пять'  
                break;
            case 6:
                unitsText = ' шесть'  
                break;
            case 7:
                unitsText = ' семь'  
                break; 
            case 8:
                unitsText = ' восемь'  
                break; 
            case 9:
                unitsText = ' девять'  
                break;
            }  
        }
        answerText = (sign + hundredsText + decadesText + unitsText).trim();
        console.log(answerNumber);
        console.log(answerText.length);
        console.log((sign + hundredsText + decadesText + unitsText).trim());
    } else {
        answerText = '0';
    }
}

// функция вывода сообщений
function printResult() {
    const phraseRandom = Math.round( Math.random() * 2);
    let answerPhrase = [];
    if (answerText.length > 19) { 
       answerPhrase = [`Хм.. \n это ${answerNumber}?`, `Наверно, это \n ${answerNumber}`, `Может быть это \n ${answerNumber}?`];
    } else {
       answerPhrase = [`Хм.. \n это ${answerText}?`, `Наверно, это \n ${answerText}`, `Может быть это \n ${answerText}?`];
    } 
    orderNumberField.innerText = orderNumber;
    answerField.innerText = answerPhrase[phraseRandom];
}