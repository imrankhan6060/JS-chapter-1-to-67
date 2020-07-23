var pass="yetohoga"
var typepass=prompt("enter your passsword");
if( typepass===pass){
    alert("Correct The password you entered matches the original password");
}
else if ( typepass===""){
    alert("Please enter your password");
}
else{
    alert("your password is incorrect");
}