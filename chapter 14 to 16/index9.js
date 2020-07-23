var arr=['red','blue','yellow'];
document.write("<br>"+ arr);
var arr2=prompt("which colour you want to add in biging");
arr.unshift(arr2);
document.write("<br>"+ arr);
var arr3=prompt("which colour you want to add in the end");
arr.push(arr3);
document.write("<br>"+ arr);

arr.unshift(prompt("add two colors in biging"));
arr.unshift(prompt("add two colors in biging"));
document.write("<br>"+ arr);
arr.shift();
arr.pop();
