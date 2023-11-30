import axios from 'axios';
import authHeader from './auth-header';

const API_TEST_URL = 'http://localhost:8080/api/test/';
const API_URL = 'http://localhost:8080/api/';

class UserService {
    getPublicContent() {
        return axios.get(API_TEST_URL + 'open');
    }

    getUserBoard() {
        return axios.get(API_TEST_URL + 'user', {headers: authHeader()});
    }

    getUserBooks() {
        return axios.get(API_URL + 'mybook', {headers: authHeader()});
    }

    getAdminBoard() {
        return axios.get(API_TEST_URL + 'admin', {headers: authHeader()});
    }
}

export default new UserService();
