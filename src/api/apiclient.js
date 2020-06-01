import axios from 'axios';

const apiClient = axios.create({
 baseURL: process.env.VUE_APP_URL,
});
apiClient.defaults.headers = {
 'Content-Type': 'application/json'
}

export default apiClient;