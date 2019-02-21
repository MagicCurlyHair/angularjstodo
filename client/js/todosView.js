angular.module('todosView', ['todosModel'])
.controller('todosController', ['todosService', function(todosService) {
    this.todos = todosService.todos;
    this.newTodo = '';
    this.selectedTodo = '';
    this.selectedNewName = '';
    this.addTodo = function($event) {
        $event.preventDefault();
        todosService.addTodo(this.newTodo);
        this.newTodo = '';
    };
    this.selectTodo = function(todo) {
        this.selectedTodo = todo;
        this.selectedNewName = todo;
    }
    this.removeTodo = function($event, todo) {
        $event.stopPropagation();
        todosService.removeTodo(todo);
    }
    this.renameTodo = function(oldName, newName) {
        todosService.renameTodo(oldName, newName);
        this.selectedTodo = '';
    }
}]);