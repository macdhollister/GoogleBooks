import axios from "axios";

const API = {
    getBooks: query => {
        return axios.get("/api/google", { params: {q: "title" + query } });
    },
    getSavedBooks: () => {
        return axios.get("/api/books");
    },
    deleteBook: id => {
        return axios.delete("/api/books/" + id);
    },
    saveBook: book => {
        return axios.post("/api/books", book);
    }
}

export default API;