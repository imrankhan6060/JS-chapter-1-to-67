var priceit1=+prompt("enter the price of iteam 1  ");
document.write("<br> the price  of itam 1 is = " +priceit1);
var itamqn1=+prompt("enter the quantity of an itam 1 = ")
document.write(" <br> the quantity  of itam 1 is = " +itamqn1);
var priceit2=+prompt("enter the price of iteam 2");
document.write("<br> the price  of itam 2 is = " +priceit2);
var itamqn2=+prompt("enter the quantity of an itam 2");
document.write("<br> the quantity  of itam 2 is = " +itamqn2);
var shipingch=+prompt("enter the shiping charges  ")
document.write("<br> the shiping charges  of order is =  " +shipingch);
document.write("<br>Total cost of your order is = "
+( (priceit1*itamqn1)+(priceit2*itamqn2)+shipingch));
