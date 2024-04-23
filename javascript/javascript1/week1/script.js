// Age-ify (A future age calculator)
const yearOfBirth = 1990;
const yearFuture = 2030;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

// Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2030;
let dogYear = dogYearFuture - dogYearOfBirth;
let typeOfYears = "human"; // Default type of years set to "human"

// Determine whether to show the result in dog years or human years
const shouldShowResultInDogYears = true; //change this to false if you want to see results in human years
if (shouldShowResultInDogYears) {
    dogYear *= 7;
    typeOfYears = "dog";
}
console.log(
    "Your dog will be " +
        dogYear +
        " " +
        typeOfYears +
        " years old in " +
        dogYearFuture
);
