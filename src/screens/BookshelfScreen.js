import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

import { BookContext } from "../context/BookContext";

import BookDisplay from "../components/BookDisplay";

const BookshelfScreen = ({ navigation }) => {
    const {
        bookshelf,
        bookshelfVolumes,
        fetchBookshelf,
        fetchBookshelfVolumes,
    } = useContext(BookContext);

    useEffect(() => {
        fetchBookshelf("1112223334445556677", 1001);
        fetchBookshelfVolumes("1112223334445556677", 1001);
    }, []);

    return (
        <SafeAreaView>
            <Text>bookshelf</Text>
            <Text>{bookshelf?.title}</Text>
            <Text>{bookshelf?.updated}</Text>
            <Text>{bookshelf?.volumeCount}</Text>
            <FlatList
                data={bookshelfVolumes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return <BookDisplay navigation={navigation} item={item} />;
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

BookshelfScreen.navigationOptions = {
    title: "Bookshelf",
    tabBarIcon: <FontAwesome name="book" size={20} />,
};

export default BookshelfScreen;
