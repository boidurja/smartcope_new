import React, { FunctionComponent, useState } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, Image } from "react-native"
import { Screen, Button } from "components"
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Block } from "components/block/block"
const { width: ScreenWidth } = Dimensions.get('screen');
import { NavigationProp, NavigationState } from "@react-navigation/native";

export interface AuthScreensWelcomeScreenProps {
	navigation?: NavigationProp<Record<string, object>, string, NavigationState, {}, {}>
}

export const AuthScreensWelcomeScreen: FunctionComponent<AuthScreensWelcomeScreenProps> = observer((props) => {

	const {
		navigation
	} = props;
	const [activeSlide, setActiveSlide ] = useState(0);

	const items = [
		{ image: require('../../../assets/splash1.jpg') },
		{ image: require('../../../assets/splash2.jpg') },
		{ image: require('../../../assets/splash3.jpg') }
	];

	function renderItem ( { item, index } ) {
		return (
			<Image style={{ alignSelf: 'center', flex: 1, resizeMode: 'contain', width: ScreenWidth / 1.25 }} source={item.image}></Image>
		)
	}
	
	return (
		<Screen preset="fixed">
			<Block flex>
				<Carousel
					sliderWidth={ScreenWidth}
					itemWidth={ScreenWidth}
					data={ items }
					layout="default"
					renderItem={ renderItem }
					onSnapToItem={ index => { setActiveSlide( index ) } }/>
				<Block>
					<Pagination 
						activeDotIndex={activeSlide}
						dotsLength={items.length} 
						dotStyle={{
							width: 10,
							height: 10
						}}/>
				</Block>
			</Block>
			<Block row my={20} space="evenly" px={20}>
				<Button title="Countinue" containerStyle={{ flex: 1 }} onPress={ ( ) => navigation.navigate('login') }/>
			</Block>
		</Screen>
	)
})
