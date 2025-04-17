/*
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
*/
function mergeArrays(a, b) {
    // your code here
    const finalArray = [...a, ...b];
    const unique = [...new Set(finalArray)];
    unique.sort((x,y) => x - y);
    return unique;
}