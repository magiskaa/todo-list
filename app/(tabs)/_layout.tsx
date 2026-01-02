import { Tabs } from "expo-router";
import React from 'react';
import { StyleSheet } from "react-native";

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function TabLayout() {
	return (
		<Tabs screenOptions={{
			tabBarStyle: styles.tabBar,
			tabBarActiveTintColor: "#26d419ff",
        	headerShown: false,
			tabBarButton: HapticTab
			}}>
		
			<Tabs.Screen
				name="index"
				options={{
					title: "Lists",
					tabBarIcon: ({ color }) => <IconSymbol size={28} name="list.bullet" color={color} />
				}}
			/>
			<Tabs.Screen
				name="edit"
				options={{
					title: "Edit",
					tabBarIcon: ({ color }) => <IconSymbol size={28} name="square.and.pencil" color={color} />
				}}
			/>
		</Tabs>
	)
}


const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: "#393939ff"
	}
});
