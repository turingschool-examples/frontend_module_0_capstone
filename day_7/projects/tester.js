class Cipher {
    constructor(str, num) {
        this.str = str;
        this.num = num;


    }

    mystery(str, num) {
        for (var i = 0; i < this.str.length; i++) {
            var alphabet = "abcdefghijklmnopqrstuvwxyz"
            alphabet = alphabet.split("");

            var encodedStr = " ";
            
            var currentLetter = this.str[i];

            if (currentLetter === " ") {
                encodeStr += currentLetter;
                continue;
            }

            var currentIndex = alphabet.indexOf(currentLetter);

            var encodedIndex = currentIndex + this.num;

            if (encodedIndex > 25) {
                encodedIndex = encodedIndex - 26;
            }

            if (encodedIndex < 0) {
                encodedIndex = encodedIndex + 26;
            }

            if (this.str[i] === this.str[i].toUpperCase()) {
                encodedStr += alphabet[encodedIndex].toUpperCase();
            } else
                encodedStr += alphabet[encodedIndex].toUpperCase();
        }
    }
}

var myCipher = new Cipher("This is a test.", 2);
console.log(myCipher);

myCipher.mystery();