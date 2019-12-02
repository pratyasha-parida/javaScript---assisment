let seconds = 0;
let minutes = 0;
let hours = 0;
//to hold display value
let displaysecons = 0;
let displayminutes =0;
let displayhours = 0;
function stopWatch() {
    seconds++;

    if(seconds/60 === 1) {
        seconds = 0;
        minutes++

        if(minutes/60 === 1) {
            minutes = 0;
             hours++
        }
    }
    document.getElementById('display').innerHTML = hours + "1" + minutes + "1"+ seconds
}
window.setInterval(stopWatch,1000)