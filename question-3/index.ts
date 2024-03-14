// // //City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// // "Lahore, Pakistan"

// // Call your function with at least three city-country pairs, and print the value that’s returned.

// //City Names: Formatting city-country pairs.

// Explain & TIP: Returning formatted strings from functions can simplify data presentation. This exercise practices string formatting and returning values from functions.

//solution.
//Write a function called city_country() that takes in the name of a city and its country.
function city_country(city:string,country:string){
//The function should return a string formatted like this:
// // "Lahore, Pakistan"
return`${city},${country}`
}

//Call your function with at least three city-country pairs, and print the value that’s returned.
console.log(city_country("DUBAI","UNITED ARAB EMIRATES"));
console.log(city_country("MARYLAND","USA"));
console.log(city_country("MADINA","SAUDI ARABIA"));