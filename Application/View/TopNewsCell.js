'use strict';

var Swiper = require('react-native-swiper')

var React = require('react-native');

var {
	Image,
	StyleSheet,
	Text,
	View,
} = React;

/*
	model: {
		"ads": [{
			"imgsrc": "http://img2.cache.netease.com/3g/2015/12/26/20151226142055bcd2b.jpg",
			"subtitle": "",
			"tag": "photoset",
			"title": "齐齐哈尔一跨河大桥坍塌 两车坠桥",
			"url": "00AP0001|106848"
		}, {
			"imgsrc": "http://img5.cache.netease.com/3g/2015/12/26/2015122622305510eae.png",
			"subtitle": "",
			"tag": "photoset",
			"title": "硕士研究生统一入学考试开考",
			"url": "54GI0096|85372"
		}, {
			"imgsrc": "http://img1.cache.netease.com/3g/2015/12/26/20151226221838dca59.jpg",
			"subtitle": "",
			"tag": "photoset",
			"title": "江西多地浓雾笼罩 城市建筑若隐若现",
			"url": "54GI0096|85370"
		}, {
			"imgsrc": "http://img3.cache.netease.com/3g/2015/12/26/20151226221957ebf78.jpg",
			"subtitle": "",
			"tag": "photoset",
			"title": "浪漫！男子将戒指升到3万米高空求婚",
			"url": "54GI0096|85369"
		}, {
			"imgsrc": "http://img6.cache.netease.com/3g/2015/12/26/201512261603177a1af.jpg",
			"subtitle": "",
			"tag": "photoset",
			"title": "山东平邑石膏矿塌方1人身亡17人被困",
			"url": "54GI0096|85365"
		}],
		"alias": "Top News",
		"cid": "C1348646712614",
		"digest": "",
		"docid": "9IG74V5H00963VRO_BBPVUHIRlirisenupdateDoc",
		"ename": "iosnews",
		"hasAD": 1,
		"hasCover": false,
		"hasHead": 1,
		"hasIcon": true,
		"hasImg": 1,
		"imgextra": [],
		"imgsrc": "http://img6.cache.netease.com/3g/2015/12/26/20151226225939fe110.jpg",
		"lmodify": "2015-12-26 22:37:29",
		"order": 1,
		"photosetID": "54GI0096|85374",
		"priority": 250,
		"ptime": "2015-12-26 22:37:29",
		"replyCount": 41159,
		"skipID": "54GI0096|85374",
		"skipType": "photoset",
		"template": "manual",
		"title": "中国女子泰国行窃 被抓后狂飚日语",
		"tname": "头条"
	}
 */

var TopNewsCell = React.createClass({

	getInitialState: function() {
		return {
			model : this.props.model,
		};
	},

	render: function() {
		return (
			<Swiper 
				loop={true}
				height={200}
				paginationStyle={styles.pagination} 
				dot={<View style={styles.dot} />}
				activeDot={<View style={styles.activeDot} />} >
				{
					this.state.model.ads.map(function(ad) {
						return (
							<Image 
								key=''
								source={{uri: ad.imgsrc}}
								style={styles.image}>
								<Text style={styles.title}>{ad.title}</Text>
							</Image>
						);
					})
				}
			</Swiper>
		);
	},
});

var styles = StyleSheet.create({
	pagination: {
		left: null,
		right: 8,
		bottom: 8,
	},
	dot: {
		backgroundColor:'rgba(255,255,255,0.5)', 
		width: 2, 
		height: 2,
		borderRadius: 1, 
		margin: 3,
	},
	activeDot: {
		backgroundColor:'rgba(255,255,255,1)', 
		width: 5, 
		height: 5,
		borderRadius: 2.5, 
		margin: 3,
	},
	image: {
		flex: 1,
		flexDirection: 'row',
	},
	title : {
		color : 'white',
		backgroundColor : 'clear',
		fontSize : 15,
		alignSelf: 'flex-end',
		left: 8,
		bottom: 8,
	},
});

module.exports = TopNewsCell;