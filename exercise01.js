// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Phase 0, Week 4
// Exercise 01 : Logic Challenge - Angka Prima
// ----------------------------------------

// Problem :

// Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. 
// Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.
// Code

function angkaPrima(angka) {
  // you can only write your code here!

  var x = 2, prime = true
  while(prime && x<=Math.sqrt(angka)) {
    if (angka%x===0) prime = false
    else x++
  }
  return prime 
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false