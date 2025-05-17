/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.

*/

<?php
  
function isVow(array $a): array{
  $vowels = ["a", "e", "i", "o", "u"];
  for($x=0; $x<count($a); $x++) {
    $char = chr($a[$x]);
    if(in_array($char, $vowels)) {
      $a[$x] = $char;
    }
  }
   return $a; // your code here
}