
// hoisting
console.log(addition(5,23));

//test = "this is a test";
//let test;

// a scope
{
    console.log("1,2,3 ")
}




function addition(a,b ) {
    return a+b;
 }


//console.log(addition(2,6));
// alternative 
//var sum = addition(2,6);

function introduce() {
    console.log("nice to meet you");
}

const greet = function() {
    console.log("hi, how are you doing");
}


function findPerson(whatToDoAfterFindingAPerson) {
    console.log("spotted a person!")
    whatToDoAfterFindingAPerson();
}
findPerson(greet);

//do something else.. not introduce

const me = {
    hobby: "sleeping"
}

const aboutMe = (me) => {
    console.log("my hobby is", me.hobby);
}


aboutMe(me);


const anotherExample = {
    myFavoriteFunction:() => {
        console.log("this function is my favorite in the world");
    }
}


anotherExample.myFavoriteFunction();


// create an arrow function that is called callingLater
// that takes the function calling as an argument

const calling = ( name ) => {
    return "ring ring ring to " + name;
};

const callingLater = (name, calling) => {
    console.log(calling(name));
}

callingLater("Bob", calling);

function lastThing() {
    function thisIsPossibleInJavascript() {
        console.log("A OK");
    }
    thisIsPossibleInJavascript();
}
lastThing();
