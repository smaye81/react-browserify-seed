/** @jsx React.DOM */
var React = require('react');
var Name = require('./name-component');

var APP = React.createClass({
	render : function () {
		return (
            <div>
                <h1>Welcome to React in ES6!</h1>
                <Name/>
            </div>
        )
	}
});

module.exports = APP;