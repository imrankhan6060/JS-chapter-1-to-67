var marks=+prompt("enter the marks you obtain in 3 subjects");
var totalMarks=300;
var per=(marks/totalMarks *100)
document.write("<br> Total marks : "+totalMarks);
document.write("<br> marks obtain" + marks);
document.write("<br> percentage : "+per);
if(per>=80){
    document.write("<br> Grade A");
    document.write("<br> exelent");
}
else if( per>= 70 && per<80){
    document.write("<br> Grade b");
    document.write("<br> remarks good");
}
else if( per>= 60 && per < 70){
    document.write("<br> Grade c");
    document.write("<br> need to be improve");
}
else if( per<60){
    document.write("<br> sorry you are fail");
}
