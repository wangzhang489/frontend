import http from "../http-common";
import authHeader from "@/services/auth-header";


// const baseURL = "http://localhost:8080/api";

class BookDataService {
    getAll(params) {
        return http.get(`/books`, {params});
    }

    get(id) {
        return http.get(`/books/${id}`);
    }

    create(data) {
        return http.post("/books", data, {headers: authHeader()});
    }

    buybook(data) {
        return http.post("/buybook", data, {headers: authHeader()});
    }
    checkowner(data) {
        return http.post("/checkowner", data, {headers: authHeader()});
    }
    update(id, data) {
        return http.put(`/books/${id}`, data, {headers: authHeader()});
    }

    delete(id) {
        return http.delete(`/books/${id}`, {headers: authHeader()});
    }


    findByTitle(title) {
        return http.get(`/books?title=${title}`);
    }
}

export default new BookDataService();