let arr = [2, -8, 5, -1, 2, -3, 2]
console.log(getMaxSubSum(arr))

function getMaxSubSum(inputArray) {
  // variables for calculations
  let sumHeap = []
  let indexHeap = []
  let indexBuffer = []
  let sum = 0
  let sub = 0
  let flipped = false

  // func to calculate sums and store then if they less than subs
  let calculateSums = function() {
    if (sum && sum > sub) {
      flipped = false;
      sum -= sub; sub = 0;
    } else if (sum && sum <= sub){
      flipped = false;
      indexHeap.push(Object.assign([], indexBuffer));
      indexBuffer.length = 0;
      sumHeap.push(sum);
      sum=0; sub=0;
    } else {
      flipped = false;
      sub = 0;
    }
  }
  // main loop for handling sums and subs
  for (let index = 0; index < inputArray.length; index++) {
    let value = inputArray[index];

    if (value > 0) {
      if (flipped) {
        calculateSums()
      }
      indexBuffer.push(index)
      sum += value;
    }
    if (index == (inputArray.length-1)) {
      indexHeap.push(Object.assign([], indexBuffer));
      indexBuffer.length = 0;
      sumHeap.push(sum);
      sum=0; sub=0;
    }
    if (value <= 0) sub += Math.abs(value), flipped=true;
  }

  // taking best sum
  let bestSum = sumHeap[0];
  let bestSumIndex = 0;
  for (let i = 0; i < sumHeap.length; i++) {
    if (sumHeap[i] > bestSum) bestSum = sumHeap[i], bestSumIndex = i;
  }

  console.log(sumHeap);
  console.log(indexHeap);
  return bestSum;
}