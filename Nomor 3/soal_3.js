/*

Soal 3

Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama
dengan string yang diinputkan maka return true jika tidak return false

*/

function reverseString(string) {
    
    let reversed = "";
    string = string.toLowerCase()

    for (let i = string.length-1; i >= 0 ; i--) {
        reversed += string[i];
    }
   
    if (string === reversed) {
        return true;
    } else {
        return false;
    }
}

console.log(reverseString("atta"));
console.log(reverseString("halilintar"));

module.exports = reverseString