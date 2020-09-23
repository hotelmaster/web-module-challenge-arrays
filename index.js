var originalFlavors = ["Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
   "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",  
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"]

/* Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:

(1) an array 

Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.

To save you from having to count the items above, you can assume that length of originalFlavors is 31. You may also want to test your function by creating and passing an array of a different length, to make sure it returns FALSE if length is not 31. 

i.e. is31Flavors(originalFlavors) will return TRUE.*/

// Define is31Flavors function, pass through the array of strings
function is31Flavors(originalFlavors){
    // if correct length, return true
    if(originalFlavors.length == 31) {
        return true;
    } // Otherwise, return false
    else {
        return false;
    }
}

/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 

Your function should accept:

(1) an array 
(2) a flavor

Your function should add the flavor to the front of the array and console.log the resulting array.

For example addFlavor("Rainbow Sherbert", originalFlavors) should return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"] */ 

// define function and pass through the array and a string variable called flavor
// which will be decided when the function is called and arguments are passed
function addFlavor(originalFlavors, flavor){
    // Add the flavor of choice to beginning of array with .unshift() method
    originalFlavors.unshift(flavor);
    // display the result when function is called/invoked
    console.log(originalFlavors);
}


/* Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array. 

Your function should accept:

(1) an array 

Your function should remove a flavor from the end of the array and console.log the resulting array.

For example removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]*/ 

function removeLastFlavor(originalFlavors){
    // use .pop() array method to remove last array element at index = length - 1
    originalFlavors.pop();
    // display the result
    console.log(originalFlavors);
}

/* Task 4: Write a function that returns a flavor at a given index in the array.

Your function should accept:

(1) an array 
(2) an index

For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */

// define function and pass through parameters
function getFlavorByIndex(originalFlavors, index){
    // return the array element with the given index
    return originalFlavors[index];
}

/* Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, 
           as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from 
           the array. 

Your function should accept: 

(1) an array
(2) a string (flavor)

For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla. 

Hint: You can use .splice() for this

*/

// define function and pass parameters
function removeFlavorByName(originalFlavors, flavor){
    // for-in loop to check for specified flavor only for indices in the array
    for(let index in originalFlavors) {
        // If we find the specified flavor, use the corresponding index to splice it out of the array
        if(originalFlavors[index] == flavor) {
            // splice method will remove the elelment with the given index
            // we are not replacing it with any other flavor
            originalFlavors.splice(index, 1);
            // return the updated array
            return originalFlavors; 
        }
    }
}


/* Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. Write a function called copy that makes a copy of the array. 

Your function should accept: 

2 arguments 1 for your new array and one for your original array

and should return a new array that is identical to the old array. You can name the new array however you'd like. */

function copy(originalFlavors, clonedFlavors){
    // use spread operator to clone contents to new memory location
    clonedFlavors = [...originalFlavors];
    // return the cloned array
    return clonedFlavors;
}

/* Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors.
           Write a function that checks every item in the array for a given string and returns a new array called filteredArray with just these values. 
           Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". This way you 
           could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.

Your function should accept: 

(1) an Array
(2) a string (i.e. "chocolate")

and return a new array. 

For example, filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"].

DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.

hint - you can use the .includes method to help you solve this */

// define function and pass through array and string highlightedFlav
function filterByWord(originalFlavors, highlightedFlav){

    // declare another array to store highlighted flavors
    let filteredArray = new Array();
    // for-in loop to look through the array
    for(let index in originalFlavors) {
        // if any of the array elements contain / include the string passed into this function,
        // then use push method to add them to end of filteredArray
        if(originalFlavors[index].includes(highlightedFlav){
            // use push method to add the flavor to new array
            filteredArray.push(highlightedFlav);
        }
    }
    // return the chosen flavors containing the string
    return filteredArray;
}

/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/ 

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array,
              but can test with originalFlavors.

Your function should accept: 

(1) an array

and should return the average number of words per string item in the array. 

For example, when it is called getAverageWordLength(originalFlavors) should return a number between 0 and 3. */

// my own example function call: console.log(getAverageWordLength(originalFlavors));
// expected outout for originalFlavors array is 2. 

// define function and pass array
function getAverageWordLength(originalFlavors){
    // declare a variable for the number of spaces in a string
    let spaces = 0;
    // variables for number of words in one string, and total words accumulated from beginning of array
    let numWords = 0, totWords = 0;

    // for loop to look through each string flavor
    for(let i = 0; i < originalFlavors.length; i++) {
        // second for loop to search through that specific string
        // it will stop searching once the length of the string is complete
        // i.e. all the indices in the index=i string of the originalFlavors array (ex. originalFlavors[0] = "Banana Nut Fudge" this element has index=0, but the string contains indices 0-14)
        for(let index in originalFlavors[i].length) {
            // if there is a space increment 
            if(originalFlavors[i][index] == " ") {
                space++;
            }
        }
        // no more spaces are in the string
        // and the number of words will always be one more than the number of space ("the cat runs" has 2 spaces so 3 words)
        // need a way to determine how many words in the string
        numWords = spaces + 1;
        // reset spaces to 0 for the next i value (the next string / flavor) in the for loop
        spaces = 0;
        // need to keep a running total of the words in the strings for entire originalFlavors array
        totWords += numWords;
        // reset numWords to 0 for next i value / string / flavor
        numWords = 0;
        // now the first for loop will continue to next i value...
    }
    // after leaving main for loop, we will have the total number of words from each string added to make the totWords value
    // the average number of words per string is given by avg = totWords / 31
    // we can return the calculation without storing it in a new variable
    return Math.round(totWords / 31);
}


/* STRETCH 2: Baskin Robins now offers new flavors, seasonal flavors, and even regional flavors. Write a function that will randomly select a total of 31 flavors from originalFlavors,
              newFlavors, seasonalFlavors, and regionalFlavors.

Your function should accept 4 different arrays,

and should return a new array called randomFlavors with a length 31.

forExample, getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) might return ["Strawberry Cheesecake", "Eggnog,"..."Chocolate"].*/

// Data ⬇️
var newFlavors = ["Date night",
    "U.S.S Butterscotch (Stranger Things special)",
    "Honey Almond",
    "Mint Chocolate Chip",
    "Chocolate",
    "Oreo® Cookies'n Cream",
    "Chocolate Chip",
    "Pralines 'n Cream",
    "Very Berry Strawberry",
    "Chocolate Chip Cookie Dough",
    "Old Fashioned Butter Pecan",
    "Jamoca®",
    "Jamoca® Almond Fudge",
    "Reese's® Peanut Butter Cup",
    "Rocky Road",
    "Peanut Butter ’n Chocolate",
    "Gold Medal Ribbon®",
    "World Class® Chocolate",
    "Cherries Jubilee",
    "Chocolate Fudge",
    "Daiquiri Ice",
    "Rainbow Sherbet",
    "Rainbow Swirl"] 
var seasonalFlavors = ["America's Birthday Cake",
    "Baseball Nut®",
    "Blueberry Cheesecake",
    "Bourbon Street Pecan Pie",
    "Brownie Bar Mashup",
    "Cherry Cordial with Kisses",
    "Chocolate Mousse Royale",
    "French Vanilla",
    "Eggnog",
    "German Chocolate Cake",
    "Icing on the Cake",
    "Love Potion #31",
    "New York Cheesecake",
    "Nutty Coconut",
    "Peppermint",
    "Strawberry Cheesecake",
    "Rock ’n Pop Swirl",
    "Reese’s Peanut Butter Cup",
    "Trick Oreo Treat",
    "Winter White Chocolate",
    "made with Snickers®",
    "made with M&M's®",
    "Heath®",
    "Mango Tango",]
var regionalFlavors = ["Pink Bubblegum",
    "Caramel Macchiato",
    "York Peppermint Pattie",
    "Cotton Candy",
    "Orange Sherbet",
    "Grape Ice",
    "Watermelon Ice",
    "Miami Vice Sorbet",
    "Splish Splash®",
    "Wild 'n Reckless Sherbet",
    "Lemon Custard",
    "Oregon Blackberry",
    "Bananas ‘n Strawberries",
    "Mississippi Mud",
    "Rum Raisin",
    "Creole Cream Cheese",
    "Chocolate Almond",
    "Fudge Brownie",
    "Banana Nut",
    "Black Walnut",
    "Cotton Candy Crackle",
    "Quarterback Crunch",
    "Chocolate Chocolate Chip Cheesecake",
    "Caramel 'n' Cookies"]

function getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors){

    // Need to select random numbers in a range of the indices for each of the 4 arrays.
    // Could choose 31 / 4 = 7 and 3 / 4 = 7.75 flavors from each array.
    // 8 flavors from three of the arrays makes 24 flavors, we need 31 - 24 = 7 remaining
    // flavors from the fourth array.

    // How to choose random numbers in a range?
    // Math.round(Math.random()*[max - min]) + min
    // ex. between 0 and 3: Math.round((Math.random()*(3 - 0)) + 0
    // between 0 and n: Math.round((Math.random()*(n - 0)) + 0
    // or Math.round((Math.random()*n)
    // The value of n will be one less than the length of the array (which are the numbers of indices we are randomly selecting from 0 through one less than the length)

    // need a loop to get about 8 random flavors chosen from each array
    // if we use .push() the first 8 flavors pushed into the randomFlavors array will have indices 0-7
    // the next 8 flavors pushed into the randomFlavors array will have indices 8-15 which is 8 more spots
    // the next 8 flavors will have indices 16-23
    // the last 7 flavors will be 24-30
    // in total this will contain 31 flavors picked randomly from each of the four arrays

    // variable if i want to store the random number first and then use it as an index then it will be easier to read the code
    let randomIndex;

    // for-loop for originalFlavors array.
    // this one will loop 8 times, getting indices 0 through 7 in randomFlavors array
    for(let i = 0; i < 8; i++) {
        // Store the random index value in randomIndex
        randomIndex = Math.round(Math.random()*(originalFlavors.length - 1));
        // use push method to put the random number in the index of originalFlavors array and push the flavor into the new array randomFlavors
        randomFlavors.push(originalFlavors[randomIndex]);
    }
    // for-loop for newFlavors array.
    // this one will loop 8 times, getting indices 8-15 in randomFlavors array 
    for(let i = 0; i < 8; i++) {
        // Same as first for-loop
        randomIndex = Math.round(Math.random()*(newFlavors.length - 1));
        // use push method to put the random number in the index of newFlavors array and push the flavor into the new array randomFlavors
        randomFlavors.push(newFlavors[randomIndex]);
    }
    // for-loop for seasonalFlavors array.
    // this one will loop 8 times
    for(let i = 0; i < 8; i++) {
        // Same as other for-loops
        randomIndex = Math.round(Math.random()*(seasonalFlavors.length - 1));
        // use push method to put the random number in the index of seasonalFlavors array and push the flavor into the new array randomFlavors
        randomFlavors.push(seasonalFlavors[randomIndex]);
    }
    // for-loop for reginalFlavors array.
    // this one will loop 7 times
    for(let i = 0; i < 7; i++) {
        // Same as before
        randomIndex = Math.round(Math.random()*(regionalFlavors.length - 1));
        // use push method to put the random number in the index of regionalFlavors array and push the flavor into the new array randomFlavors
        randomFlavors.push(regionalFlavors[randomIndex]);
    }
    // console.log(randomFlavors);
    // return the randomFlavors array
    return randomFlavors;

}
