window.TodoForm = React.createClass({

    getInitialState: function () {
        return {
            text: ''
        }
    },

    onAddButtonClick: function () {
        var newText = this.refs.inputText.value;
        this.setState({text: ''});

        this.props.addHandler(
            {
                title: newText,
                isCompleted: false
            });
    },
    render: function ()
    {
        return (
            <div>
                <form>
                    <div>
                        <input type="text" ref="inputText" placeholder="Title..." defaultValue={this.state.text} />
                    </div>
                    <div>
                        <input type="button" onClick={this.onAddButtonClick} value="Add" />
                    </div>
                </form>
            </div>
        );
    }
});