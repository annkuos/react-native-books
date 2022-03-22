import React, {
    useState,
    createContext,
    useMemo,
    useCallback,
    useEffect,
} from "react";
import server from "../api/server";
import axios from "axios";

export const BookContext = createContext({
    books: [],
    book: [],
    fetchBooks: () => {},
    fetchBook: () => {},
    filterType: [],
    setFilterType: () => {},
});

const apiKey = "AIzaSyAGKHGRMveM3V_dgq3fvoECdHyCRVzZsTc";

export const BooksContextProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState([]);
    const [filterType, setFilterType] = useState([]);

    useEffect(() => {
        console.log(filterType);
    }, [filterType]);

    const fetchBooks = async () => {
        try {
            /*const response = await server.get(
                "https://www.googleapis.com/books/v1/volumes?country=FI&q=pride+prejudice&key=AIzaSyAGKHGRMveM3V_dgq3fvoECdHyCRVzZsTc"
            );*/
            //setBooks(response.data.items);
            setBooks({
                kind: "books#volumes",
                totalItems: 587,
                items: [
                    {
                        kind: "books#volume",
                        id: "LOFwDwAAQBAJ",
                        etag: "oQpgKIEy8Jo",
                        selfLink:
                            "https://www.googleapis.com/books/v1/volumes/LOFwDwAAQBAJ",
                        volumeInfo: {
                            title: "Jane Austen's Pride and Prejudice",
                            subtitle: "A Book-to-Table Classic",
                            authors: ["Jane Austen"],
                            publisher: "Penguin",
                            publishedDate: "2018-10-16",
                            description:
                                "Puffin Plated: A Book-to-Table Reading Experience A deluxe, full-color hardback edition of the perennial Jane Austen classic featuring a selection of recipes for tea-time treats by the one and only Martha Stewart! Have your book and eat it, too, with this clever edition of a classic novel, featuring delicious recipes from celebrity chefs. In this edition of Jane Austen's regency classic Pride and Prejudice, plan a fancy tea party or book club gathering with recipes for sweet confections and pastries. From maple glazed scones and delicate sugar and spice cake, to berry tartlets and French macaroons. Bring your friends and family together with a good meal and a good book! Book includes full, unabridged text of Jane Austen's Pride and Prejudice, interspersed with recipes, food photography, and special food artwork.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9780593113189",
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "0593113187",
                                },
                            ],
                            readingModes: {
                                text: true,
                                image: false,
                            },
                            pageCount: 336,
                            printType: "BOOK",
                            categories: ["Cooking"],
                            maturityRating: "NOT_MATURE",
                            allowAnonLogging: false,
                            contentVersion: "1.1.1.0.preview.2",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false,
                            },
                            imageLinks: {
                                smallThumbnail:
                                    "http://books.google.com/books/content?id=LOFwDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail:
                                    "http://books.google.com/books/content?id=LOFwDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                            },
                            language: "en",
                            previewLink:
                                "http://books.google.fi/books?id=LOFwDwAAQBAJ&printsec=frontcover&dq=pride+prejudice&hl=&cd=1&source=gbs_api",
                            infoLink:
                                "https://play.google.com/store/books/details?id=LOFwDwAAQBAJ&source=gbs_api",
                            canonicalVolumeLink:
                                "https://play.google.com/store/books/details?id=LOFwDwAAQBAJ",
                        },
                        saleInfo: {
                            country: "FI",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 14.65,
                                currencyCode: "EUR",
                            },
                            retailPrice: {
                                amount: 14.65,
                                currencyCode: "EUR",
                            },
                            buyLink:
                                "https://play.google.com/store/books/details?id=LOFwDwAAQBAJ&rdid=book-LOFwDwAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 14650000,
                                        currencyCode: "EUR",
                                    },
                                    retailPrice: {
                                        amountInMicros: 14650000,
                                        currencyCode: "EUR",
                                    },
                                },
                            ],
                        },
                        accessInfo: {
                            country: "FI",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED",
                            epub: {
                                isAvailable: true,
                                acsTokenLink:
                                    "http://books.google.fi/books/download/Jane_Austen_s_Pride_and_Prejudice-sample-epub.acsm?id=LOFwDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
                            },
                            pdf: {
                                isAvailable: false,
                            },
                            webReaderLink:
                                "http://play.google.com/books/reader?id=LOFwDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false,
                        },
                        searchInfo: {
                            textSnippet:
                                "In this edition of Jane Austen&#39;s regency classic Pride and Prejudice, plan a fancy tea party or book club gathering with recipes for sweet confections and pastries.",
                        },
                    },
                    {
                        kind: "books#volume",
                        id: "BD2yDwAAQBAJ",
                        etag: "b7KByGEaPbQ",
                        selfLink:
                            "https://www.googleapis.com/books/v1/volumes/BD2yDwAAQBAJ",
                        volumeInfo: {
                            title: "Pride and Prejudice",
                            authors: ["Jane Austen"],
                            publisher: "BoD – Books on Demand",
                            publishedDate: "2019-09-25",
                            description:
                                "Reproduction of the original: Pride and Prejudice by Jane Austen",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9783734078644",
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "3734078644",
                                },
                            ],
                            readingModes: {
                                text: false,
                                image: true,
                            },
                            pageCount: 364,
                            printType: "BOOK",
                            categories: ["Fiction"],
                            averageRating: 5,
                            ratingsCount: 2,
                            maturityRating: "NOT_MATURE",
                            allowAnonLogging: false,
                            contentVersion: "preview-1.0.0",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false,
                            },
                            imageLinks: {
                                smallThumbnail:
                                    "http://books.google.com/books/content?id=BD2yDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail:
                                    "http://books.google.com/books/content?id=BD2yDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                            },
                            language: "en",
                            previewLink:
                                "http://books.google.fi/books?id=BD2yDwAAQBAJ&printsec=frontcover&dq=pride+prejudice&hl=&cd=2&source=gbs_api",
                            infoLink:
                                "http://books.google.fi/books?id=BD2yDwAAQBAJ&dq=pride+prejudice&hl=&source=gbs_api",
                            canonicalVolumeLink:
                                "https://books.google.com/books/about/Pride_and_Prejudice.html?hl=&id=BD2yDwAAQBAJ",
                        },
                        saleInfo: {
                            country: "FI",
                            saleability: "NOT_FOR_SALE",
                            isEbook: false,
                        },
                        accessInfo: {
                            country: "FI",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED",
                            epub: {
                                isAvailable: false,
                            },
                            pdf: {
                                isAvailable: false,
                            },
                            webReaderLink:
                                "http://play.google.com/books/reader?id=BD2yDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false,
                        },
                        searchInfo: {
                            textSnippet:
                                "Reproduction of the original: Pride and Prejudice by Jane Austen",
                        },
                    },
                    {
                        kind: "books#volume",
                        id: "zoTFDAAAQBAJ",
                        etag: "26INcuqaZj8",
                        selfLink:
                            "https://www.googleapis.com/books/v1/volumes/zoTFDAAAQBAJ",
                        volumeInfo: {
                            title: "Pride and Prejudice",
                            authors: ["Jane Austen"],
                            publisher: "Pan Macmillan",
                            publishedDate: "2016-07-19",
                            description:
                                "A tour de force of wit and sparkling dialogue, Pride and Prejudice shows how the headstrong Elizabeth Bennet and the aristocratic Mr Darcy must have their pride humbled and their prejudices dissolved before they can acknowledge their love for each other. Austen's best-loved novel is an unforgettable story about the inaccuracy of first impressions, the power of reason, and above all the strange dynamics of human relationships and emotions. Gorgeously illustrated by the celebrated Hugh Thomson, this Macmillan Collector's Library edition also includes an afterword by author and critic Henry Hitchings.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9781909621657",
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "190962165X",
                                },
                            ],
                            readingModes: {
                                text: false,
                                image: false,
                            },
                            pageCount: 496,
                            printType: "BOOK",
                            categories: ["Fiction"],
                            maturityRating: "NOT_MATURE",
                            allowAnonLogging: false,
                            contentVersion: "0.2.0.0.preview.0",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false,
                            },
                            imageLinks: {
                                smallThumbnail:
                                    "http://books.google.com/books/content?id=zoTFDAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                                thumbnail:
                                    "http://books.google.com/books/content?id=zoTFDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                            },
                            language: "en",
                            previewLink:
                                "http://books.google.fi/books?id=zoTFDAAAQBAJ&dq=pride+prejudice&hl=&cd=3&source=gbs_api",
                            infoLink:
                                "http://books.google.fi/books?id=zoTFDAAAQBAJ&dq=pride+prejudice&hl=&source=gbs_api",
                            canonicalVolumeLink:
                                "https://books.google.com/books/about/Pride_and_Prejudice.html?hl=&id=zoTFDAAAQBAJ",
                        },
                        saleInfo: {
                            country: "FI",
                            saleability: "NOT_FOR_SALE",
                            isEbook: false,
                        },
                        accessInfo: {
                            country: "FI",
                            viewability: "NO_PAGES",
                            embeddable: false,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED",
                            epub: {
                                isAvailable: false,
                            },
                            pdf: {
                                isAvailable: false,
                            },
                            webReaderLink:
                                "http://play.google.com/books/reader?id=zoTFDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "NONE",
                            quoteSharingAllowed: false,
                        },
                        searchInfo: {
                            textSnippet:
                                "A tour de force of wit and sparkling dialogue, Pride and Prejudice shows how the headstrong Elizabeth Bennet and the aristocratic Mr Darcy must have their pride humbled and their prejudices dissolved before they can acknowledge their love ...",
                        },
                    },
                    {
                        kind: "books#volume",
                        id: "4O4kxQEACAAJ",
                        etag: "0u962qvgZoQ",
                        selfLink:
                            "https://www.googleapis.com/books/v1/volumes/4O4kxQEACAAJ",
                        volumeInfo: {
                            title: "Pride & Prejudice",
                            authors: ["Jane Austen"],
                            publisher: "Fingerprint Classics",
                            publishedDate: "2018",
                            description:
                                "Elizabeth Bennett's early determination to dislike Mr. Darcy is a prejudice only matched by his arrogant pride.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_10",
                                    identifier: "938777967X",
                                },
                                {
                                    type: "ISBN_13",
                                    identifier: "9789387779679",
                                },
                            ],
                            readingModes: {
                                text: false,
                                image: false,
                            },
                            pageCount: 519,
                            printType: "BOOK",
                            categories: ["Courtship"],
                            maturityRating: "NOT_MATURE",
                            allowAnonLogging: false,
                            contentVersion: "preview-1.0.0",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false,
                            },
                            language: "en",
                            previewLink:
                                "http://books.google.fi/books?id=4O4kxQEACAAJ&dq=pride+prejudice&hl=&cd=4&source=gbs_api",
                            infoLink:
                                "http://books.google.fi/books?id=4O4kxQEACAAJ&dq=pride+prejudice&hl=&source=gbs_api",
                            canonicalVolumeLink:
                                "https://books.google.com/books/about/Pride_Prejudice.html?hl=&id=4O4kxQEACAAJ",
                        },
                        saleInfo: {
                            country: "FI",
                            saleability: "NOT_FOR_SALE",
                            isEbook: false,
                        },
                        accessInfo: {
                            country: "FI",
                            viewability: "NO_PAGES",
                            embeddable: false,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED",
                            epub: {
                                isAvailable: false,
                            },
                            pdf: {
                                isAvailable: false,
                            },
                            webReaderLink:
                                "http://play.google.com/books/reader?id=4O4kxQEACAAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "NONE",
                            quoteSharingAllowed: false,
                        },
                        searchInfo: {
                            textSnippet:
                                "Elizabeth Bennett&#39;s early determination to dislike Mr. Darcy is a prejudice only matched by his arrogant pride.",
                        },
                    },
                    {
                        kind: "books#volume",
                        id: "OkQbQAAACAAJ",
                        etag: "AM28E9C/i3k",
                        selfLink:
                            "https://www.googleapis.com/books/v1/volumes/OkQbQAAACAAJ",
                        volumeInfo: {
                            title: "Pride and Prejudice",
                            authors: ["Jane Austen", "Siobhan Lancaster"],
                            publisher: "Longman Trade/Caroline House",
                            publishedDate: "1991",
                            description:
                                '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife." To the delight of Mrs Bennet, a wealthy young bachelor arrives in the neighbourhood, presenting her with the perfect opportunity to marry off the eldest of her five daughters... But what of Elizabeth, her second daughter -and the haughty Mr Darcy?',
                            industryIdentifiers: [
                                {
                                    type: "ISBN_10",
                                    identifier: "0582077206",
                                },
                                {
                                    type: "ISBN_13",
                                    identifier: "9780582077201",
                                },
                            ],
                            readingModes: {
                                text: false,
                                image: false,
                            },
                            pageCount: 378,
                            printType: "BOOK",
                            categories: ["Fiction"],
                            maturityRating: "NOT_MATURE",
                            allowAnonLogging: false,
                            contentVersion: "preview-1.0.0",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false,
                            },
                            imageLinks: {
                                smallThumbnail:
                                    "http://books.google.com/books/content?id=OkQbQAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                                thumbnail:
                                    "http://books.google.com/books/content?id=OkQbQAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                            },
                            language: "en",
                            previewLink:
                                "http://books.google.fi/books?id=OkQbQAAACAAJ&dq=pride+prejudice&hl=&cd=5&source=gbs_api",
                            infoLink:
                                "http://books.google.fi/books?id=OkQbQAAACAAJ&dq=pride+prejudice&hl=&source=gbs_api",
                            canonicalVolumeLink:
                                "https://books.google.com/books/about/Pride_and_Prejudice.html?hl=&id=OkQbQAAACAAJ",
                        },
                        saleInfo: {
                            country: "FI",
                            saleability: "NOT_FOR_SALE",
                            isEbook: false,
                        },
                        accessInfo: {
                            country: "FI",
                            viewability: "NO_PAGES",
                            embeddable: false,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED",
                            epub: {
                                isAvailable: false,
                            },
                            pdf: {
                                isAvailable: false,
                            },
                            webReaderLink:
                                "http://play.google.com/books/reader?id=OkQbQAAACAAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "NONE",
                            quoteSharingAllowed: false,
                        },
                        searchInfo: {
                            textSnippet:
                                "&quot;It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
                        },
                    },
                    {
                        kind: "books#volume",
                        id: "Pr47EAAAQBAJ",
                        etag: "G1VVlJfyUwQ",
                        selfLink:
                            "https://www.googleapis.com/books/v1/volumes/Pr47EAAAQBAJ",
                        volumeInfo: {
                            title: "Ylpeys ja ennakkoluulo",
                            authors: ["Jane Austen"],
                            publisher: "Good Press",
                            publishedDate: "2021-07-29",
                            description:
                                '"Ylpeys ja ennakkoluulo" – Jane Austen (käännös O. A. Joutsen). Julkaisija - Good Press. Good Press on moneen tyylilajiin keskittynyt laajamittainen julkaisija. Pyrimme julkaisemaan klassikoita ja kaunokirjallisuutta sekä vielä löytämättömiä timantteja. Tuotamme kirjat jotka palavat halusta tulla luetuksi. Good Press painokset ovat tarkasti editoitu ja formatoitu vastaamaan nykyajan lukijan tarpeita ottaen huomioon kaikki e-lukijat ja laitteet. Tavoitteemme on luoda lukijaystävällisiä e-kirjoja, saatavilla laadukkaassa digitaalisessa muodossa.',
                            industryIdentifiers: [
                                {
                                    type: "OTHER",
                                    identifier: "EAN:4064066345280",
                                },
                            ],
                            readingModes: {
                                text: true,
                                image: true,
                            },
                            pageCount: 312,
                            printType: "BOOK",
                            categories: ["Fiction"],
                            maturityRating: "NOT_MATURE",
                            allowAnonLogging: false,
                            contentVersion: "0.2.2.0.preview.3",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false,
                            },
                            imageLinks: {
                                smallThumbnail:
                                    "http://books.google.com/books/content?id=Pr47EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail:
                                    "http://books.google.com/books/content?id=Pr47EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                            },
                            language: "fi",
                            previewLink:
                                "http://books.google.fi/books?id=Pr47EAAAQBAJ&printsec=frontcover&dq=pride+prejudice&hl=&cd=6&source=gbs_api",
                            infoLink:
                                "https://play.google.com/store/books/details?id=Pr47EAAAQBAJ&source=gbs_api",
                            canonicalVolumeLink:
                                "https://play.google.com/store/books/details?id=Pr47EAAAQBAJ",
                        },
                        saleInfo: {
                            country: "FI",
                            saleability: "FOR_SALE",
                            isEbook: true,
                            listPrice: {
                                amount: 1.99,
                                currencyCode: "EUR",
                            },
                            retailPrice: {
                                amount: 1.99,
                                currencyCode: "EUR",
                            },
                            buyLink:
                                "https://play.google.com/store/books/details?id=Pr47EAAAQBAJ&rdid=book-Pr47EAAAQBAJ&rdot=1&source=gbs_api",
                            offers: [
                                {
                                    finskyOfferType: 1,
                                    listPrice: {
                                        amountInMicros: 1990000,
                                        currencyCode: "EUR",
                                    },
                                    retailPrice: {
                                        amountInMicros: 1990000,
                                        currencyCode: "EUR",
                                    },
                                },
                            ],
                        },
                        accessInfo: {
                            country: "FI",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED",
                            epub: {
                                isAvailable: true,
                                acsTokenLink:
                                    "http://books.google.fi/books/download/Ylpeys_ja_ennakkoluulo-sample-epub.acsm?id=Pr47EAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
                            },
                            pdf: {
                                isAvailable: true,
                                acsTokenLink:
                                    "http://books.google.fi/books/download/Ylpeys_ja_ennakkoluulo-sample-pdf.acsm?id=Pr47EAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
                            },
                            webReaderLink:
                                "http://play.google.com/books/reader?id=Pr47EAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false,
                        },
                        searchInfo: {
                            textSnippet:
                                "&quot;Ylpeys ja ennakkoluulo&quot; – Jane Austen (käännös O. A. Joutsen).",
                        },
                    },
                    {
                        kind: "books#volume",
                        id: "tQPECgAAQBAJ",
                        etag: "L29vkioT4fc",
                        selfLink:
                            "https://www.googleapis.com/books/v1/volumes/tQPECgAAQBAJ",
                        volumeInfo: {
                            title: "Classics Reimagined, Pride and Prejudice",
                            authors: ["Jane Austen"],
                            publisher: "Classics Reimagined",
                            publishedDate: "2015-10",
                            description:
                                "More amazing and inspiring than your tired, old bedtime story. Classics Reimagined is a library of stunning collector's editions of classic novels illustrated by contemporary artists from around the world. Each artist offers his or her own unique, visual interpretation of the most well-loved, widely read, and avidly collected literature from renowned authors. From Grimm's Fair Tales toThe Wonderful Wizard of Oz and from Edgar Allen Poe to Sir Arthur Conan Doyle, art lovers and book collectors alike will not be able to resist owning the whole collection. Enjoy Jane Austen's witty novel of love and misunderstanding as you've never seen it before! Alice Pattullo's modern, illustrative interpretation of Pride and Prejudice follows the romantic adventures of Bennett sisters, Mr. Bingley and his dour friend Mr. Darcy. The lush, multi-faceted images breathe new life into this classic novel, making it a collectible for book and art lovers every where.",
                            industryIdentifiers: [
                                {
                                    type: "ISBN_13",
                                    identifier: "9781631590764",
                                },
                                {
                                    type: "ISBN_10",
                                    identifier: "1631590766",
                                },
                            ],
                            readingModes: {
                                text: false,
                                image: true,
                            },
                            pageCount: 376,
                            printType: "BOOK",
                            categories: ["Fiction"],
                            maturityRating: "NOT_MATURE",
                            allowAnonLogging: false,
                            contentVersion: "0.2.0.0.preview.1",
                            panelizationSummary: {
                                containsEpubBubbles: false,
                                containsImageBubbles: false,
                            },
                            imageLinks: {
                                smallThumbnail:
                                    "http://books.google.com/books/content?id=tQPECgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                                thumbnail:
                                    "http://books.google.com/books/content?id=tQPECgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                            },
                            language: "en",
                            previewLink:
                                "http://books.google.fi/books?id=tQPECgAAQBAJ&printsec=frontcover&dq=pride+prejudice&hl=&cd=7&source=gbs_api",
                            infoLink:
                                "http://books.google.fi/books?id=tQPECgAAQBAJ&dq=pride+prejudice&hl=&source=gbs_api",
                            canonicalVolumeLink:
                                "https://books.google.com/books/about/Classics_Reimagined_Pride_and_Prejudice.html?hl=&id=tQPECgAAQBAJ",
                        },
                        saleInfo: {
                            country: "FI",
                            saleability: "NOT_FOR_SALE",
                            isEbook: false,
                        },
                        accessInfo: {
                            country: "FI",
                            viewability: "PARTIAL",
                            embeddable: true,
                            publicDomain: false,
                            textToSpeechPermission: "ALLOWED",
                            epub: {
                                isAvailable: false,
                            },
                            pdf: {
                                isAvailable: false,
                            },
                            webReaderLink:
                                "http://play.google.com/books/reader?id=tQPECgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                            accessViewStatus: "SAMPLE",
                            quoteSharingAllowed: false,
                        },
                        searchInfo: {
                            textSnippet:
                                "The lush, multi-faceted images breathe new life into this classic novel, making it a collectible for book and art lovers every where.",
                        },
                    },
                ],
            });
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
