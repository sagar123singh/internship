//unanswered questions
//Q.1.write binary search tree and reverse it.
//Q.2.check singly linked list is palindromic or not
//Q.3. Print numer in the form of pyramid
//Q.4 Print longest substring.


//-----Reverse given sentence by words-------//
function reverse(str) {
    if (str.length == 0) return ""
    return reverse(str.slice(1)) + str[0]     // my name is rohan 
}                                             //                eman ym
function reversedSentence(sent) {
    words = sent.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = reverse(words[i])
    }
    return words.join(" ")
}

//console.log(reversedSentence("my name is rohan")) //'my name'

//-------------rotate array cyclicaly---------------//

function rotate(arr, k) {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        let shiftIndex = (i + k) % arr.length
        //1+4 = 5 % 7 = 5
        temp[shiftIndex] = arr[i]
    }
    return temp
}

//console.log(rotate([1,2,3,4,5,6,7],3))

//-------------------------palindrom-------------------------------------//

function isPalindrom(str) {
    str = str.toLowerCase()
    if (str.length <= 1) return true
    for (let i = 0; i < str.length; i++) {
        if (str[0] === str.slice(-1))
            return isPalindrom(str.slice(1, -1))

    }
    return false
}
//console.log(isPalindrom('Madam'))

//-------------------------------------find duplicate  element--------------------------//

function duplicateElement(arr) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i]) === undefined) {
            map.set(arr[i], 1)
        } else {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    let result = []
    for (let item of map) {
        if (item[1] > 1) {
            result.push(item[0])
        }
    }
    return result
}

//console.log(duplicateElement([1,1,1,1,1,2,2,2,3,4,5,6,6,6,7]))

//------------------------count number of (number) ----------------//

function counting(arr, num) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num)
            count++
    }
    return count
}

//console.log(counting([1,1,1,1,1,1,1,2,3,4,1,5,6,1],5))

//----------------------------palindrom-------------------------------//

function isPalindrom(str) {
    str = str.toLowerCase()

    if (str.length <= 1) return true
    if (str[0] === str.slice(-1))
        return isPalindrom(str.slice(1, -1))
    return false

}

//console.log(isPalindrom('Madam'))

//--------------------------------------factorial-----------------------------//
function factorial(num) {
    if (num === 1) return 1
    return num * factorial(num - 1)
}
//console.log(factorial(5))

//-------------------------flattening-----------------------------------//

function flattening(arr) {
    let flat = []
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i])
        if (Array.isArray(arr[i]) === false) {
            flat.push(arr[i])
        }
        flat = flat.concat(flattening(arr[i]))
    }
    return flat
}

//console.log(flattening([1,2,3,4,[2,3,4,[3,4,5,[1,2,3],[1,2]],[2,3]]]))

//---------------------------------duplicate array--------------------//key : value

function duplicate(arr) {
    let map = new Map()
    let result=[]
    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i]) === undefined) {
            map.set(arr[i], 1)
            result.push(arr[i])
        } else {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    // let result = []
    // for (let item of map) {
    //     if (item[1] > 1) {
    //         result.push(item[0])
    //     }
    // }
    return result
}

// console.log(duplicate([1,1,1,1,1,1,2,2,2,3,4,5,66,6,6,7,8]))

//--------------------------maximum sum of two element---------------------------------//


function maxTwoSum(arr) {
    let largest = -Infinity
    let secondLargest = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }
    return [largest, secondLargest]
}

//console.log(maxTwoSum([1,2,3,9,3,5,7,4,8]))

//--------------------find squre root of number without using inbuilt method----------------------//

// function squareroot(number) {
//     var number;
//     for (var i = number; i >= 1; i--) {  //64 
//         if (i * i === number) {
//             number = i;
//             break;
//         }
//     }
//     return number;
// }

// console.log(squareroot(25))

//-------------------------merge two arrays--------------------------------------//

function mergeTwoArrays(arr1, arr2) {
    let result = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j])
            j++
        } else {
            result.push(arr1[i])
            i++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result
}

//console.log(mergeTwoArrays([1,2,3],[2,4,5,6,7,8]))

//-------------------------------------------find maximum and minimum count without using operator-------------------//

// function minAndMax(arr) {
//     let map = new Map()
//     let min = Infinity
//     let max = 1
//     for (let i = 0; i < arr.length; i++) {
//         if (map.get(arr[i]) === undefined) {
//             map.set(arr[i], 1)
//         } else {
//             map.set(arr[i], map.get(arr[i]) + 1)
//         }
//     }
//     for (let item of map) {
//         if (item[1] > max) {
//             max = item[1]
//         }
//         if (min > item[1]) {
//             min = item[1]
//         }
//     }
//     return [min, max]
// }

// console.log(minAndMax([1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4]))

//-------------------------------------------------merde sort for single array---------------------------------------------------//

function mergeSortTopToDown(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
    //console.log(left,'..............')
    //console.log(right,'rrrrrrrrrr')
    return merging(mergeSortTopToDown(left), mergeSortTopToDown(right));  ////using recursion

}

// function merging(left,right){                                          [5,4,6,2,9,1]
//     const arr= [];                                         [5,4,6]                     [2,9,1]

//     while(left.length && right.length){                 [5,4]         [6]        [2,9]           [1]
//         if(left[0] < right[0]) {
//             arr.push(left.shift())                   [5]      [4]     [6]      [2]      [9]      [1]
//             //console.log(arr,'>>>>>>>>>>>>>>>..')  --------------------------------------------------
//         }else{                                         
//             arr.push(right.shift())
//         }
//     }
//     return arr.concat(left.slice()).concat(right.slice()); 
// }
function merging(left, right) {
    let result = []
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (right[j] > left[i]) {
            result.push(left[i])
            i++;

        } else {
            result.push(right[j])
            j++;
        }
        console.log(result)
    }
    while (i < left.length) {
        result.push(left[i])
        i++;
    }
    while (j < right.length) {
        result.push(right[j])
        j++;
    }

    return result
}

//console.log(mergeSortTopToDown([5,4,6,2,9,1]))

//--------------------------------------------------square-root function without using inbuilt function--------------------------------//
function squareroot(num, left, right) {

    while (true) {
        let mid = (left + right) / 2
        let mult = mid * mid
        if (mult === num || (Math.abs(mult - num) < 0.00001)) {
            return mid
        } else if (mult > num) {
            right = mid
        } else {
            left = mid
        }
    }
}


function perfectSquare(num) {
    let found = false
    let i = 0
    while (found === false) {
        if (i * i === num) {
            found = true
            console.log(i)
        } else if (i * i > num) {
            let res = squareroot(num, i - 1, i)
            console.log(+res.toFixed(5))
            found = true
        }
        i++
    }
}
//perfectSquare(66)

//------------------------------------------binary search-----------

function binarySearch(arr, num) {
    let left = 0
    let right = arr.length - 1
    let mid = parseInt((left + right) / 2)
    while (left <= right && arr[mid] !== num) {
        if (arr[mid] > num) {
            right = mid - 1
        } else {
            left = mid + 1
        }
        mid = parseInt((left + right) / 2)
    }
    return arr[mid] === num ? mid : -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9],1))

//-------------------------------merge two arrays and sort them in increasing order --------------------------------------//

let arr1 = [1, 3, 5, 7]
let arr2 = [2, 4, 6, 8]
function merging(arr1, arr2) {
    let i = 0
    let j = 0
    let result = []
    while (i < (arr1.length) && (j < arr2.length)) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j])
            j++
        } else {
            result.push(arr1[i])
            i++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result
}
//console.log(merging(arr1, arr2))

//-------------------------------------palindrom----------------------------------------------//

function ppalindrom(str) {
    str = str.toLowerCase()
    if (str.length <= 1) return true
    if (str[0] === str.slice(-1))
        return ppalindrom(str.slice(1, -1))
    return false
}

//console.log(ppalindrom('Madamm'))

//------------------------------make array empty-----------------------------//
function emptyArray(arr = []) {
    if (arr.length === 0) return arr
    return emptyArray(arr.slice(1))
}

//console.log(emptyArray([1,2,3,4,5,6]))

//------------------------------ shift all zero's towards right of array ------------------------

function pushZerosToEnd(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++)
        if (arr[i] != 0) {
            arr[count++] = arr[i];
        }
    while (count < arr.length) {
        arr[count++] = 0;
    }
    return arr
}
let arr = [1, 3, 0, 2, 0, 0, 4, 0, 5, 0, 6, 0]

//console.log(pushZerosToEnd(arr))

//------------------- split without using inbuilt function -----------------------------------

function splitStr(str) {
    let result = []
    let tempStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            tempStr += str[i]
        } else if (tempStr.trim()) {
            result.push(tempStr)
            tempStr = ""
        }
    }
    return result
}
//console.log(splitStr("i am learning backend technologies"))

//-------------------- remove duplicates without inbuilt function ------

function removeDup(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }
    let result = []
    for (let key in obj) {
        if (obj[key] > 1) {
            result.push(key)
        }
    }
    return result
}
//console.log(removeDup(['cat','cat','cat','cat','mat','bat','bat']))

//-----------------------------------split sentence without using inbuilt function -----------------------------//

const splitString = (str) => {
    let resultArray = [];              //1
    let tempString = '';               //2
    for (var i = 0; i < str.length; i++) {
        //3
        if (str[i] !== ' ') {            //4
            tempString += str[i];
            //5
        } else if (tempString.trim()) {
            resultArray.push(tempString)
            //console.log(resultArray)  ;//6
            tempString = "";
            //7
        }
    }
    return resultArray;                //8
}

//console.log(splitString('I am rohan kesarkar '))

//------------------------------------ return matching element candidate ----------------------------//

const candidates = [
    {
        name: 'user1',
        skills: ['reactjs', 'redux', 'nodejs', 'mongodb']
    },
    {
        name: 'user2',
        skills: ['reactjs', 'redux', 'nodejs']
    },
    {
        name: 'user3',
        skills: ['java', 'redis', 'kafka']
    }
]
const required_skills = ['reactjs', 'redux']




//console.log(obj)

//------------------------------------- return sum without using for loop --------------------------------//

function sum(arr) {
    if (arr.length === 0) return 0
    return arr[0] + sum(arr.slice(1))
}
//console.log(sum([1,2,3,4,5,6,7,8,9,10]))

// -------------------------------------- reverse an array ------------------------------------//

function reverseArr(arr) {
    let i = 0
    let j = arr.length - 1
    while (i < j) {
        arr[i] = arr[i] + arr[j]
        arr[j] = arr[i] - arr[j]
        arr[i] = arr[i] - arr[j]
        i++
        j--
    }
    return arr
}
//console.log(reverseArr([1,2,3,4,5,6,7,8,9]))

//------------------- sort the array -----------------------------------//
function sortArr(arr) {
    for (let i = 1; i < arr.length; i++) {
        while (i >= 1 && arr[i - 1] > arr[i]) {
            [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
            i--
        }
    }
    return arr
}
//console.log(sortArr([2,4,6,8,1,3,5,7,9]))

//----------------------- max sum from array window ----------------------------//

function maxSum(arr, k) {
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += arr[i]
    }
    let newSum = sum
    for (let i = k; i < arr.length; i++) {
        newSum += arr[i] - arr[i - k]
        sum = Math.max(newSum, sum)
    }
    return sum
}
//console.log(maxSum([4,4,9,9,9,5,6,7,2,1],3))

//------------------------- find missing number ------------------------//

function findNumber(arr) {
    let max = Math.max(...arr)
    let actualSum = max * (max + 1) / 2
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let missing_number = actualSum - sum
    return missing_number
}
//console.log(findNumber([1,2,3,5,6,7,8,9]))

function oddStartMissing(arr) {
    let min = Math.min(...arr)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] - min + 1
    }
    let missing_number = findNumber(arr)
    return missing_number + min - 1
}
// console.log(oddStartMissing([4,5,6,8,9]))

//------------------------------palindrom------------------------------------//

function checkPalindrom(str) {
    str = str.toLowerCase()
    if (str.length <= 1) return true
    if (str[0] === str.slice(-1))
        return checkPalindrom(str.slice(1, -1))
    return false
}
//console.log(checkPalindrom('Madamm'))

//-------------------------------filter numbers greater than 5-----------------

function greaterThan(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            result.push(arr[i])
        }

    }
    return result
}
//console.log(greaterThan([1,2,6,7,9,8,1,5,40]))

//-----------------------------------------  ------------
var a = 'world'
function abc() {
    var a = 'hello'
    return function xyz() {
        //console.log(a)
    }
}
let x = abc()
x()

//--------------------- write multiply without using * operator and for loop------------//

function multiplyWithoutFor(num1, num2) {
    if (num2 === 0) return 0
    return num1 + multiplyWithoutFor(num1, num2 - 1)
}
//console.log(multiplyWithoutFor(10,4))

//-------------------------find distinct pair whose sum is equal to target ------------------------------//

function countDistinctElement(arr, sum) {
    const elemSet = new Set()
    const seenSet = new Set()

    let count = 0
    for (let i = 0; i < arr.length; i++) {
        const nextValue = sum - arr[i]
        if (elemSet.has(nextValue) && !seenSet.has(arr[i])) {
            count++
            seenSet.add(nextValue)
            seenSet.add(arr[i])
            // console.log(seenSet)
            // console.log(elemSet)
        }
        elemSet.add(arr[i])
    }
    return count
}
//console.log(countDistinctElement([1,2,3,4,5,6,8,7,7,10],10))

//---------------------------- matrix spreading ----------------//

function matrix(matrix) {
    let result = []
    let left = 0
    let right = matrix[0].length - 1
    let top = 0
    let bottom = matrix.length - 1
    let direction = 'right'
    while (left <= right && top <= bottom) {
        if (direction === 'right') {
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i])
            }
            top++
            direction = 'down'
        }
        else if (direction === 'down') {
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right])
            }
            right--
            direction = 'left'
        }
        else if (direction === 'left') {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i])
            }
            bottom--
            direction = 'up'
        }
        else if (direction === 'up') {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left])
            }
            left++
        direction = 'right'
        }
        
    }
  return result

}
//console.log(matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

//---------------------------- print prime number till 100 -------------------------------------//
function primeOrNot(num){
    for(var i=2; i<num; i++)
        if(num % i === 0) return false;
        return true
    
}
//console.log(primeOrNot(17))

function countPrime(n){
    let count = 0
    let num = 2
    while(count < n){
        if(primeOrNot(num)){
            count++
            console.log(`${count} prime number is ${num}`)
        }
        num++
    }
}
//countPrime(10)

//--------------------------print numbers in the form of pyramid--------------

function pyramid(arr){
    let result = []
    for(let i=0; i<arr.length; i++){
        result.push(arr[i])
        console.log(...result)
    }

}
//pyramid([1,2,3,4,5,6])

//-------------------Quick sort ---------------------------//

function quickSort(array){
//erite your code here
if(array.length === 1) return array

const pivot = array[array.length - 1]
const leftArr = []
const rightArr = []

for(let i = 0; i<array.length - 1; i++){
    if(array[i] > pivot){
        rightArr.push(array[i])
    }else{
        leftArr.push(array[i])
    }
}
//console.log(leftArr,rightArr)
if(leftArr.length > 0 && rightArr.length > 0){
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}else if(leftArr.length > 0){
    return [...quickSort(leftArr), pivot]
}else{
    return [pivot, ...quickSort(rightArr)]
}

//don't write code below this line

}
//console.log(quickSort([1,6,8,2,5,4,9,3,7]))



