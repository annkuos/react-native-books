import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import { BookContext } from "../context/BookContext";

const Search = ({ placeholderText }) => {
    const [searchText, setSearchText] = useState("");
    const { fetchBooks } = useContext(BookContext);

    const search = () => {
        if (searchText && searchText != " ") {
            fetchBooks(searchText);
        }
    };

    return (
        <View>
            <SearchBar
                placeholder={placeholderText}
                onChangeText={(search) => setSearchText(search)}
                value={searchText}
                onBlur={search}
                lightTheme={true}
                containerStyle={{ backgroundColor: "white" }}
                inputStyle={{ backgroundColor: "ghostwhite" }}
                inputContainerStyle={{ backgroundColor: "white" }}
                leftIconContainerStyle={{ backgroundColor: "white" }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default Search;
