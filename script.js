let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) ||0
minValue = minValue<-1000 ? -999 : minValue
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) ||100
maxValue = maxValue>1000 ? 999 : maxValue
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.querySelector('#btnRetry').addEventListener('click', () => {
location.reload ()
})

document.querySelector('#btnOver').addEventListener('click', ()=> {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.floor(Math.random()*3);
            let answerPhrase = '';
            switch(phraseRandom){
                case 0:
                   answerPhrase ='Вы загадали неправильное число!\n\u{1F914}';
                   break;
                case 1:
                    answerPhrase ='Я сдаюсь...\n\u{1F92F}';
                    break;
                default:
                    answerPhrase ='Так это не работает...\n\u{1F92E}';    
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
        }
    }
})

document.querySelector('#btnLess').addEventListener('click', ()=> {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.querySelector('#btnEqual').addEventListener('click', ()=> {
    if (gameRun){
        const phraseRandom = Math.floor(Math.random()*3);
        let answerPhrase = '';
            switch(phraseRandom){
                case 0:
                   answerPhrase ='Я всегда угадываю...\n\u{1F60E}';
                   break;
                case 1:
                    answerPhrase ='Ну изи же...\n\u{1F60E}';
                    break;
                default:
                    answerPhrase ='Давай что-нибудь посложнее...\n\u{1F60E}';   
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
    }
})

