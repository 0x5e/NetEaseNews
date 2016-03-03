/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var Navi = require('./Application/Navi');

var {
	AppRegistry,
	StatusBarIOS,
} = React;

StatusBarIOS.setStyle('light-content');

AppRegistry.registerComponent('NetEaseNews', () => Navi);
