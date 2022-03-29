import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { ListItem } from "react-native-elements";

const BookDisplay = ({ navigation, item }) => {
    return (
        <TouchableOpacity
            key={item?.id}
            onPress={() =>
                navigation?.navigate("BookDetails", {
                    id: item?.id,
                    rating: item?.volumeInfo?.averageRating,
                    ratingCount: item?.volumeInfo?.ratingsCount,
                })
            }
        >
            <ListItem>
                <ListItem.Content>
                    <Image
                        style={{ width: 150, height: 250 }}
                        source={{
                            uri: item?.volumeInfo?.imageLinks?.smallThumbnail,
                        }}
                    />
                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({});

export default BookDisplay;
