'use strict';

var React = require('react-native');

var News = require('./News');

var {
    StyleSheet,
    TabBarIOS,
    View,
} = React;

var TabBar = React.createClass({

	getInitialState: function() {
		return {
			selectedTab: 'news',
		};
	},

	render: function() {
		return (
			<TabBarIOS 
				style={styles.container}
				tintColor="red"
				barTintColor="white">
				<TabBarIOS.Item
					icon={{uri: 'tabbar_icon_news_normal', scale: 2}}
					selectedIcon={{uri: 'tabbar_icon_news_highlight', scale: 2}}
					title='新闻'
					selected={this.state.selectedTab === 'news'}
					onPress={() => {
						this.setState({
							selectedTab: 'news',
						});
					}} >
					<View style={styles.tabContent} >
						<News title='新闻'/>
					</View>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					icon={{uri: 'tabbar_icon_reader_normal', scale: 2}}
					selectedIcon={{uri: 'tabbar_icon_reader_highlight', scale: 2}}
					title='阅读'
					selected={this.state.selectedTab === 'reader'}
					onPress={() => {
						this.setState({
							selectedTab: 'reader',
						});
					}} >
					<View style={styles.tabContent} >
					</View>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					icon={{uri: 'tabbar_icon_media_normal', scale: 2}}
					selectedIcon={{uri: 'tabbar_icon_media_highlight', scale: 2}}
					title='试听'
					selected={this.state.selectedTab === 'media'}
					onPress={() => {
						this.setState({
							selectedTab: 'media',
						});
					}} >
					<View style={styles.tabContent} >
					</View>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					icon={{uri: 'tabbar_icon_found_normal', scale: 2}}
					selectedIcon={{uri: 'tabbar_icon_found_highlight', scale: 2}}
					title='发现'
					selected={this.state.selectedTab === 'found'}
					onPress={() => {
						this.setState({
							selectedTab: 'found',
						});
					}} >
					<View style={styles.tabContent} >
					</View>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					icon={{uri: 'tabbar_icon_me_normal', scale: 2}}
					selectedIcon={{uri: 'tabbar_icon_me_highlight', scale: 2}}
					title='我'
					selected={this.state.selectedTab === 'me'}
					onPress={() => {
						this.setState({
							selectedTab: 'me',
						});
					}} >
					<View style={styles.tabContent} >
					</View>
				</TabBarIOS.Item>
			</TabBarIOS>
		);
	},

	onPress: function(selectedTab) {
		this.setState({
			selectedTab: selectedTab,
		});
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	tabContent: {
		flex: 1,
		marginTop: 64,
		marginBottom: 49,
		backgroundColor: '#f0f0f0',
	},
	tabText: {
		color: 'black',
		margin: 50,
	},
});

module.exports = TabBar;