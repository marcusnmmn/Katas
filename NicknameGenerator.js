var text = "Robbert"
var vowels = ["a", "e", "i", "o", "u"]

text.length

for (let i = 0; i < vowels.length; i++) {
    if (text.charAt(3) == vowels[i]) {
        console.log(text.slice(0,4))
    }
    else
    {
        console.log(text.slice(0,3))
    }
};