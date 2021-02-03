
// * TYPES
const myString : string = "hello word";
const myNumber : number = 22;
const myBoolean : boolean = true;
const myVar: any ="hello";
    
//document.write(myNumber.toString());
    
// * ------------------------------------------------------------------------------------------------------------------
    


// * ARRAYS
// ? DE TIPO string ARREGLOS
const stringArray : string[] =["ITEM1","ITEM2","ITEM3"];

// ? DE TIPO number ARREGLOS
const numberArray : number[] = [1,2,3];

// ? DE TIPO boolean ARREGLOS
const booleanArray : boolean[] = [true,false,false];

// ? DE TIPO ANY ARREGLOS
const anyArray : any[] = [1,"ITEM2",true,[],{}];

// * ------------------------------------------------------------------------------------------------------------------

// * TUPLE

let strNumTuple: [string,number];
    strNumTuple = ["hello",10];

// * ------------------------------------------------------------------------------------------------------------------

// * VOID, NULL, UNDEFINED

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

//document.write(typeof(myVoid));
// * ------------------------------------------------------------------------------------------------------------------

// * FUNCIONES

// ? FUNCION QUE RECIBE DOS NUMEROS
function sum(num1: number,num2: number): number{
    return num1+num2;
}

// ? FUNCION QUE PUEDE RECIBIR UN NUMERO O UN STRING
let mySum = function(num1: number | string, num2: number | string ): number{
    if(typeof(num1) === 'string' ){
        num1 = parseInt(num1);
    }

    if(typeof(num2) === 'string'){
        num2 = parseInt(num2);

    }

    return num1 +num2;

}
//console.log(mySum("2",2));

// ! SI PASAS UN NOMBRE DE PARAMETRO CON EL SIGNO ? ES OPCIONAL
function getName(firstName: string,lastName?: string): string {
    if(lastName === undefined){
        return `${firstName}`;
    }else{
        return `${firstName} ${lastName}`;
    }
}

//console.log(getName("Daniel"));

// ? FUNCION QUE NO RETORNA NADA
function myVoidFunction():void{
    return ;
}
// * ------------------------------------------------------------------------------------------------------------------


// * INTERFACES

// ? FUNCION QUE RECIBE UN OBJETO
function showTodo(todo:{title: string; text: string; }){
    console.log(`${todo.title} - ${todo.text}`);
}
/*
showTodo({
    title: "typescript",
    text: "Angular"
});*/

// ! CREACION DE UNA INTERFAS
interface ITodo{
    title: string;
    text: string;
}
// ? FUNCION QUE OCUPA UNA INTERFAS
function showTodo2(todo: ITodo){
    console.log(`${todo.title} - ${todo.text}`);
}
/*showTodo2({
    title: "typescript",
    text: "Angular"
});*/

// ? USANDO LA INTERFACE EN UNA VARIABLE
const myTodo: ITodo = {title:"hola", text:"mundo"};
//showTodo2(myTodo);

// * ------------------------------------------------------------------------------------------------------------------
// * CLASES

class user{
    name: string;
    email: string;
    age: number;

}

// * ------------------------------------------------------------------------------------------------------------------


