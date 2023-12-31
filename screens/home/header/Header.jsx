import {View, Text, TouchableNativeFeedback, Image, Alert} from 'react-native'

import { useAppContext } from '../../../AppProvider'
import { HeaderStyles } from './HeaderStyles'
import { rippleColor } from '../../../styles/global'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import { Buffer } from 'buffer'

const Header = () => {

	const { user } = useAppContext()
	const [userState, _] = user

	return (
		<View style={ HeaderStyles.header }>
			<View style={ HeaderStyles.headerUserInfo }>
				<View style={ HeaderStyles.headerImgWrapper }>
					<Image
						source={{ uri: `data:image/jpeg;base64,${Buffer.from(userState.avatar).toString('base64')}` }}
						style={{ width: 60, height: 60, borderRadius: 30 }}
					></Image>
				</View>
				<View style={ HeaderStyles.headerUserInfoWrapper }>
					<Text>@{ userState.nickname }</Text>
					<View style={ HeaderStyles.headerUserSubscriptionLevel }>
						<Text>{ userState.subscriptionLevel }</Text>
					</View>
				</View>
			</View>

			<View style={ HeaderStyles.headerButtons }>
				<View style={{ borderRadius: 20, overflow: 'hidden' }}>
					<TouchableNativeFeedback background={ TouchableNativeFeedback.Ripple(rippleColor) }>
						<View style={ HeaderStyles.headerButtonWrapper }><FontAwesomeIcon icon={ faBell }/></View>
					</TouchableNativeFeedback>
				</View>

				<View style={{ borderRadius: 20, overflow: 'hidden' }}>
					<TouchableNativeFeedback background={ TouchableNativeFeedback.Ripple(rippleColor) }>
						<View style={ HeaderStyles.headerButtonWrapper }><FontAwesomeIcon icon={ faGear }/></View>
					</TouchableNativeFeedback>
				</View>
			</View>
		</View>
	)
}

export default Header