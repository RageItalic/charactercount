var input = String(process.argv.slice(2));

function countLetters(input){
  var newInput = input.split("").join("").toLowerCase();
    var output = {};
    for(i of newInput){
    output[i] = [];
      for(var j = 0; j < newInput.length; j++){
      if (i === newInput[j]){
      output[i].push(j);
      }
      }
  }
  console.log(output);
}
countLetters(input);