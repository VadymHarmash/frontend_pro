const currentYear = new Date().getFullYear();

const userYearOfBirth = prompt('Enter your year of birth');
const userCity = prompt('Enter your city');
const userFavouriteSport = prompt('Enter your favourite sport');

userYearOfBirth ? console.log(`Your age is ${currentYear - userYearOfBirth} or ${currentYear - userYearOfBirth - 1}`) : console.log(`I don't know your age :(. It is sad that you did not specify the year of birth`);

if (!userCity) {
    console.log(`I don't know your city :(. It is sad that you did not specify it`);
} else if (userCity === 'Washington') {
    console.log(`You are living in the capital of United States`);
} else if (userCity === 'London') {
    console.log(`You are living in the capital of Great Britain`);
} else if (userCity === 'Kyiv') {
    console.log(`You are living in the capital of Ukraine`);
} else {
    console.log(`You are living in ${userCity}`);
};

if(!userFavouriteSport) {
    console.log(`I don't know your favourite sport :(. It is sad that you did not specify it`)
} else if (userFavouriteSport === 'Soccer') {
    console.log(`Cool! Do you want to be like Andriy Shevchenko?`);
} else if (userFavouriteSport === 'Boxing') {
    console.log(`Cool! Do you want to be like Olexander Usyk?`);
} else if (userFavouriteSport === 'Basketball') {
    console.log(`Cool! Do you want to be like Lebron James?`);
} else {
    console.log(`You are like ${userFavouriteSport}`);
};