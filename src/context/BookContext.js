import React, { useState, createContext, useMemo, useEffect } from "react";
import server from "../api/server";

export const BookContext = createContext({
    books: [],
    book: [],
    fetchBooks: () => {},
    fetchBook: () => {},
    filterType: [],
    setFilterType: () => {},
});

const apiKey = "[KEY_HERE]";

export const BooksContextProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState([]);
    const [filterType, setFilterType] = useState([]);

    useEffect(() => {
        console.log(filterType);
    }, [filterType]);

    const fetchBooks = async () => {
        try {
            const response = await server.get(
                `/volumes?country=FI&q=pride+prejudice&${apiKey}`
            );
            setBooks(response.data.items);
        } catch (err) {
            console.log(err.message);
        }
    };

    const fetchBook = async (bookId) => {
        try {
            const response = await server.get(
                `/volumes/${bookId}?country=FI&key=${apiKey}`
            );
            setBook(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    const value = useMemo(
        () => ({
            books,
            book,
            fetchBooks,
            fetchBook,
            filterType,
            setFilterType,
        }),
        [books, book, fetchBooks, fetchBook, filterType, setFilterType]
    );

    return (
        <BookContext.Provider value={value}>{children}</BookContext.Provider>
    );
};
