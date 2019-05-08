// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Phase 0, Week 4
// Exercise 15 : Logic Challenge - Highest Score
// ----------------------------------------

// Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi dari setiap class:

// Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

// {
//   <class>: { name: <name>, score: <score> },
//   <class>: { name: <name>, score: <score> },
//   <class>: { name: <name>, score: <score> }
// }

function highestScore (students) {
  // Code disini
  var result = {}
  for (var i = 0 ; i < students.length ; i++) {
    if (!result[students[i].class]) {
      result[students[i].class] = {
        name : students[i].name,
        score : students[i].score
      }
    } else if (students[i].score>result[students[i].class].score) {
      result[students[i].class] = {
        name : students[i].name,
        score : students[i].score
      }
    }
  }
  return result
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}