var a=0;
var b=0;
var c=0;
var total=0
var per=0;
function marks(){
     a=+prompt("enter")
     b=+prompt("enter")
     c=+prompt("enter")
     total=a+b+c
   alert("total marks : "+ total)
    
 
}
function percentage(){
    per=total/300*100
alert("percentage "+ per)
}
marks()
percentage()

