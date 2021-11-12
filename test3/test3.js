// BEFORE

// function findFirstStringInBracket(str) {
//   if (str.length > 0) {
//     let indexFirstBracketFound = str.indexOf("(");
//     if (indexFirstBracketFound >= 0) {
//       let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
//       if (wordsAfterFirstBracket) {
//         wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
//         let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
//         if (indexClosingBracketFound >= 0) {
//           return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
//         } else {
//           return "";
//         }
//       } else {
//         return "";
//       }
//     } else {
//       return "";
//     }
//   } else {
//     return "";
//   }
// }

// After

function findFirstStringInBracket(str) {
  // Assuming valid str argument should have at least "(", ")", and random string
  if (str.length <= 2) {
    return "";
  }

  // Get index of "(" and ")"
  let indexFirstBracketFound = str.indexOf("(");
  let indexClosingBracketFound = str.indexOf(")");

  // Checking whether "(" and ")" found in the str argument
  if (indexFirstBracketFound < 0 || indexClosingBracketFound < 0) {
    return "";
  }

  // reaching here means that str arguments are valid and string is available
  return str.substring(indexFirstBracketFound + 1, indexClosingBracketFound);
}

console.log(findFirstStringInBracket("(abc)"));
console.log(findFirstStringInBracket(")"));
console.log(findFirstStringInBracket("(def"));
console.log(findFirstStringInBracket("()"));
console.log(findFirstStringInBracket("(g)"));