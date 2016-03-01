'use strict';

var React = require('react-native');

var {
	Image,
	ListView,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} = React;

var NewsDetail = React.createClass({

	render() {
		return (
			<View style={styles.container} />
		);
	},
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

module.exports = NewsDetail;