window.App = React.createClass({
    render: function () {
        return (
            <div className="application">
                <div>
                    <h1>TODO List</h1>
                </div>
                <TodoList />
            </div>
        );
    }
});