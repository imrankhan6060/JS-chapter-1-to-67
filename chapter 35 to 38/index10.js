function palindrome() {
    var text=prompt("enter the string")
   
    var reversedText  = text.toLowerCase()
                        .split('').reverse().join('');
    
    
    if(reversedText===text)
    alert("it is palindrom")
    else
    alert("it is not palindron")
}
palindrome()