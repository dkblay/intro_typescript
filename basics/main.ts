import {Todo} from './classes';


const todo1 = new Todo('Start Learning TypeScript');
const todo2 = new Todo('Start Learning Angular 2');

console.log(`Total Number of Todos is ${Todo.todoCount}`); //2



//////////////

/// <reference path="namespaces.ts" />

let todo = new TodoAPP.Todo('My first Todo');