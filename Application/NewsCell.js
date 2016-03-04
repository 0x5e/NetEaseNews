/* @flow */
'use strict'

import React, {
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native';

/*
	model: {
		"boardid": "3g_bbs",
		"digest": "强调坚持军报姓党强军为本创新为要；并发微博祝贺官兵。",
		"docid": "BBPEDJCS00963VRO",
		"imgsrc": "http://img1.cache.netease.com/3g/2015/12/26/20151226173534fe920.jpg",
		"lmodify": "2015-12-26 20:02:01",
		"priority": 230,
		"ptime": "2015-12-26 17:31:08",
		"replyCount": 2958,
		"source": "解放军报$",
		"subtitle": "",
		"title": "习近平敲键盘发微博祝福官兵",
		"url": "http://3g.163.com/ntes/15/1226/17/BBPEDJCS00963VRO.html",
		"url_3w": "http://help.3g.163.com/15/1226/17/BBPEDJCS00963VRO.html",
		"votecount": 1663
	}
 */

const NewsCell = React.createClass({

	getInitialState() {
		return {
			model : this.props.model,
		};
	},

	render() {
		var tagView;
		if (this.state.model.replyCount > 0) {
			tagView = <Text style={styles.reply}>{this.state.model.replyCount + '跟帖'}</Text>
		}

		return (
				<View style={styles.container}>
					<Image source={{uri : this.state.model.imgsrc}} style={styles.image} />
					<View style={{flex: 1, flexDirection: 'column', marginLeft: 8}}>
						<Text style={styles.title}>{this.state.model.title}</Text>
						<Text style={styles.summary}>{this.state.model.digest}</Text>
						{tagView}
					</View>
				</View>
		);
	},
});

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		flexDirection : 'row',
		// height: 90,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		margin: 8,
	},
	image : {
		width: 90,
		height: 70,
	},
	title : {
		color : 'black',
		height: 20,
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
});

module.exports = NewsCell;