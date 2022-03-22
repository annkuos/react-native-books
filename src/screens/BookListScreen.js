import React, { useContext, useEffect } from "react";
import {
    View,
    TouchableOpacity,
    FlatList,
    Image,
    StyleSheet,
    Text,
} from "react-native";
import { ListItem } from "react-native-elements";

import { BookContext } from "../context/BookContext";

import ToggleSwitch from "../components/ToggleSwitch";

const BookListScreen = ({ navigation }) => {
    const { books, fetchBooks, setFilterType } = useContext(BookContext);

    useEffect(() => {
        fetchBooks();
        //console.log(books);
    }, []);

    return (
        <View style={styles.container}>
            <ToggleSwitch
                option1={"Ebooks"}
                option2={"Audiobooks"}
                onToggle={setFilterType}
            />
            <FlatList
                data={books.items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            key={item?.id}
                            onPress={() =>
                                navigation.navigate("BookDetails", {
                                    id: item.id,
                                    rating: item.volumeInfo?.averageRating,
                                    ratingCount: item.volumeInfo?.ratingsCount,
                                })
                            }
                        >
                            <ListItem>
                                <ListItem.Content>
                                    <Image
                                        style={{ width: 150, height: 250 }}
                                        source={{
                                            uri: item?.volumeInfo?.imageLinks
                                                ?.smallThumbnail,
                                        }}
                                    />
                                </ListItem.Content>
                            </ListItem>
                        </TouchableOpacity>
                    );
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
