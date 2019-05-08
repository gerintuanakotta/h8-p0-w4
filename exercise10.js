// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Phase 0, Week 4
// Exercise 10 : Logic Challenge - Change Me!
// ----------------------------------------

// Problem :

// Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana 
// array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth 
// Year. Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan 
// age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau 
// tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

// Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] 
// maka output:

//     Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
//     John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }

// Code

function changeMe(arr) {
  // you can only write your code here!
  var x = ''
  for ( var i = 0 ; i < arr.length ; i ++ ) {
    
    console.log((i+1)+'. '+arr[i][0]+' '+arr[i][1])
    var obj = { 
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
    }

    if (typeof arr[i][3] === 'string') {
      arr[i][3]=Number(arr[i][3])
    }
    if (!arr[i][3]||arr[i][3]===NaN) obj.age = 'Invalid Birth Year'
    else obj.age = 2019-arr[i][3]
    console.log(obj)
    x += (i+1)+'. '+arr[i][0]+' '+arr[i][1] + '\n'
    x += obj + '\n'
  } 
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""