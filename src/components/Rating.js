import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Rating = ({ ratingValue, ratingCount }) => {
    const starValue = Math.round(ratingValue) || 0;
    const emptyStarValue = 5 - starValue;

    return (
        <>
            <View style={styles.ratingView}>
                <Text style={styles.text}>{ratingValue || "No ratings"}</Text>
                {Array.from({ length: starValue }, (x, i) => {
                    return (
                        <FontAwesome
                            key={i}
                            name="star"
                            style={{ color: "gold" }}
                            size={20}
                        />
                    );
                })}
                {Array.from({ length: emptyStarValue }, (x, i) => {
                    return (
                        <FontAwesome
                            key={i}
                            name="star"
                            style={{ color: "lightgray" }}
                            size={20}
                        />
                    );
                })}
            </View>
            <View style={styles.info}>
                <Text style={styles.infoText}>{ratingCount || 0} ratings</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    ratingView: {
        flex: 0,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
        paddingTop: 10,
    },
    text: {
        fontSize: 24,
        marginRight: 10,
    },
    info: {
        marginBottom: 15,
    },
    infoText: {
        color: "gray",
    },
});

export default Rating;
