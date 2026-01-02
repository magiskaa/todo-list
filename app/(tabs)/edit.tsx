import { useState } from "react";
import { Keyboard, StyleSheet, Switch, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

export default function List() {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");

	const [editable, setEditable] = useState(true);

	return (
		<View style={styles.view}>
			<View style={styles.switch}>
				<Text style={styles.switchLabel}>Editable</Text>
				<Switch
					value={editable}
					onValueChange={setEditable}
				/>
			</View>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<View style={styles.noteView}>
					<TextInput
						style={styles.title}
						placeholder="Title..."
						value={title}
						onChangeText={setTitle}
						returnKeyType="done"
					/>

					<TextInput
						style={styles.input}
						placeholder="Type here..."
						multiline
						scrollEnabled
						editable={editable}
						value={text}
						onChangeText={setText}
					/>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		backgroundColor: "#333",
		flex: 1,
	},
	switch: {
		position: "absolute",
		bottom: 20,
		right: 20,
		zIndex: 1,
	},
	switchLabel: {
		color: "#fff",
		textAlign: "center"
	},
	noteView: {
		backgroundColor: "#333",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		textAlign: "center",
		color: "#fff",
		fontSize: 24,
		marginBottom: 12
	},
  	input: {
		width: "98%",
		height: "75%", 
		padding: 12, 
		borderRadius: 8, 
		backgroundColor: "#444", 
		color: "#fff", 
		textAlignVertical: "top" 
	},
});
