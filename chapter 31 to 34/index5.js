var date=new Date();
var day=date.getDate();
if(day<=15){
    alert("first fifteen days of month")
}
else if(day>15){
    alert("the last days of month")
}