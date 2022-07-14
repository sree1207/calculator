const display = document.querySelector(".display")

function buttonClick(val) {
    if(val === '='){
        display.value = eval(display.value)
    }
    else if(val === 'ac'){
        display.value = ''
    }
    else if(val === 'del'){
        display.value = display.value.slice(0, -1)
    }
    else {
        display.value += val
    }
}
 