/** @jsx React.DOM */
var React = require('react/addons');

var Name = React.createClass({
    mixins : [React.addons.LinkedStateMixin],
    getInitialState : function () {
        return {
            name : "",
            showName : false
        }
    },
    showName : function () {

        // Have to use setState instead of this.state.showName because setState will cause
        //  render to be re-fired
        this.setState({
            showName : true
        })
    },
    render : function () {
        return (
            <div>
                <label>Enter Name:</label>
                <input type="text" valueLink={this.linkState('name')} />
                <button className="btn btn-primary" onClick={this.showName}>Say Hello</button>
                {this.state.showName ? <p>Hello, {this.state.name}.  Welcome to React.  Its currently using Browserify but soon it will be using ES6</p> : ''}


            </div>
        )
    }
});

module.exports = Name;