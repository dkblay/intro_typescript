// class Student {
//     firstName: string;
//     lastName: string;
//     private _dateOfBith: Date;

//     constructor(args) {
//         this.firstName = args.firstName;
//         this.lastName = args.lastName
//     }

//     computeGPA(): number {
//         // Logic goes here
//         return 4.0
//     }

//     get fullname(): string {
//         return `${this.firstName}  + ' ' + ${this.lastName}`
//     }
// }





// class Todo {
//     name: string;
//     completed: boolean;
//     constructor(name: string, completed: boolean = false) {
//         this.name = name;
//         this.completed = completed;
//     }
// }


//// Inheritance
abstract class Person {
    constructor(public firstName: string, public lastName: string) {

    }
}

class Student extends Person {
    getGPA(): number {
        // Implementation 
        return 4.0;
    }
}

let typeScriptStudents = new Student('David', 'Blay')

//////////////////
class Todo {
    static todoCount: number = 0;
    constructor(public name: string, public completed: boolean = false) {
        Todo.todoCount++;
    }

    get count() {
        return Todo.todoCount;
    }
}



export {Todo}