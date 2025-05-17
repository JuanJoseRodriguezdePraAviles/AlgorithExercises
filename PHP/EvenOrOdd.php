/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/
<?php

function even_or_odd(int $n): string {
  if($n % 2 == 0)
    return "Even"; // Your code here
  else {
    return "Odd";
  }
}