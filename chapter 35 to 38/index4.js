function calculate(num1,oper,num2){
if(oper==="+"){
    document.write("the sum of "+num1+" and "+num2+" is : "+(num1+num2));
}
else if(oper==="-"){
    document.write("the subtraction of "+num1+" and "+num2+" is : "+(num1-num2));

}
else if(oper==="*"){
    document.write("the multiplication of "+num1+" and "+num2+" is : "+(num1*num2));
}
else if(oper==="/"){
    document.write("the division of "+num1+" and "+num2+" is : "+(num1/num2));
}

return(num1,oper,num2)

}
calculate(+prompt("enter first num"),prompt("enter operator"),+prompt("enter second num"));
