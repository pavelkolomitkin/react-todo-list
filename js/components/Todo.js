window.Todo = React.createClass({
    getInitialState: function () {
        return {
            title: this.props.title,
            isCompleted: this.props.isCompleted,
            editing: false
        };
    },

    checkBoxClick: function () {
        this.setState({isCompleted: !this.state.isCompleted});
    },

    save: function () {

        this.setState({
            editing: false,
            title: this.refs.textInput.value
        });

        this.props.updateHandler(this.state);
    },

    edit: function () {
        this.setState({editing: true});
    },

    deleteAction: function()
    {
        this.props.deleteHandler(this.props.index);
    },

    renderNormal: function () {
        var labelStyle = {
            textDecoration: this.state.isCompleted ? 'line-through' : 'none'
        };

        return (
            <div className="todo">
                <label style={labelStyle}>
                    <input
                        type="checkbox"
                        onClick={this.checkBoxClick}
                        defaultChecked={this.state.isCompleted}
                    />
                    {this.state.title}
                </label>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.deleteAction}>Delete</button>
            </div>
        );
    },

    renderForm: function () {

        return (
            <div className="todo">
                <div>
                    <textarea ref="textInput" defaultValue={this.state.title}></textarea>
                </div>
                <div>
                    <button type="button" onClick={this.save}>Save</button>
                </div>
            </div>
        );
    },

    render: function () {

        if (this.state.editing)
        {
            return this.renderForm();
        }
        else
        {
            return this.renderNormal();
        }
    }
});