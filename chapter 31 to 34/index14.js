var name=prompt("enter customer name");
var month=prompt("enter name of month");
var unit=+prompt("enter number of Units");
var charges=16;
document.write("<BR> CUSTOMER NAME : "+name);
document.write("<BR> MONTH NAME : "+month);
document.write("<BR> Number of units : "+unit);
document.write("<BR> Charges per units : "+charges);
document.write("<BR> Net amount pay able with due date : "+(unit*charges));
document.write("<BR> Late payment surcharges : "+350);
document.write("<BR> Gross amount payable after due date: "+(unit*charges+350))