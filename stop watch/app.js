var min = 5;
var sec = 59;
var timer;

function abc(timer){
    console.log(min)
    console.log(sec--)
    if(sec < 1){
        sec = 10;
        min--;
    }
    if(min < 1){
        clearInterval(timer);
    }
}

timer = clearInterval();