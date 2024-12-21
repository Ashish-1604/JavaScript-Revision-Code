let a = prompt('Enter first number')

let b = prompt('Enter second number')

// let sum = a + b    // -->> concate the string

let sum = parseInt(a) + parseInt(b)

// console.log('The sum is ',sum);

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}

// Handle error

// console.log('The sum is ',sum*x); // throw error

try {
    console.log('The sum is ',sum*x);
    
} catch (error) {
    console.log('Error aagaya bhai');
    
}

