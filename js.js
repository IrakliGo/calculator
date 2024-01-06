let currentValue =''
let previousValue = ''
let operator = ''
document.addEventListener('DOMContentLoaded', () => {
//connect to them

let previousScreen = document.querySelector('.previous')
let currentScreen = document.querySelector('.current')
let numbers = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.operator')
let clear = document.querySelector('.clear')
let equal = document.querySelector('.equal')
let decimal = document.querySelector('.decimal')

numbers.forEach((number) => number.addEventListener('click', (e) => {
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue
}))

operators.forEach((op) => op.addEventListener('click', (e) => {
    handleOperator(e.target.textContent)
    previousScreen.textContent = previousValue + operator
    currentScreen.textContent =''
}))


clear.addEventListener('click', () => {
    previousValue=''
    currentValue=''
    currentScreen.textContent =''
    previousScreen.textContent =''
    operator =''
})


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

decimal.addEventListener('click', () => {
    makeDecimal()
})
})

function handleNumber(n) {
    if(currentValue.length<=5) {
        currentValue+=n
    }
 
}

function handleOperator(p) {
operator = p
previousValue = currentValue
currentValue =''
}

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


function a(r) {
 return  Math.round(r *1000)/1000
}


function makeDecimal() {
    if(currentValue !== ".") {
        currentValue+='.'
    }
}