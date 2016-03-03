'use strict';

import React, {
	Image,
	ListView,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from 'react-native';

const NewsDetail = React.createClass({

	render() {
		return (
			<View style={styles.container} />
		);
	},
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

module.exports = NewsDetail;