import { FlatList, RefreshControl } from 'react-native'
import { useState } from 'react'
import Header from '../header/Header'
import Total from '../total/Total'
import Accounts from '../accounts/Accounts'
import HomeProvider from './HomeProvider'
import Stories from '../stories/Stories'
import Budgets from '../budgets/Budgets'
import BetweenDistance from '../../../UI/beetween-distance/BetweenDistance'

import { useAppContext } from '../../../AppProvider'
import { onRefresh } from '../../../functions/functions'

import { containerStyles, mainGreenColor } from '../../../styles/global'

export default function Home () {
	const data = [
		{ key: 'Stories', component: <Stories/>},
		{ key: 'Total', component: <Total /> },
		{ key: 'Accounts', component: <Accounts /> },
		{ key: 'Budgets', component: <Budgets /> },
		{ key: 'PaddingBottom', component: <BetweenDistance />}

	]

	const { user } = useAppContext()
	const [refreshing, setRefreshing] = useState(false)

	return (
		<HomeProvider>
			<FlatList
				ListHeaderComponent={() => <Header />}
				stickyHeaderIndices={[0]}
				refreshControl={
				<RefreshControl
					refreshing={ refreshing }
					onRefresh={() => onRefresh(setRefreshing, user[1]) }
					colors={[mainGreenColor]}
				/>}
				data={data}
				renderItem={({ item }) => item.component}
				keyExtractor={item => item.key}
				style={ containerStyles }
				contentContainerStyle={{ gap: 10 }}
				nestedScrollEnabled={ true }
				showsVerticalScrollIndicator={ false }
			/>
		</HomeProvider>
	)
}
