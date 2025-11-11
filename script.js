const startButton = document.getElementById('startbutton')
const timeInput = document.getElementById('timeInput')
const display = document.getElementById('countdownDisplay')

function startTimer(){
    let valueInSecond = parseInt(timeInput.value)
    
    if(isNaN(valueInSecond)) {
        display.innerText = 'Please enter a valid number'
        return
    }

    if(valueInSecond <=0) {
        display.innerText = 'Please enter seconds greater than zero'
        return
    }

    const timer = setInterval(function() {
        valueInSecond--;
        display.innerText = `Time remaining : ${valueInSecond} seconds`
           
        if(valueInSecond <= 0) {
            clearInterval(timer)
            display.innerText = "Time's up!"
        }
        
    }, 1 * 1000)
}


startButton.addEventListener('click', startTimer)