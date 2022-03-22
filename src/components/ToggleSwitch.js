import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ToggleSwitch = ({ option1, option2, onToggle }) => {
    const [selected, setSelected] = useState(1);

    const handleOnPress = (value) => {
        setSelected(value);
        onToggle(value);
    };

    return (
        <View style={styles.bookType}>
            <TouchableOpacity
                style={[
                    styles.button,
                    selected === 1
                        ? styles.selectedButton
                        : styles.unSelectedButton,
                ]}
                onPress={() => handleOnPress(1)}
            >
                <Text
                    style={[
                        selected === 1
                            ? styles.selectedButtonText
                            : styles.unSelectedButtonText,
                    ]}
                >
                    {option1}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.button,
                    selected === 2
                        ? styles.selectedButton
                        : styles.unSelectedButton,
                ]}
                onPress={() => handleOnPress(2)}
            >
                <Text
                    style={[
                        selected === 2
                            ? styles.selectedButtonText
                            : styles.unSelectedButtonText,
                    ]}
                >
                    {option2}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bookType: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "darkorange",
        borderRadius: 8,
        marginHorizontal: 10,
    },
    button: {
        width: 180,
        height: 35,
        justifyContent: "center",
    },
    selectedButtonText: {
        color: "white",
        textAlign: "center",
    },
    unSelectedButtonText: {
        color: "darkorange",
        textAlign: "center",
    },
    selectedButton: {
        backgroundColor: "darkorange",
    },
    unSelectedButton: {
        backgroundColor: "white",
    },
});

export default ToggleSwitch;
