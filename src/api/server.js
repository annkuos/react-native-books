import axios from "axios";

const apiKey = "AIzaSyAGKHGRMveM3V_dgq3fvoECdHyCRVzZsTc";

export default axios.create({
    baseURL: `https://www.googleapis.com/books/v1`,
});
