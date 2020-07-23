var date=new Date();
var day=date.getHours();
if(day>=12){
    alert("its PM")
}
else if(day<12){
    alert("its AM")
}