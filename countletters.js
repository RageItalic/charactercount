var input = String(process.argv.slice(2));

function countLetters(input){
  var newInput = input.split("").join("").toLowerCase();
    var output = {};
    for(i of newInput){
    output[i] = 0;
      for(j of newInput){
      if (i === j){
      output[i] ++;
      }
      }
  }
  return output;
}
console.log(countLetters(input));
