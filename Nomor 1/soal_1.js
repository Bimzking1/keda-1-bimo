/*

Soal 1

Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, dimana jika angka tersebut
habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash",
cetak cukup salah satu dari kondisi tersebut, cetak menggunakan console log atau sejenisnya.

*/

function fishBash(amount) {
    
    for (let i = 1; i <= amount; i++) {

        let result

        if (i % 15 === 0) {
            result = 'fish bash'
        } else if (i % 5 === 0) {
            result = 'bash'
        } else if (i % 3 === 0) {
            result = 'fish'
        } else {
            result = i
        }
        
        console.log(result)
    }
}

const amount = 15
console.log(fishBash(amount))

module.exports = fishBash;