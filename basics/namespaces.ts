namespace TodoAPP {
    export class Todo {
        static todoCount: number = 0;
        constructor(public name: string, public completed: boolean = false) {
            Todo.todoCount++;
        }

        get count() {
            return Todo.todoCount;
        }
    }
}