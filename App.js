import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome } from "@expo/vector-icons";

import { setNavigator } from "./src/navigationRef";

import BookListScreen from "./src/screens/BookListScreen";
import BookDetailsScreen from "./src/screens/BookDetailsScreen";
import AccountScreen from "./src/screens/AccountScreen";
import BookshelfScreen from "./src/screens/BookshelfScreen";

import { BooksContextProvider } from "./src/context/BookContext";

const bookFlow = createStackNavigator({
    BookList: BookListScreen,
    BookDetails: BookDetailsScreen,
});

bookFlow.navigationOptions = {
    title: "Books",
    tabBarIcon: <FontAwesome name="home" size={20} />,
};

const navigator = createBottomTabNavigator({
    bookFlow,
    Bookshelf: BookshelfScreen,
    Account: AccountScreen,
});

const App = createAppContainer(navigator);

export default () => {
    return (
        <BooksContextProvider>
            <App ref={(navigator) => setNavigator(navigator)} />
        </BooksContextProvider>
    );
};
