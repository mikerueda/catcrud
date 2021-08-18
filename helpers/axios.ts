import axios from 'axios'

const Api = axios.create({
    baseURL: 'localhost:4000/cat',
    timeout: 10000,
    headers: {'Content-Type': 'application/json'}
  });

export default Api