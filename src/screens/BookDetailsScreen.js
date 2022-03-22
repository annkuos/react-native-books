import React, { useContext, useEffect } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from "react-native";
import { Card } from "react-native-elements";
import { WebView } from "react-native-webview";

import { BookContext } from "../context/BookContext";

import Rating from "../components/Rating";

const BookDetailsScreen = ({ navigation }) => {
    const { book, fetchBook } = useContext(BookContext);
    const bookId = navigation.getParam("id");
    const rating = navigation.getParam("rating");
    const ratingCount = navigation.getParam("ratingCount");

    const html = `<html><body><div style="padding-right: 30px; font-size:32;">${book?.volumeInfo?.description}</div></body></html>`;

    useEffect(() => {
        fetchBook(bookId);
    }, []);

    useEffect(() => {
        //console.log(book.volumeInfo);
    }, [book]);

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.genInfo}>
                <Text style={styles.category}>
                    {book?.volumeInfo?.categories[0]}
                </Text>
                <Text style={styles.title}>{book?.volumeInfo?.title}</Text>
                <Text style={styles.author}>{book?.volumeInfo?.authors}</Text>
            </View>
            <View style={styles.pubInfo}>
                <Text style={styles.grayText}>
                    Published from {book?.volumeInfo?.publisher}
                </Text>
                <Text style={styles.grayText}>
                    {book?.volumeInfo?.publishedDate}
                </Text>
            </View>

            <Card
                containerStyle={styles.card}
                wrapperStyle={{ marginVertical: -35 }}
            >
                <Image
                    style={styles.coverImage}
                    source={{
                        uri: book?.volumeInfo?.imageLinks.smallThumbnail,
                    }}
                />
            </Card>

            <Rating ratingValue={rating} ratingCount={ratingCount} />
            <WebView
                style={{
                    height: 400,
                    width: 360,
                    opacity: 0.99,
                    overflow: "hidden",
                    backgroundColor: "whitesmoke",
                }}
                originWhitelist={["*"]}
                source={{ html: html }}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
    },
    title: {
        fontSize: 22,
    },
    card: {
        backgroundColor: "gainsboro",
        paddingBottom: 20,
        marginRight: -15,
        height: 250,
        borderTopLeftRadius: 35,
        borderBottomLeftRadius: 35,
        borderWidth: 0,
    },
    coverImage: {
        width: 300,
        height: 250,
        marginVertical: 20,
        alignSelf: "flex-end",
        marginEnd: -15,
        borderTopLeftRadius: 35,
        borderBottomLeftRadius: 35,
        paddingBottom: 20,
    },
    pubInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    category: {
        color: "darkorange",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 12,
        marginBottom: 5,
    },
    author: {
        marginTop: 5,
        marginBottom: 10,
    },
    grayText: {
        color: "gray",
    },
});

BookDetailsScreen.navigationOptions = {
    title: "",
};

export default BookDetailsScreen;
