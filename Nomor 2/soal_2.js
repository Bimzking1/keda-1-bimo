/*

Soal 2

Buatlah fungsi dengan input array integer untuk mengurutkan angka
dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,

*/

function sortAscending(input) {
    for (let i = 0; i < input.length; i++ ) {
        for (let j = 0; j < input.length; j++) {
            if (input[j] > input[i]) {
                let temp = input[i]
                input[i] = input[j]
                input[j] = temp
            }
        }
    }
    return input
}

function sortDescending(input) {
    for (let i = 0; i < input.length; i++ ) {
        for (let j = 0; j < input.length; j++) {
            if (input[j] < input[i]) {
                let temp = input[i]
                input[i] = input[j]
                input[j] = temp
            }
        }
    }
    return input
}

const input = [5, 3, 2, 1, 4, 6, 7]
console.log(sortAscending(input))
console.log(sortDescending(input))

module.exports = { sortAscending, sortDescending }