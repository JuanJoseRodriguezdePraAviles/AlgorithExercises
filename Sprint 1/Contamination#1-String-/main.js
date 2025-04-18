/*
An AI has infected a text with a character!!

This text is now fully mutated to this character.

Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.
*/

function contamination(originalText, character) {
    if(originalText === null || originalText === undefined || originalText.length === 0 || character === null || character === undefined || character.length === 0 || character.length > 1) {
        originalText = '';
    } else {
        let letters = originalText.split("");
        originalText = '';
        console.log(letters);
        for (let i = 0; i < letters.length; i++) {
            originalText += character;
        }
    }
    return originalText;
}