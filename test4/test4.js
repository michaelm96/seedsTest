let arr = [
    "kita",
    "atik",
    "tika",
    "aku",
    "kia",
    "makan",
    "kua",
  ];
  
  let mainArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    // inner array
    let innerArr = [];
    for (let j = i + 1; j < arr.length; j++) {
      // Just in case need to turn main word into string
  
      // if(typeof arr[i] !== String) {
      //   arr[i] = arr[i].toString()
      // }
      // if(typeof arr[j] !== String) {
      //   arr[j] = arr[j].toString()
      // }

      // spliting words
      let arr1 = arr[i].split("");
      let arr2 = arr[j].split("");

      // check if the splitted main word and side word have same length
      if (arr1.length === arr2.length) {
        // iterate over splited main word
        for (let k = 0; k < arr1.length; k++) {
          // iterate over splited side word
          for (let l = 0; l < arr2.length; l++) {
            if (arr1[k] === arr2[l]) {
              // if the char of splited main word and side word match, change them to "-" as marking, so it won't be counted again
              arr1[k] = "-";
              arr2[l] = "-";
            }
          }

          // when reach the end of character of splited main word push the main word to innerArr array
          if (arr1.join("") === arr2.join("") && k === arr1.length - 1) {
            // as long it doesn't equal to !, which is another marking
            if (arr[i] !== "!" && arr[j] !== "!") {
              innerArr.push(arr[j]);
            }
            // change the side word to !, so the side word won't be push to innerArr array that will be pushed to newArray
            arr[j] = `!`;
          }
        }
      }

      // when the main word iteration reached the last element of side word
      if (j === arr.length - 1) {
        // and the main word doesn't equal to !, push to first position in innerArr
        if (arr[i] !== "!") {
          innerArr.unshift(arr[i]);
        }
        // change the main word to !, so the main word won't be push to innerArr array that will be pushed to newArray
        arr[i] = "!";
      }
    }

    // checking if the word doesn't include anywhere in innerArr array, and the main word isn't equal to ! (which is a marking)
    if (!innerArr.includes(arr[i]) && arr[i] !== "!") {
      // push the main word to innerArr array
      innerArr.push(arr[i]);
    }
    // if innerArr doesn't equal to empty push to main arr
    if (innerArr.length) {
      mainArr.push(innerArr);
    }
  }
  
  console.log(mainArr);