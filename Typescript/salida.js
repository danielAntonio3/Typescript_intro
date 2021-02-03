// * TYPES
var myString = "hello word";
var myNumber = 22;
var myBoolean = true;
var myVar = "hello";
//document.write(myNumber.toString());
// * ------------------------------------------------------------------------------------------------------------------
// * ARRAYS
// ? DE TIPO string ARREGLOS
var stringArray = ["ITEM1", "ITEM2", "ITEM3"];
// ? DE TIPO number ARREGLOS
var numberArray = [1, 2, 3];
// ? DE TIPO boolean ARREGLOS
var booleanArray = [true, false, false];
// ? DE TIPO ANY ARREGLOS
var anyArray = [1, "ITEM2", true, [], {}];
// * ------------------------------------------------------------------------------------------------------------------
// * TUPLE
var strNumTuple;
strNumTuple = ["hello", 10];
// * ------------------------------------------------------------------------------------------------------------------
// * VOID, NULL, UNDEFINED
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
//document.write(typeof(myVoid));
// * ------------------------------------------------------------------------------------------------------------------
// * FUNCIONES
// ? FUNCION QUE RECIBE DOS NUMEROS
function sum(num1, num2) {
    return num1 + num2;
}
// ? FUNCION QUE PUEDE RECIBIR UN NUMERO O UN STRING
var mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
//console.log(mySum("2",2));
// ! SI PASAS UN NOMBRE DE PARAMETRO CON EL SIGNO ? ES OPCIONAL
function getName(firstName, lastName) {
    if (lastName === undefined) {
        return "" + firstName;
    }
    else {
        return firstName + " " + lastName;
    }
}
//console.log(getName("Daniel"));
// ? FUNCION QUE NO RETORNA NADA
function myVoidFunction() {
    return;
}
// * ------------------------------------------------------------------------------------------------------------------
// * INTERFACES
// ? FUNCION QUE RECIBE UN OBJETO
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
// ? FUNCION QUE OCUPA UNA INTERFAS
function showTodo2(todo) {
    console.log(todo.title + " - " + todo.text);
}
/*showTodo2({
    title: "typescript",
    text: "Angular"
});*/
// ? USANDO LA INTERFACE EN UNA VARIABLE
var myTodo = { title: "hola", text: "mundo" };
//showTodo2(myTodo);
// * ------------------------------------------------------------------------------------------------------------------
// * CLASES
var user = /** @class */ (function () {
    function user() {
    }
    return user;
}());
// * ------------------------------------------------------------------------------------------------------------------
