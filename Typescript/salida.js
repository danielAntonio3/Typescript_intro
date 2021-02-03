var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var User = /** @class */ (function () {
    function User(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    User.prototype.register = function () {
        console.log("El usuario " + this.name + " esta registrado");
    };
    User.prototype.showMeEge = function () {
        return this.age;
    };
    User.prototype.ageInYear = function () {
        return this.age + " a\u00F1os";
    };
    return User;
}());
//const daniel = new User('Daniel',22,'daniel@correo.com');
//console.log(daniel.name);
//daniel.register();
//console.log(daniel.ageInYear());
// * ------------------------------------------------------------------------------------------------------------------
// * HERENCIA
var Merber = /** @class */ (function (_super) {
    __extends(Merber, _super);
    function Merber(id, name, email, ege) {
        var _this = 
        // ! INDICAR QUE SON DE LA CLASE QUE HEREDA
        _super.call(this, name, email, ege) || this;
        _this.id = id;
        return _this;
    }
    Merber.prototype.Registro = function () {
        _super.prototype.register.call(this);
    };
    return Merber;
}(User));
var reno = new Merber(45, 'reno', 'reno@correco.com', 22);
reno.Registro();
// * ------------------------------------------------------------------------------------------------------------------
