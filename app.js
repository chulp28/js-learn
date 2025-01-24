console.log(findAll(10, 3))



function findAll(sum, digit) {
  let [num, store, sorted] = [[], [], []]
  genNums(digit, num, store)

  for (let i = 0; i < store.length; i++) { if(store[i].reduce((digitSum, digitValue) => digitSum + digitValue, 0) == sum) sorted.push(store[i]) }
  return (sorted.length) ? [sorted.length, sorted.at(0).join(''), sorted.at(-1).join('')] : []
}

function genNums(digit, num, store, i = 0, k = 1) {
  if (i >= digit) store.push(num.slice());
  else {for (let j = k; j < 10; j++) { num[i] = j; if (i < digit) genNums(digit, num, store, i + 1, k), k++}};
}

























































//function findAll(sum, count) {
//  let ceil = 10**count
//  let [minNum, maxNum, counter] = [-1, 0, 0]

//  findMin: for (let i = ceil/10; i < ceil; i++) {
//    let str = String(i).split('')
//    let sort = String(i).split('').sort().join('')

//    if (str.includes('0') || str.join('') != sort) continue findMin;
//    if (str.reduce((redSum, value) => +redSum + +value, 0) != sum) continue findMin;
//    minNum = i; break
//  }

//  if (minNum == -1) return []

//  loop: for (let i = minNum; i < ceil; i += 9) {
//    let str = String(i).split('')
//    let sort = String(i).split('').sort().join('')
    
//    if (str.includes('0') || str.join('') != sort) continue loop;
//    if (str.reduce((redSum, value) => +redSum + +value, 0) != sum) continue loop;
//    maxNum = i; counter++;
//  }

//  return (counter != 0) ? [counter, String(minNum), String(maxNum)] : []
//}