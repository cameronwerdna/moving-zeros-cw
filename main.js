//function take an arr, and returns a new arr with any zeros moved to the end.
function moveZeros(arr) {
    let noZeros = []
    let zeros = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeros.push(arr[i])
      } else {
        noZeros.push(arr[i])
      }
    }
    return noZeros.concat(zeros)
  }


console.log(moveZeros([1,0,0,2,3,4])) // => [ 1, 2, 3, 4, 0, 0 ]
console.log(moveZeros([45,4,{},7,34,0,[],4,0,20000])) // => [45, 4, {}, 7, 34, [], 4, 20000, 0,  0]
console.log(moveZeros([0,0,2,3,4,0,77])) // => [2, 3, 4, 77, 0, 0, 0]