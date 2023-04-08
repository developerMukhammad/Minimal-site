
const button1 = document.querySelector('.btn')
const button2 = document.querySelector('.bitn')
const button3 = document.querySelector('.tog')
const Wleft = document.querySelector('.window-left')
const Wright = document.querySelector('.window-right')
const remove = document.getElementById('remove')


button1.addEventListener('click', () => {
    Wleft.classList.add('left')
    Wright.classList.add('right')
    button1.classList.add('btn-color')
    button2.classList.remove('btn-color')
    button3.classList.remove('btn-color')
})

button2.addEventListener('click', () => {
    Wleft.classList.remove('left')
    Wright.classList.remove('right')
    button1.classList.remove('btn-color')
    button2.classList.add('btn-color')
    button3.classList.remove('btn-color')
})

button3.addEventListener('click', () => {
    Wleft.classList.toggle('left')
    Wright.classList.toggle('right')
    button1.classList.remove('btn-color')
    button2.classList.remove('btn-color')
    button3.classList.add('btn-color')
})

remove.addEventListener('click', () => {
    button1.classList.remove('btn-color')
    button2.classList.remove('btn-color')
    button3.classList.remove('btn-color')
})