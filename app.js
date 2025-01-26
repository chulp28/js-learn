//console.log(encodeRLE("aabbbccccc")); // "a2b3c5"
//console.log(encodeRLE("aaaaaaaaax")); // "a10x"

console.log(decodeRLE("a4b6c3")); // "aaaabbbbbbccc"
console.log(decodeRLE("a10b2")); // "aaaaaaaaaabb"
console.log(decodeRLE("abc")); // "abc"
console.log(decodeRLE("abc11")); // "abccccccccccc"


function encodeRLE(str) {
  let [result, lastChar, repeats] = [[], '', 0]
  
  for (let i = 0; i < str.length; i++) {
    if (lastChar == '') lastChar = str[i], repeats++;
    else {
      if (lastChar == str[i]) repeats++;
      else result.push(lastChar, repeats), lastChar = str[i], repeats = 1;
      if (i == str.length - 1) result.push(lastChar, repeats);
  }}
  return result.filter((value) => value != 1).join('')
}



function decodeRLE(str) {
  let result = str.split()
  let num = []
  let num
}