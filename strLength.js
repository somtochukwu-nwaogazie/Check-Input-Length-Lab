const strLen = (input) =>{
  let checkLen = [];
  if (input instanceof String) {
    checkLen.push(input.length);
  }else if (input instanceof Array){
     for (word in input){
       checkLen.push(input[word].length);
     }
  } 
  return checkLen;
}

console.log(strLen(['Fairy', 'tale']));