'use strict';

var React = require('react-native');

var {
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} = React;

/*
	model: {
		"digest": "",
		"docid": "9IG74V5H00963VRO_BBPVPL1JtaoyingupdateDoc",
		"imgextra": [{
			"imgsrc": "http://img6.cache.netease.com/3g/2015/12/26/20151226223536789be.jpg"
		}, {
			"imgsrc": "http://img1.cache.netease.com/3g/2015/12/26/201512262235381508b.jpg"
		}],
		"imgsrc": "http://img3.cache.netease.com/3g/2015/12/26/2015122622353401232.jpg",
		"lmodify": "2015-12-26 22:34:49",
		"photosetID": "54GI0096|85373",
		"priority": 124,
		"ptime": "2015-12-26 22:34:49",
		"replyCount": 1174,
		"skipID": "54GI0096|85373",
		"skipType": "photoset",
		"title": "南昌西汉海昏侯墓提取金板20块"
	}
 */

var PhotoSetCell = React.createClass({

	getInitialState: function() {
		return {
			model : this.props.model,
		};
	},

	render: function() {
		return (
			<TouchableHighlight onPress={() => this.onPress()} underlayColor='#dbdbdb'>
				<View style={styles.container}>
					<Text style={styles.title}>{this.state.model.title}</Text>
					<Text style={styles.reply}>{this.state.model.replyCount + '跟帖'}</Text>
					<View style={{flex: 1, flexDirection: 'row', marginTop: 4, marginLeft: -4, marginRight: -4}} >
						<Image source={{uri : this.state.model.imgsrc}} style={styles.image} />
						{
							this.state.model.imgextra.map(function(imgextra) {
								return (
									<Image key={imgextra.imgsrc} source={{uri : imgextra.imgsrc}} style={styles.image} />
								);
							})
						}
					</View>
				</View>
			</TouchableHighlight>
		);
	},

	onPress : function() {
		// this.props.navigator.push({
		//     title: "News Detail",
		//     component: NewsDetail,
		//     passProps: {news},
		// });
	},
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'clear',
		margin: 8,
	},
	title : {
		color : 'black',
		fontSize : 17,
	},
	summary : {
		color: 'gray',
		fontSize: 14,
		lineHeight: 21,
		height: 42,
		marginTop: 5,
	},
	reply: {
		color: 'gray',
		fontSize: 12,
		textAlign: 'center',
		
		alignSelf: 'flex-end',
		marginTop: -8,

		borderColor: '#dbdbdb',
		borderWidth: 1,
		borderRadius: 8,
		paddingLeft: 4,
		paddingRight: 4,
	},
	image: {
		flex: 1,
		// width: 100,
		height: 75,
		margin: 4,
	}
});

module.exports = PhotoSetCell;