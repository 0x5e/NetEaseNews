/* @flow */
'use strict'

import News from './News';

import React, {
    StyleSheet,
    TabBarIOS,
    View,
} from 'react-native';

const Res = {
	news: require('./res/tabbar_icon_news_normal.png'),
	reader: require('./res/tabbar_icon_reader_normal.png'),
	media: require('./res/tabbar_icon_media_normal.png'),
	found: require('./res/tabbar_icon_found_normal.png'),
	me: require('./res/tabbar_icon_me_normal.png'),
};

const TabBar = React.createClass({

	getInitialState() {
		return {
			selectedTab: 'news',
		};
	},

	render() {
		return (
			<TabBarIOS 
				style={styles.container}
				tintColor="red"
				barTintColor="white">
				<TabBarIOS.Item
					icon={Res.news}
					title='新闻'
					selected={this.state.selectedTab === 'news'}
					onPress={() => {
						this.setState({
							selectedTab: 'news',
						});
					}} >
					<View style={styles.tabContent} >
						<News />
					</View>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					icon={Res.reader}
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
					icon={Res.media}
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
					icon={Res.found}
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
					icon={Res.me}
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

});

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	tabContent: {
		flex: 1,
		marginTop: 64,
		marginBottom: 49,
		backgroundColor: '#f0f0f0',
	},
});

module.exports = TabBar;