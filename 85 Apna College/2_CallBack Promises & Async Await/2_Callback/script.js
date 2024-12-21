function sum(a,b){
    console.log(a+b);
}

function calculator(a, b, sumCallBack){
    sumCallBack(a, b);
}

calculator(1, 2, sum);

/*
Callback Hell

Callback Hell: Nested callback stacked below one another forming a pyramid structure.
(Pyramid of Doom)

This style of programming becomes difficult to understand and manage.
 */