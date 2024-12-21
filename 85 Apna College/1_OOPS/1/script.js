// JS object is an entity having state and behavior (properties and method)
// JS object have a special property called prototype
// We can set Prototype using __proto__

const student = {
    fullName : "Ashish Sonawane",
    marks : 94.4,
    printMarks : function(){
        console.log("marks: "+ this.marks); // student.marks
    }
}



const employee = {
    calTax1(){
        console.log("tax rate is 10%");
    },

    calTax2 : function(){
        console.log("tax rate is 10%");
    }
}

const karanArjun = {
    salary : 50000
}

// console.log(karanArjun.calTax1) // undefined

karanArjun.__proto__ = employee

console.log(karanArjun.calTax1)

const karanArjun2 = {
    salary : 50000,
    calTax1(){
        console.log("tax rate is 20%")
    }
}

karanArjun2.__proto__ = employee;

console.log(karanArjun2.calTax1()) // run calTax1() function of KaranArjun object

