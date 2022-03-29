import React, { useContext, useEffect } from "react";
import {
    View,
    TouchableOpacity,
    FlatList,
    Image,
    StyleSheet,
} from "react-native";
import { ListItem } from "react-native-elements";

import { BookContext } from "../context/BookContext";

import ToggleSwitch from "../components/ToggleSwitch";
import Search from "../components/SearchBar";
import BookDisplay from "../components/BookDisplay";

const BookListScreen = ({ navigation }) => {
    const { books, fetchBooks, setFilterType } = useContext(BookContext);

    useEffect(() => {
        fetchBooks("pride prejudice");
    }, []);

    return (
        <View style={styles.container}>
            <Search placeholderText={"Search books"} />
            <ToggleSwitch
                option1={"Ebooks"}
                option2={"Audiobooks"}
                onToggle={setFilterType}
            />
            <FlatList
                data={books}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return <BookDisplay navigation={navigation} item={item} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

BookListScreen.navigationOptions = {
    title: "All books",
};

export default BookListScreen;
