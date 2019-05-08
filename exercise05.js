// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Phase 0, Week 4
// Exercise 05 : Logic Challenge - Ubah Huruf
// ----------------------------------------

// Problem :

// Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. Functiona 
// akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. 
// Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.
// Code

function ubahHuruf(kata) {
  // you can only write your code here!
  var library = 'abcdefghijklmnopqrstuvwxyza', result = ''

  for (var i = 0; i < kata.length ; i ++) {
    for (var j = 0; j < library.length-1 ; j ++) {
      if (kata[i]===library[j]) result += library[j+1]
    }
  }
  return result
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu