var temp=+prompt("enter the marks you obtain in 3 subjects");
\

if(temp>40){
    document.write("<br> its to hot");
    
}
else if( temp > 30 && temp <40){
    document.write("<br> The Weather today is Normal.");

}
else if( temp > 20 && temp < 30){

    document.write("<br> Today’s Weather is cool");
}
else if( temp<10){
    document.write("<br> OMG! Today’s weather is so Cool.");
}