// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

const largestPrimeFactor= (number) => {
    let i = 2;
    while(i <= number) {
        if(number % i === 0){
            number /= i;
        }else{
            i++;
        }
    }
    return i;

}

let sampleFactor = 600851475143;
let sampleFactor2 = 13195;

console.log(largestPrimeFactor(sampleFactor));
console.log(largestPrimeFactor(sampleFactor2));