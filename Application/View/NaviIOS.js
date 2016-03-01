'use strict';

var React = require('react-native');

var TabBar = require('./TabBar');

var {
	NavigatorIOS,
	StyleSheet,
	StatusBarIOS,
} = React;

var Navi = React.createClass({

	statics: {
		title: '<NavigatorIOS> - Custom',
		description: 'iOS navigation with custom nav bar colors',
	},

	// onLeftButtonPress() {
	// 	this.refs.nav.push({
	// 		title: 'From Left',
	// 		component: ForLeftScene
	// 	})
	// },

	// onRightButtonPress() {
	// 	this.refs.nav.push({
	// 		title: 'From Right',
	// 		component: ForRightScene
	// 	})
	// },

	render() {
		StatusBarIOS.setStyle('light-content');

		return (
			<NavigatorIOS 
				ref='nav' 
				style={styles.container}
				barTintColor="red"
				tintColor="white"
				titleTextColor="white"
				translucent={true}
				initialRoute={{
					component: TabBar,
					title: '网易',
					leftButtonTitle: '24',
					// onLeftButtonPress: this.onLeftButtonPress,
					rightButtonTitle: 'Search',
					// onRightButtonPress: this.onRightButtonPress,
			}}/>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

module.exports = Navi;