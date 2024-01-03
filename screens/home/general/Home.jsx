import { FlatList, RefreshControl } from 'react-native'
import { useState } from 'react'

import Header from '../header/Header'
import Total from '../total/Total'
import Accounts from '../accounts/Accounts'
import HomeProvider from './HomeProvider'
import Stories from '../stories/Stories'

import { useAppContext } from '../../../AppProvider'
import { onRefresh } from '../../../functions/functions'

import { containerStyles, mainGreenColor } from '../../../styles/global'

export default function Home () {
	const data = [
		{ key: 'Header', component: <Header /> },
		{ key: 'Stories', component: <Stories/>},
		{ key: 'Total', component: <Total /> },
		{ key: 'Accounts', component: <Accounts /> },
	]

	const { user } = useAppContext()
	const [refreshing, setRefreshing] = useState(false)

	return (
		<HomeProvider>
			<FlatList
				refreshControl={
				<RefreshControl
					refreshing= {refreshing }
					onRefresh={() => onRefresh(setRefreshing, user[1]) }
					colors={[mainGreenColor]}
				/>}
				data={data}
				renderItem={({ item }) => item.component}
				keyExtractor={item => item.key}
				style={ containerStyles }
				contentContainerStyle={{ gap: 10 }}
				nestedScrollEnabled={true}
			/>
		</HomeProvider>
	)
}
