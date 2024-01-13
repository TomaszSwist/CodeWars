// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

// function isPrime(num) {
//     //TODO
//   }

function isPrime(number) {
    if (number < 2) {
        return false
    } else if ( number == 2 || number == 3 ) {
        return true
    } else if ( number % 2 == 0 || number % 3 == 0){
        return false
    } else {
        for (let i = 5; i * i <= number ; i += 6) {
            if (number % i === 0 || number % (i + 2) == 0) {
                return false
            }
        }
    }
    return true
  }