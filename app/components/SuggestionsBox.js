var React = require('react');

var SuggestionsBox = React.createClass({

	render: function() {
		return (
			<div 
				style={
					{
						'border': '1px solid green',
						'minHeight': '33.3%'
					}
				}> 
				<h1> Suggestions </h1>
			</div>
		);
	}

});

module.exports = SuggestionsBox;