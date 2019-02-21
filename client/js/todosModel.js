angular.module('todosModel', [])
.factory('todosService', function() {
    const todos = [];
    const todosSet = new Set();
    const addTodo = function(todo) {
        if (!todosSet.has(todo)) {
            todos.push(todo);
            todosSet.add(todo);
        }
    };
    const removeTodo = function(todo) {
        if (todosSet.delete(todo)) {
            todos.splice(todos.findIndex(item => item === todo), 1);
        }
    }
    const renameTodo = function(oldName, newName) {
        if (todosSet.delete(oldName)) {
            todos[todos.findIndex(item => item === oldName)] = newName;
            todosSet.add(newName);
        }
    }
    return {
        todos,
        addTodo,
        removeTodo,
        renameTodo
    }
});