//empty variables for dom
let currentValue =''
let previousValue = ''
let operator = ''

//what will happen once site is refreshed
document.addEventListener('DOMContentLoaded', () => {
//connecting to html tags basic dom manipulation
let previousScreen = document.querySelector('.previous')
let currentScreen = document.querySelector('.current')
let numbers = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.operator')
let clear = document.querySelector('.clear')
let equal = document.querySelector('.equal')
let decimal = document.querySelector('.decimal')


//what will happen once u click on the number
numbers.forEach((number) => number.addEventListener('click', (e) => {
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue
}))

//what will happen once u click on the operator
operators.forEach((op) => op.addEventListener('click', (e) => {
    handleOperator(e.target.textContent)
    previousScreen.textContent = previousValue + operator
    currentScreen.textContent =''
}))

//what will happen once u click on the clear button
clear.addEventListener('click', () => {
    previousValue=''
    currentValue=''
    currentScreen.textContent =''
    previousScreen.textContent =''
    operator =''
})

//what will happen once u click on the equal button
equal.addEventListener('click', () => {
    if(currentValue!= '' && previousValue!='') {
        calculate()
        if(previousValue.length<=5) {
            currentScreen.textContent = previousValue
            previousScreen.textContent = ""
            currentValue =''
            
        } else {
            currentScreen.textContent = previousValue.slice(0,5) + '...'
            previousScreen.textContent = ""
            currentValue =''
        }
    }
 

   
})

//what will happen once u click on the decimal
decimal.addEventListener('click', () => {
    makeDecimal()
})

})

//showing number on screen
function handleNumber(n) {
    if(currentValue.length<=5) {
        currentValue+=n
    }
 
}

//showing operator on screen
function handleOperator(p) {
operator = p
previousValue = currentValue
currentValue =''
}

//basic arithmetic operations 
function calculate() {
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)

    if(operator === "+") {
        previousValue+=currentValue
    }  
    else if(operator === "-") {
        previousValue-=currentValue
    }  

    else if(operator === "x") {
        previousValue*=currentValue
    } else {
        previousValue/=currentValue
    }

    previousValue = a(previousValue)
    currentValue = a(currentValue)

    previousValue = previousValue.toString()
    currentValue = currentValue.toString()

  

}

//rounding number so when u do 1/10000, it wont show 0.00000. it will just show 0
function a(r) {
 return  Math.round(r *1000)/1000
}


//showing decimal on screen
function makeDecimal() {
    if(currentValue !== ".") {
        currentValue+='.'
    }
}