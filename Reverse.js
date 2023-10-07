// Take a sentence as an input and reverse every word in that sentence Example 
// Example - This is a sunny day > shiT si a ynnus yad


function reverseWords(sentence) {
    // Split the sentence into words using space as the delimiter
    const words = sentence.split(' ');

    // Initialize an array to store the reversed words
    const reversedWords = [];

    // Iterate through the words and reverse each one
    for (const word of words) {
        // Reverse the word using a helper function
        const reversedWord = reverseWord(word);
        reversedWords.push(reversedWord);
    }

    // Join the reversed words back into a sentence using space as the separator
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    // Convert the word to an array of characters, reverse it, and join it back into a string
    return word.split('').reverse().join('');
}

// Example usage:
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); 

//Output show in console part of the browser inside the inspect
//Inspect > console
