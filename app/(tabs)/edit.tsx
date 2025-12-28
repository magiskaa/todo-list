import { StyleSheet, Text, View } from "react-native";

export default function List() {
	return (
		<View
			style={styles.view}>
		
			<Text>Edit app/edit.tsx to edit this screen.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		backgroundColor: "#333",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	}
});
