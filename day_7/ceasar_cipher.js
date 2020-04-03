/*Also known as a shift cipher, the Ceasar Cipher is one of the oldest and simplest encoding techniques.
A Ceasar Cipher works by shifting the alphabet by a set number of letters down the alphabet.
 For example, with a left shift of 3, 'D' would be replaced by 'A', 'E' would be replaced by 'B', and so on.
 See below for a full alphabet example with a left shift of 3:

```
plain:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
cipher: XYZABCDEFGHIJKLMNOPQRSTUVW
```

Create a file named `caesar_cipher.js` and within that file, write a program that will take any string,
and encode it based on a shift value provided by the user.
The interaction pattern for this program might look something like this:



```javascript
var cipher = new CeasarCipher();
cipher.encode("Hello World", 5); //should log "CZGGJ RJMGY"
```
*/

var cipher = {
    a: 't', b: 'u', c: 'v', d: 'w', e: 'x', f: 'y',
    g: 'z', h: 'a', i: 'b', j: 'c', k: 'd', l: 'e',
    m: 'f', n: 'g', o: 'h', p: 'i', q: 'j', r: 'k',
    s: 'l', t: 'm', u: 'n', v: 'o', w: 'p', x: 'q',
    y: 'r', z: 's'
};

  var encode = 'Hello World';
  for(var i = 0 ; i < cipher.length; i++){
    
    encode += decoded[cipher[i]];
  }


  console.log(encode);
