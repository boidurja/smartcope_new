import React from 'react';
import { Block as GalioBlock } from 'galio-framework';
import theme from '@theme';
import { StyleSheet } from 'react-native';

export function Block ( {
	ml = theme.SIZES.BASE / 2,
	mt = theme.SIZES.BASE / 2,
	mb = theme.SIZES.BASE / 2,
	mr = theme.SIZES.BASE / 2,
	mx = theme.SIZES.BASE / 2,
	my = theme.SIZES.BASE / 2,
	ma = theme.SIZES.BASE / 2,
	pl = theme.SIZES.BASE / 2,
	pt = theme.SIZES.BASE / 2,
	pb = theme.SIZES.BASE / 2,
	pr = theme.SIZES.BASE / 2,
	px = theme.SIZES.BASE / 2,
	py = theme.SIZES.BASE / 2,
	pa = theme.SIZES.BASE / 2,
	style,
	...rest
} ) {

	const marginStyles = [{ margin: ma, maringHorizontal: mx, maringVertical: my, marginLeft: ml, marginTop: mt, marginBottom: mb, marginRight: mr }];
	const paddingStyles = [{ Padding: pa, PaddingHorizontal: px, paringVertical: py, PaddingLeft: pl, PaddingTop: pt, PaddingBottop: pb, PaddingRight: pr }];
	return <GalioBlock style={[marginStyles, paddingStyles, style]} {...rest} />

}


const styles = StyleSheet.create({

});

