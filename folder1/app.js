// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false;
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }

// same([1,2,3,2], [9,1,4,4])

// function ana(arr1, arr2){
//     var arrayc = {};
//     let countof={};
//         if(arr1.length !== arr2.length){
//             return false;
//         }
//         for(let i = 0; i < arr1.length; i++){
//             let letter = arr1[i];
//             arrayc[letter] ? arrayc[letter] += 1 : arrayc[letter] = 1;
//         }
//         console.log(arrayc);
//             for(let j = 0 ; j < arr2.length; j++){
//                 let letter = arr2[j];
//                 if (!arrayc[letter]){
//                     return false;
//                 }else{
//                     arrayc[letter] -=1;
//                 }
//             }
//             return true;
//         }

//   ana('nope', 'nopid');
//   ana('rat', 'art');
//   ana('anagr', 'grana');

// function validAnagram(first, second) {
//     if (first.length !== second.length) {
//       return false;
//     }

//     const lookup = {};

//     for (let i = 0; i < first.length; i++) {
//       let letter = first[i];
//       // if letter exists, increment, otherwise set to 1
//       lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     console.log(lookup)

//     for (let i = 0; i < second.length; i++) {
//       let lettera = second[i];
//       // can't find letter or letter is zero then it's not an anagram
//       if (!lookup[lettera]) {
//         return false;
//       } else {
//         lookup[lettera] -= 1;
//       }
//     }

//     return true;
//   }

//   // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
//   validAnagram('anagrams', 'nagaramm')
//   validAnagram('rat', 'art')

function ana(array1, array2) {
  let arrayal = {};
  if (array1.length != array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    let letra = array1[i];

    arrayal[letra] ? (arrayal[letra] += 1) : (arrayal[letra] = 1);
  }
   console.log(arrayal);

  for (let j = 0; j < array2.length; j++) {
    let letraj = array2[j];
    if (!arrayal[j]) {
      return false;
    } else {
      arrayal[letraj]--;
    }
  }
}

  ana('anagrams', 'nagaramm')
  ana('rat', 'art')