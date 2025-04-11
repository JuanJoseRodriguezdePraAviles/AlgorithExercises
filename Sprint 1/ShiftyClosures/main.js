/*
Functional closures can get overly attached. Set them straight!

Why doesn't greetAbe() actually greet Abe?
*/

let name = 'Abe'

const greetAbe = () => {
  let name='Abe'
  return 'Hello, ' + name + '!'
}

name = 'Ben'

const greetBen = () => {
  let name='Ben'
  return 'Hello, ' + name + '!'
}