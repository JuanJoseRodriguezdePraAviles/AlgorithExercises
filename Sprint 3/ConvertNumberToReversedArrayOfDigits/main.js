/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]

*/
function digitize(n) {
    //code here
    res = Array.from(String(n))
    res.reverse();
    for(let i=0; i< res.length; i++) {
      res[i] = Number(res[i]);
    }
    return res;
  }