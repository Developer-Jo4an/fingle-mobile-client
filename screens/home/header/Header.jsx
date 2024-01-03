import { View, Text, TouchableNativeFeedback, Image } from 'react-native'

import { useAppContext } from '../../../AppProvider'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import { Buffer } from 'buffer'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

import {
	mainGoldColor,
	mainGoldDarkColor,
	mainGreenColor,
	mainGreenDarkColor,
} from '../../../styles/global'
import { styles } from './header-styles'

const Header = () => {

	const { user } = useAppContext()
	const [userState, _] = user

	const { subscriptionLevel, avatar, nickname } = userState

	const navigation = useNavigation()

	return (
		<View style={ styles.header }>
			<View style={ styles.headerUserInfo }>
				<View style={ styles.headerImgWrapper(subscriptionLevel) }>
					<Image
						source={{ uri: `data:image/jpeg;base64,${Buffer.from(avatar).toString('base64')}` }}
						style={{ width: 60, height: 60, borderRadius: 30 }}
					></Image>
				</View>
				<View style={ styles.headerUserInfoWrapper }>
					<Text style={ styles.headerUserInfoNickname }>@{ nickname }</Text>
						<LinearGradient
							colors={ subscriptionLevel === 'Standard' ?
								[mainGreenColor, mainGreenDarkColor]
								:
								[mainGoldColor, mainGoldDarkColor]
							}
							start={{ x: 0, y: 0.5 }}
							end={{ x: 1, y: 1 }}
							style={ styles.headerUserSubscriptionLevelGradient }
						>
							<TouchableNativeFeedback background={ TouchableNativeFeedback.Ripple()}>
								<View style={styles.headerUserSubscriptionLevel}>
									<Text style={ styles.headerUserSubscriptionLevelText }>{ subscriptionLevel }</Text>
								</View>
							</TouchableNativeFeedback>
						</LinearGradient>
				</View>
			</View>

			<View style={ styles.headerButtons }>
				<View style={ styles.headerBorderButtonClickEffect }>
					<TouchableNativeFeedback
						background={ TouchableNativeFeedback.Ripple() }
						onPress={() => navigation.navigate('Notifications')}
					>
						<View style={ styles.headerButtonWrapper }><FontAwesomeIcon icon={ faBell }/></View>
					</TouchableNativeFeedback>
				</View>

				<View style={ styles.headerBorderButtonClickEffect }>
					<TouchableNativeFeedback
						background={ TouchableNativeFeedback.Ripple() }
						onPress={() => navigation.navigate('Settings')}
					>
						<View style={ styles.headerButtonWrapper }><FontAwesomeIcon icon={ faGear }/></View>
					</TouchableNativeFeedback>
				</View>
			</View>
		</View>
	)
}

export default Header