// Inheritance

// Inheritance is passing down properties and method from parent to child classes

/*

    class Parent{

    }

    class Child extends Parent{

    }



    If Child & Parent have same method,
    Child's method will be used [Method Overriding] 

 */

class Person{
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep")
    }

    work(){
        console.log("do nothing");
    }
}


class Engineer extends Person{
    work(){
        console.log("solve problems, build something");
    }
}

let ashishObj = new Engineer;

console.log(ashishObj.work());   // always child function (Method Override)
console.log(ashishObj.eat());
console.log(ashishObj.sleep());