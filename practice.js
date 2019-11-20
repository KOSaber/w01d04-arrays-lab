// 1. Using `push` and `unshift`, make this array contain the numbers from zero through seven:

// ```js
const arr = [2, 3, 4];

arr.unshift(1);
arr.unshift(0);
arr.push(5);
arr.push(6);
arr.push(7);

console.log(arr); // => [0, 1, 2, 3, 4, 5, 6, 7]

// 2. What is *returned* by `push`? Before throwing this into the console, form a hypothesis 
//about what you think the return value will be:

// ```js
const arr = [5, 7, 9];
arr.push(6); // returns ???
console.log(arr.push(6)); // <---- it will return the number of items inside the array

// 3. Change all numbers to be those numbers multiplied by two:
// ```js
const numbers = [4, 9, 7, 2, 1, 8];

for(i=0; i<numbers.length ; i++){
   
       numbers[i]= numbers[i] * 2

}

console.log(numbers); // => [8, 18, 14, 4, 2, 16]

// 4. Change all **odd** numbers to be those numbers multiplied by two:
// ```js
const numbers = [4, 9, 7, 2, 1, 8];

for(i=0; i<numbers.length ; i++){
   if( numbers[i] % 2 !== 0){
       numbers[i]= numbers[i] * 2
   }

}

console.log(numbers);// => [4, 18, 14, 2, 2, 8]

// 5.  Create an array to hold your favorite colors.  For each choice, 
// log to the screen a string like: `My #1 choice is blue.`

// ```js
var myColors = ["blue","pink","yellow","white"]
for(i=0; i<myColors.length ; i++){
    console.log("My # " + (i+1) + "choice is " + myColors[i]);
}

// 6.  Create an array of ages.  Loop through and log only the ages that are over 21.
var ages= [12,22,33,11,10,2,null]
for(i=0; i<ages.length ; i++){
    if( ages[i]> 21){
        
        console.log(ages[i]);
    }
    
}

// 7.  Starting with an empty array called `rainbowColors`:

//     * Add "orange" to the end of the array
//     * Add "red" to the start of the array
//     * Add "yellow" to the end
//     * Add "green", "blue", "indigo", and "violet" to the end of the array
//       * Try and do this using _one_ method
//     * Print the length of the array
//     * Print the second item
//     * Print the last item (make this flexible/dynamic!)
//     * Print the index of the string "blue"

var rainbowColors = []
rainbowColors.push("orange")
rainbowColors.unshift("red")
rainbowColors.push("yellow")
rainbowColors.push("green", "blue", "indigo","violet")
console.log(rainbowColors.length)
console.log(rainbowColors[1])
console.log(rainbowColors[rainbowColors.length-1])
console.log(rainbowColors.indexOf("blue"))

// 8. Find out the difference between `.slice` and `.splice`
//     * Create an array called `twoColors` using one method - don't change the `rainbowColors`
//      array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
//     * Starting with this array `var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];`,
//      remove the duplicates *destructively* using _slice_ or _splice_ (whichever one is appropriate)

var twoColors = []
var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];










// 9. Work with arrays of arrays
//     * Starting with this array `var arrOfArrs = [["inner array first item", "inner array second item"],
//      ["first", "second", "third"]];`
//     * Access "inner array first item" and print it out"
//     * Print "third" by using a dynamic index

      
      var arrOfArrs = [["inner array first item", "inner array second item"],
      ["first", "second", "third"]];

      console.log(arrOfArrs[0][0])
      //console.log(arrOfArrs[arrOfArrs.length-1][arrOfArrs.length-1.length-1])
      console.log(arrOfArrs[arrOfArrs.length-1][arrOfArrs[arrOfArrs.length-1].length-1])


// 10. Work with arrays of arrays
//     * Starting with this array `var arrOfArrs = [["inner array first item", "inner array second item"],
//      ["first", "second", "third"]];`
//     * Add an array inside the second array with a bolleen value"
//     * Print the new added array 
 
var arrOfArrs = [["inner array first item", "inner array second item"],
      ["first", "second", "third"]];

      arrOfArrs[1].push(["true","false"])
      console.log(arrOfArrs[1][3])



// 11. Create an array to hold your top five choices of something (music, books, movies, whatever).

//     - For each choice, log to the screen a string like: "My #1 choice is blue."

var topCh = ["movies", "music", "sleep", "travil", "dance"];
console.log("My #1 choice is " + topCh[0])
console.log("My #2 choice is " + topCh[1])
console.log("My #3 choice is " + topCh[2])
console.log("My #4 choice is " + topCh[3])
console.log("My #5 choice is " + topCh[4])

// - **Bonus:** Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right 
//     suffix for the number based on what it is.

var topCh = ["movies", "music", "sleep", "travil", "dance"];
console.log("My #1 choice is " + topCh[0] + " My #2 choice is " + topCh[1] +
" My #3 choice is " + topCh[2]  + " My #4 choice is " + topCh[3] + " My #5 choice is " + topCh[4])
