'use strict';

import TabBar from './TabBar';

import React, {
	Navigator,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native';

const Nav = {

	LeftButton(route, navigator, index, navState) {
		if(route.idx != 'main') {
			return (
				<TouchableOpacity onPress={() => navigator.pop()} >
					<Text style={[styles.navBarText, styles.navBarButtonText]}>
						返回
					</Text>
				</TouchableOpacity>
			);
		} else {
			return null;
		}
	},

	RightButton(route, navigator, index, navState) {
		return null;
	},

	Title(route, navigator, index, navState) {
		return (
			<Text style={[styles.navBarText, styles.navBarTitleText]}>
				{route.name}
			</Text>
		);
	},
}

const Navi = React.createClass({

	statics: {
		title: '<NavigatorIOS> - Custom',
		description: 'iOS navigation with custom nav bar colors',
	},

	_navigationbar() {
		return (
			<Navigator.NavigationBar
			  routeMapper={Nav}
			  style={styles.navBar} />
		);
	},

	render() {
		return (
			<Navigator
				initialRoute={{idx: 'main', name: '网易', index: 0}}
				renderScene={(route, navigator) =>
					<TabBar name={route.name} navigator={navigator}/>
				}
				navigationBar={this._navigationbar()} />
		);
	}
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	navBar: {
		backgroundColor:'red',
	},
	navBarText: {
		color:'white',
		fontSize: 16,
		margin: 10,
	},
	navBarTitleText: {
		fontWeight: '500',
		fontSize: 22,
	},
});

module.exports = Navi;