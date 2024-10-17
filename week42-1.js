/*
    Hi.
    This is a set of practice exercises.
    The purpose is to focus on a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    DO NOT change any code that is provided unless the task specifically says so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    Create a function that returns an array of length m-n, 
    n is the min value. 
    m is the max value. 
    if n = 5 and m is 10 the returned array sholuld be [5,6,7,8,9]
    Use loops and arrays to achive the goal. 
*/

//#region Task A
addSpacing(1);
console.log("Task: A");

function createArray(n, m) {
    let result = [];

    for (let i = n; i < m; i++) {
        result.push(i);
    }
    return result;
}


print(createArray(5, 10));
//#endregion

/* -----------------------------------------------------------------------------
    Task: B
    Create two arrays using your function from task a.
    first array n = 5, m = 11
    second array n = 8, m = 23
    
    Create a function that combines the two arrays into one, but no duplicate values. 
    Use for loops
*/

//#region Task B
addSpacing(1);
console.log("Task: B");

function combineArrays(array1, array2) {
    let combinedSet = new Set([...array1, ...array2]);

    return Array.from(combinedSet);
}

let array1 = createArray(5, 11);
print("First Array: " + array1);

let array2 = createArray(8, 24);
print("Second Array: " + array2);

let combinedArray = combineArrays(array1, array2);
print("Combined Array: " + combinedArray);
//#endregion

/* -----------------------------------------------------------------------------
    Task: C
    Following you will find an alphabet a encrypted text and a shift value. 
    The message is encrypted using a cesar chipher https://en.wikipedia.org/wiki/Caesar_cipher 
    Create a function that 
    - Takes three parameters message, alphabet and shift 
    - Creates the key based on the alphabet and the shift value. 
    - decrypts and returns the message.
    Use arrays and for loops. 
*/

//#region Task C
addSpacing(1);
console.log("Task: C");
const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
const message = "ckrr jutk"
let shift = 6

function decryptMessage(message, alphabet, shift) {
    let decryptMessage = '';
    let alphabetArray = alphabet.split('');

    for (let i = 0; i < message.length; i++) {
        let char = message[i];

        if (char === ' ') {
            decryptMessage += ' ';
        } else {
            let charIndex = alphabetArray.indexOf(char);
            let newIndex = (charIndex - shift + alphabetArray.length) % alphabetArray.length;

            decryptMessage += alphabetArray[newIndex];
        }
    }

    return decryptMessage;
}

let decryptedMessage = decryptMessage(message, ALPHABET, shift);
print("Decrypted Message: " + decryptedMessage);
//#endregion

/* -----------------------------------------------------------------------------
    Task: D

    You are given a list of numbers.
    Write a function that takes the list and a target sum as input parameters
    The function is then to figure out what two numbers in the list that summed makes the provided sum.

    Example:
    [3,2,6,9]
    target 9
    -> [3,6]

*/

//#region Task D
addSpacing(1);
console.log("Task: D");

const numbers = [1, 23, 14, 56, 42, 33, 0, 3];
const target = 36;

function findSumInList(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {

            if (numbers[i] + numbers[j] === target) {
                return [numbers[i] + ", " + numbers[j]];
            }
        }
    }
}

let result = findSumInList(numbers, target);
print("Pair that sums to target: " + result);
//#endregion

/* -----------------------------------------------------------------------------
    Task: E
    Create a function that takes a number as inputt and returns the number of digits in that number. 
    123 -> 3
    2 -> 1
    42693 -> 5
*/

//#region Task E
addSpacing(1);
console.log("Task: E");

function countDigits(number) {
    return Math.abs(number).toString().length;
}

print(countDigits(123));
print(countDigits(2));
print(countDigits(42693));
//#endregion

//#region Util functions

function print(text) {
    console.log(text);
}

function addSpacing (lines = 1) {
    for (let i =0; i < lines; i++){
        print("")
    }
}

//#endregion 