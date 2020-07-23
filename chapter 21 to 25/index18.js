var temp = "The quick brown fox jumps over the lazy dog.<br>";
document.write("TEXT "+temp)
var b=temp.toLowerCase()
var count = (b.match(/the/g) || []).length;
document.write("there are "+count+" occurrences of word 'the'")

