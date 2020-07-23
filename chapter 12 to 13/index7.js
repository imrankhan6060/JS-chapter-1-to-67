var time=+prompt("enter time ");
if(time > 0 && time < 12){
    alert("GOOD morning ");
}
else if( time > 12 && time < 15){
    alert("Good Afternoon");
}
else if(time >= 15 && time < 21){
    alert("Good evining");
}
else if(time >= 21 && time < 24){
    alert("good night");
}

