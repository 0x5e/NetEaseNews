'use strict';

import RefreshableListView from 'react-native-refreshable-listview';
import TopNewsCell from './TopNewsCell';
import NewsCell from './NewsCell';
import PhotoSetCell from './PhotoSetCell';
import NewsDetail from './NewsDetail';

import React, {
	Image,
	ListView,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from 'react-native';

// http://c.m.163.com/nc/article/headline/T1348647853363/0-30.html

const BASE_URL = 'http://c.m.163.com';

const NEWS_URLS = [
	{
		'title': '头条',
		'urlString': 'headline/T1348647853363',
		'replyUrl': '3g_bbs',
	},
	{
		'title': 'NBA',
		'urlString': 'list/T1348649145984',
		'replyUrl': 'sports_nba_bbs',
	},
	{
		'title': '手机',
		'urlString': 'list/T1348649654285',
		'replyUrl': 'mobile_bbs',
	},
	{
		'title': '移动互联',
		'urlString': 'list/T1351233117091',
		'replyUrl': 'mobile_bbs',
	},
	{
		'title': '娱乐',
		'urlString': 'list/T1348648517839',
		'replyUrl': 'auto_bbs',
	},
	{
		'title': '时尚',
		'urlString': 'list/T1348650593803',
		'replyUrl': 'lady_bbs',
	},
	{
		'title': '电影',
		'urlString': 'list/T1348648650048',
		'replyUrl': 'ent2_bbs',
	},
	{
		'title': '科技',
		'urlString': 'list/T1348649580692',
		'replyUrl': 'tech_bbs',
	},
];

const News = React.createClass({

	getInitialState() {
		return {
			dataSource : new ListView.DataSource({
				rowHasChanged : (row1, row2) => row1 !== row2
			}),
		}
	},

	componentDidMount() {
		this._fetchData();
	},

	_getUrl() {
		return BASE_URL + '/nc/article/' + NEWS_URLS[0].urlString + '/0-20.html';
	},

	_fetchData() {
		fetch(this._getUrl())
			.then((response) => response.json())
			.then((responseData) => {

				for (var key in responseData) {
					responseData = responseData[key];
					break;
				};

				var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
				this.setState({
					dataSource : this.state.dataSource.cloneWithRows(responseData),
				});
				
			})
			.done();
	},

	render() {
		if (this.state.dataSource.getRowCount() === 0) {
			return (
				<View style={{backgroundColor: '#f0f0f0'}} />
			);
		}

		return (
			<RefreshableListView
				dataSource={this.state.dataSource}
				renderRow={this.renderRow}
				renderSeparator={this.renderSeparator}
				loadData={this._fetchData}
		        refreshDescription='下拉刷新'
				style={styles.listView} />
		);

	},

	renderSeparator(sectionID, rowID) {
		return (
			<View key={'SEP_' + sectionID + '_' + rowID} style={styles.rowSeparator}/>
		);
	},

	renderRow(news, sectionID, rowID) {
		var content;
		if (rowID === '0') {
			content = <TopNewsCell model={news} />;
			return content;
		} else if (news.skipType === 'photoset') {
			content = <PhotoSetCell model={news} />;
		} else {
			content = <NewsCell model={news} />;
		}

		return (
			<TouchableHighlight onPress={() => this._pressRow(news, sectionID, rowID)} underlayColor='#dbdbdb'>
				<View>
					{content}
				</View>
			</TouchableHighlight>
		);
	},

	_pressRow(news, sectionID, rowID) {

		if (rowID === '0') {

		} else if (news.skipType === 'photoset') {

		} else {
			
		}
	},

});

const styles = StyleSheet.create({
	listView: {
		backgroundColor: '#f0f0f0',
	},
	rowSeparator: {
		backgroundColor: '#dbdbdb',
		height: 1,
	},
});

module.exports = News;