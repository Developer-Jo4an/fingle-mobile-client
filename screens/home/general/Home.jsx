import { FlatList } from 'react-native'
import Header from '../header/Header'
import Total from '../total/Total'
import Accounts from '../accounts/Accounts'
import HomeProvider from './HomeProvider'

import { containerStyles } from '../../../styles/global'

export default function Home () {
	const data = [
		{ key: 'Header', component: <Header /> },
		{ key: 'Total', component: <Total /> },
		{ key: 'Accounts', component: <Accounts /> },
	]

	return (
		<HomeProvider>
			<FlatList
				data={data}
				renderItem={({ item }) => item.component}
				keyExtractor={item => item.key}
				style={containerStyles}
				contentContainerStyle={{ gap: 10 }}
			/>
		</HomeProvider>
	)
}
