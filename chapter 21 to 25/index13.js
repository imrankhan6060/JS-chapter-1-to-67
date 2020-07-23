var text=prompt("enter your name")
for (var i = 0; i < text.length; i++) {
     if (text.charAt(i) === ("!","@",".")) {
     alert("Please enter a valid user name");
     }
    }