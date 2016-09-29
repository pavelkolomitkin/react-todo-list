window.TodoList = React.createClass({

    getInitialState: function () {
        return {
            todos: [
                {
                    title: 'First todo',
                    isCompleted: true
                },
                {
                    title: 'To buy book',
                    isCompleted: false
                },
                {
                    title: 'Make dinner',
                    isCompleted: false
                },
                {
                    title: 'Make breakfast',
                    isCompleted: true
                }
            ]
        };
    },

    deleteHandler: function (index) {

        var todo = this.state.todos[index];
        console.log("Deleting todo: '" + todo.title + "'");

        delete this.state.todos[index];
        this.setState(this.state);
    },

    updateHandler: function (todo, index) {
        this.state.todos[index] = todo;
        this.setState(this.state);
    },

    render: function () {
        var self = this;

        return (
            <div className="todo-list">
                {

                    this.state.todos.map(function(todo, index){
                        return (
                            <Todo
                                key={index}
                                index={index}
                                deleteHandler={self.deleteHandler}
                                updateHandler={self.updateHandler}
                                title={todo.title}
                                isCompleted={todo.isCompleted}
                            />
                        )
                    })
                }
            </div>
        );
    }
});