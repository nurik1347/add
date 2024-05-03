let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')
let number = document.querySelector('.number')
let besh = document.querySelector('.besh')
let on = document.querySelector('.on')
let yuz = document.querySelector('.yuz')


let Num = 0

let Change = () => {
    number.innerHTML = Num
}

Change()
minus.addEventListener('click', () => {
    --Num
    Change()
})

plus.addEventListener('click', () => {
    ++Num
    Change()
})

besh.addEventListener('click', () => {
    Num *= 5
    Change()
})

on.addEventListener('click', () => {
    Num *= 10
    Change()
})
yuz.addEventListener('click', () => {
    Num *= 100
    Change()
})





