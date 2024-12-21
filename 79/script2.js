// finally clause in try-catch

// finally block always work after try or catch block

let a = prompt('Enter first number')

let b = prompt('Enter second number')


let sum = parseInt(a) + parseInt(b)


if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}

function main(){
    let x = 1

    try {
        console.log('The sum is ',sum*x);
        return true
        
    } catch (error) {
        console.log('Error aagaya bhai');
        return false
        
    }finally{
        console.log('files are being closed and db connection are being closed');    
    // it always work in function after return too        
    }
}

let c = main()
console.log(c);


