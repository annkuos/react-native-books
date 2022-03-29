import React, { useState, createContext, useMemo, useEffect } from "react";
import server from "../api/server";

export const BookContext = createContext({
    books: [],
    book: [],
    bookshelf: {},
    bookshelfVolumes: [],
    fetchBooks: () => {},
    fetchBook: () => {},
    fetchBookshelf: () => {},
    fetchBookshelfVolumes: () => {},
    filterType: [],
    setFilterType: () => {},
});

const apiKey = "[KEY_HERE]";

export const BooksContextProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState([]);
    const [filterType, setFilterType] = useState([]);
    const [bookshelf, setBookshelf] = useState({});
    const [bookshelfVolumes, setBookshelfVolumes] = useState([]);

    useEffect(() => {
        console.log(filterType);
    }, [filterType]);

    const fetchBooks = async (searchTerm) => {
        try {
            const response = await server.get(
                `/volumes?country=FI&q=${searchTerm}&${apiKey}`
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

    const fetchBookshelf = async (userId, shelfId) => {
        try {
            const response = await server.get(
                `/users/${userId}/bookshelves/${shelfId}?key=${apiKey}`
            );
            setBookshelf(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    const fetchBookshelfVolumes = async (userId, shelfId) => {
        try {
            const response = await server.get(
                `/users/${userId}/bookshelves/${shelfId}/volumes?key=${apiKey}`
            );
            setBookshelfVolumes(response.data.items);
        } catch (err) {
            console.log(err.message);
        }
    };

    const value = useMemo(
        () => ({
            books,
            book,
            bookshelf,
            bookshelfVolumes,
            fetchBooks,
            fetchBook,
            fetchBookshelf,
            fetchBookshelfVolumes,
            filterType,
            setFilterType,
        }),
        [
            books,
            book,
            bookshelf,
            bookshelfVolumes,
            fetchBooks,
            fetchBook,
            fetchBookshelf,
            fetchBookshelfVolumes,
            filterType,
            setFilterType,
        ]
    );

    return (
        <BookContext.Provider value={value}>{children}</BookContext.Provider>
    );
};
