window.App = React.createClass({

    onAddNewTodoHandler: function (todo)
    {
        this.refs.todoList.addNew(todo);
    },

    render: function () {
        return (
            <div className="application">
                <div>
                    <h1>TODO List</h1>
                </div>
                <TodoList ref="todoList" />
                <TodoForm addHandler={this.onAddNewTodoHandler} />
            </div>
        );
    }
});