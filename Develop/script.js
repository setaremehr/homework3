// Dom Element
const answerEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const numberEl = document.getElementById("number");
const lowerEl = document.getElementById("lower");
const upperEl = document.getElementById("upper");
const symbolEl = document.getElementById("symbol");

var generateEl = document.getElementById("generate");




// functions into an abject 
const randomFunc = {
    upper : getRandomUpper,
    lower : getRandomLower,
    number : getRandomNumber,
    symbol : getRandomSymbol
};

//generate event
generateEl.addEventListener('click', function(){
    const length = +lengthEl.value;
    const hasUpper = upperEl.checked;
    const hasLower = lowerEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

answerEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});



// Generating random values

function getRandomLower () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
} 
function getRandomUpper () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomSymbol() {
    var symbol = '!@#$%^&*(){}[]=<>/,.|~?' ;
    return symbol [Math.floor(Math.random() * symbol.length)];
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48);
}

//Generate Password Function
function generatePassword(upper, lower, number, symbol, length){
    let generatedPassword = "";

    const typesCount = upper + lower + number + symbol;

  
// filter out unchecked types
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    }

    for(let i=0; i<length; i+=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);


    return finalPassword;
}

